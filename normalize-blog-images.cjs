// normalize-blog-images.js
//
// One-off cleanup for images already sitting in public/images/blog/ from
// before final-test.js's saveArticleImagesForBlog started resizing on
// generation. Walks every article subfolder, and for each hero.webp /
// benefits.webp / precautions.webp found, resizes it to the SAME caps
// final-test.js now uses going forward (kept in one place below so this
// script and the pipeline don't drift apart again).
//
// Run from the thrive-affiliate repo root (where public/images/blog lives),
// or pass a path as the first argument. Requires sharp — same package
// already installed for final-test.js; run `npm install sharp` in whichever
// folder you run this script from if it's not already there.
//
// Usage:
//   node normalize-blog-images.js                  # process public/images/blog
//   node normalize-blog-images.js path/to/blog/dir  # process a different folder
//   node normalize-blog-images.js --dry-run         # preview only, no writes
//
// Safe by design:
//   - Skips any file already at/under the target dimensions AND under the
//     150KB budget — avoids needless re-compression (and quality loss) of
//     images that are already fine.
//   - Only ever shrinks (fit: 'inside', withoutEnlargement: true) — never
//     upscales a small image.
//   - Writes to a .tmp file and renames over the original only after a
//     successful resize, so a crash mid-run can't leave a half-written file.
//   - Unrecognized filenames (anything not hero/benefits/precautions.webp)
//     are listed and skipped rather than guessed at.

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Keep these in sync with final-test.js's IMAGE_SLOT_MAX_DIMENSIONS and
// imageFallbacks.ts's IMAGE_DIMENSIONS — all three should agree.
const SLOT_MAX_DIMENSIONS = {
  hero:        { width: 1200, height: 675 },
  benefits:    { width: 1000, height: 667 },
  precautions: { width: 1000, height: 667 },
};
const SIZE_BUDGET_KB = 150;
const WEBP_QUALITY = 85;

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const targetDir = args.find(a => !a.startsWith('--')) || path.join(process.cwd(), 'public', 'images', 'blog');

if (!fs.existsSync(targetDir)) {
  console.error(`[normalize] Directory not found: ${targetDir}`);
  console.error(`[normalize] Run this from your thrive-affiliate repo root, or pass the blog images path as an argument.`);
  process.exit(1);
}

function formatKB(bytes) {
  return `${Math.round(bytes / 1024)}KB`;
}

async function processFile(filePath, slot) {
  const originalBuf = fs.readFileSync(filePath);
  const originalKB = originalBuf.length / 1024;
  const meta = await sharp(originalBuf).metadata();
  const maxDims = SLOT_MAX_DIMENSIONS[slot];

  const alreadyFits =
    meta.width <= maxDims.width &&
    meta.height <= maxDims.height &&
    originalKB <= SIZE_BUDGET_KB;

  if (alreadyFits) {
    console.log(`  ✓ skip  ${path.basename(filePath)} — already ${meta.width}x${meta.height}, ${formatKB(originalBuf.length)}`);
    return { skipped: true };
  }

  const resizedBuf = await sharp(originalBuf)
    .resize(maxDims.width, maxDims.height, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toBuffer();
  const newMeta = await sharp(resizedBuf).metadata();

  console.log(
    `  ↓ fix   ${path.basename(filePath)} — ${meta.width}x${meta.height} ${formatKB(originalBuf.length)} → ${newMeta.width}x${newMeta.height} ${formatKB(resizedBuf.length)}`
  );

  if (!dryRun) {
    const tmpPath = `${filePath}.tmp`;
    fs.writeFileSync(tmpPath, resizedBuf);
    fs.renameSync(tmpPath, filePath);
  }

  return { skipped: false, savedBytes: originalBuf.length - resizedBuf.length };
}

async function main() {
  const articleFolders = fs.readdirSync(targetDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  console.log(`[normalize] ${dryRun ? 'DRY RUN — ' : ''}Scanning ${articleFolders.length} article folder(s) in ${targetDir}\n`);

  let totalProcessed = 0;
  let totalSkipped = 0;
  let totalSavedBytes = 0;
  const unrecognized = [];

  for (const slug of articleFolders) {
    const folderPath = path.join(targetDir, slug);
    const files = fs.readdirSync(folderPath).filter(f => f.toLowerCase().endsWith('.webp'));
    if (files.length === 0) continue;

    console.log(`${slug}/`);
    for (const file of files) {
      const slotName = path.basename(file, '.webp').toLowerCase();
      if (!SLOT_MAX_DIMENSIONS[slotName]) {
        console.log(`  ? unknown filename pattern, skipped: ${file}`);
        unrecognized.push(path.join(slug, file));
        continue;
      }
      try {
        const result = await processFile(path.join(folderPath, file), slotName);
        if (result.skipped) totalSkipped++;
        else {
          totalProcessed++;
          totalSavedBytes += result.savedBytes;
        }
      } catch (e) {
        console.warn(`  ⚠ error processing ${file}: ${e.message}`);
      }
    }
    console.log('');
  }

  console.log('─'.repeat(60));
  console.log(`[normalize] Done${dryRun ? ' (dry run — no files written)' : ''}.`);
  console.log(`[normalize] Resized: ${totalProcessed}, already OK: ${totalSkipped}, saved: ${formatKB(totalSavedBytes)}`);
  if (unrecognized.length > 0) {
    console.log(`[normalize] Unrecognized filenames (left untouched, review manually):`);
    unrecognized.forEach(f => console.log(`  - ${f}`));
  }
}

main().catch(e => {
  console.error('[normalize] Fatal error:', e);
  process.exit(1);
});
