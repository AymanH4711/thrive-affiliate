// generate-thumbnails.cjs
//
// One-off backfill: generates thumb.webp for every EXISTING article folder
// under public/images/blog/, derived from that article's existing
// hero.webp. Needed because saveArticleImagesForBlog's new thumbnail step
// (in final-test.js) only runs for articles generated from now on — it
// can't retroactively create thumbnails for articles already in the repo.
//
// This script only touches image files. It does NOT edit any .tsx file —
// after running it, you still need to add one line to each existing
// article's blogMeta export (see the printed instructions at the end).
//
// Usage:
//   node generate-thumbnails.cjs                  # process public/images/blog
//   node generate-thumbnails.cjs path/to/blog/dir  # different folder
//   node generate-thumbnails.cjs --dry-run         # preview only

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Kept in sync with THUMBNAIL_DIMENSIONS in final-test.js's
// saveArticleImagesForBlog — if you change one, change the other.
const THUMBNAIL_DIMENSIONS = { width: 400, height: 300 };
const WEBP_QUALITY = 80;

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const targetDir = args.find(a => !a.startsWith('--')) || path.join(process.cwd(), 'public', 'images', 'blog');

if (!fs.existsSync(targetDir)) {
  console.error(`[thumbnails] Directory not found: ${targetDir}`);
  console.error(`[thumbnails] Run this from your thrive-affiliate repo root, or pass the blog images path as an argument.`);
  process.exit(1);
}

function formatKB(bytes) {
  return `${Math.round(bytes / 1024)}KB`;
}

async function main() {
  const articleFolders = fs.readdirSync(targetDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  console.log(`[thumbnails] ${dryRun ? 'DRY RUN — ' : ''}Scanning ${articleFolders.length} article folder(s) in ${targetDir}\n`);

  const processedSlugs = [];
  const skippedNoHero = [];

  for (const slug of articleFolders) {
    const folderPath = path.join(targetDir, slug);
    const heroPath = path.join(folderPath, 'hero.webp');
    const thumbPath = path.join(folderPath, 'thumb.webp');

    if (!fs.existsSync(heroPath)) {
      // Flat-path articles (like the one PageSpeed found using a hero image
      // outside any per-slug folder) won't have a folder here at all, so
      // this only catches folders that exist but are missing hero.webp
      // specifically — worth a manual look either way.
      skippedNoHero.push(slug);
      continue;
    }

    if (fs.existsSync(thumbPath)) {
      console.log(`  ✓ skip  ${slug}/ — thumb.webp already exists`);
      continue;
    }

    try {
      const heroBuf = fs.readFileSync(heroPath);
      const thumbBuf = await sharp(heroBuf)
        .resize(THUMBNAIL_DIMENSIONS.width, THUMBNAIL_DIMENSIONS.height, { fit: 'cover' })
        .webp({ quality: WEBP_QUALITY })
        .toBuffer();

      console.log(`  ✚ made  ${slug}/thumb.webp — ${formatKB(thumbBuf.length)}`);

      if (!dryRun) {
        fs.writeFileSync(thumbPath, thumbBuf);
      }
      processedSlugs.push(slug);
    } catch (e) {
      console.warn(`  ⚠ error processing ${slug}: ${e.message}`);
    }
  }

  console.log('\n' + '─'.repeat(60));
  console.log(`[thumbnails] Done${dryRun ? ' (dry run — no files written)' : ''}.`);
  console.log(`[thumbnails] Generated: ${processedSlugs.length}`);

  if (skippedNoHero.length > 0) {
    console.log(`[thumbnails] Folders with no hero.webp (skipped, check manually):`);
    skippedNoHero.forEach(s => console.log(`  - ${s}`));
  }

  if (processedSlugs.length > 0) {
    console.log(`\n[thumbnails] NEXT STEP — add one line to each article's blogMeta export:\n`);
    processedSlugs.forEach(slug => {
      console.log(`  ${slug}:`);
      console.log(`    thumbnail: '/images/blog/${slug}/thumb.webp',`);
    });
    console.log(`\n  Add this line right after the existing "image:" line in each`);
    console.log(`  article's blogMeta export. Without it, BlogPage.tsx's`);
    console.log(`  "article.thumbnail ?? article.image" fallback means these`);
    console.log(`  articles will keep using their full hero image until the`);
    console.log(`  line is added — the thumb.webp file existing alone isn't enough.`);
  }
}

main().catch(e => {
  console.error('[thumbnails] Fatal error:', e);
  process.exit(1);
});
