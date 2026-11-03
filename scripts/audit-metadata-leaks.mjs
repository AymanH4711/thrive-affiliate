#!/usr/bin/env node
// Audit src/pages for internal/debug metadata rendered into JSX.
//
// Exists because a hand-authored siloLinker entry shipped "Relevance:" and
// "Suggested placement:" to readers on PrediabetesVsType2Diabetes.tsx. Those
// fields (relevanceScore, placement) are ranking internals, not reader-facing
// content; the human-readable reason is fine and is rendered on purpose as
// "Why related".
//
// Advisory by design: exits 1 when it finds something so CI can opt in, but it
// is not wired into `build` — a false positive there would block a deploy.
//
//   node scripts/audit-metadata-leaks.mjs [--json]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES = path.join(ROOT, 'src', 'pages');

// Internal by definition. `reason` is NOT here: it is rendered on purpose as
// the human-readable "Why related" line.
const STRONG =
  'relevanceScore|placementScore|placement|confidenceScore|confidence|siloId|siloRank|debug(?:Info|Data|Note)?|internal(?:Note|Id|Use|Flag)?';
// Ordinary words, only a leak when read as a rendered object property.
const WEAK = 'score|rank|weight';
const DOTTED = new RegExp(`\\.\\s*(?:${STRONG}|${WEAK})\\b`, 'g');
const BARE = new RegExp(`\\b(?:${STRONG})\\b(?!\\s*:)`, 'g');
// "Score:"/"Weight:" are excluded on purpose — prose headings use them.
const LABEL =
  /\b(?:Relevance|Relevance score|Suggested placement|Placement|Confidence|Confidence score|Debug|Internal(?: note| id| use)?|Silo id)\s*:/g;

function stripComments(src) {
  let out = '';
  let mode = null;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    const n = src[i + 1];
    if (mode === 'line') {
      if (c === '\n') {
        mode = null;
        out += c;
      } else out += ' ';
      continue;
    }
    if (mode === 'block') {
      if (c === '*' && n === '/') {
        mode = null;
        out += '  ';
        i++;
      } else out += c === '\n' ? c : ' ';
      continue;
    }
    if (c === '/' && n === '/') {
      mode = 'line';
      out += '  ';
      i++;
      continue;
    }
    if (c === '/' && n === '*') {
      mode = 'block';
      out += '  ';
      i++;
      continue;
    }
    out += c;
  }
  return out;
}

// A brace expression used as an attribute value is not rendered text.
function inAttribute(line, brace) {
  const before = line.slice(0, brace);
  if (/=\s*$/.test(before)) return true;
  return /\b(?:className|style|key|id|href|to|src|alt|title|role|tabIndex|aria-[\w-]+|data-[\w-]+|on[A-Z]\w*)\s*=\s*["'{][^>]*$/.test(
    before
  );
}

function insideString(line, index) {
  let quotes = 0;
  for (let i = 0; i < index; i++) {
    if ((line[i] === '"' || line[i] === "'" || line[i] === '`') && line[i - 1] !== '\\') quotes++;
  }
  return quotes % 2 === 1;
}

const findings = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!/node_modules|__tests__/.test(entry.name)) walk(file);
      continue;
    }
    if (!/\.(tsx|jsx)$/.test(entry.name) || /\.test\./.test(entry.name)) continue;

    const raw = fs.readFileSync(file, 'utf8');
    const lines = stripComments(raw).split(/\r?\n/);
    const rawLines = raw.split(/\r?\n/);

    lines.forEach((line, i) => {
      const add = (kind, match, col) =>
        findings.push({ file, line: i + 1, col: col + 1, kind, match, snippet: rawLines[i].trim() });

      // 1. an internal label typed into rendered text
      LABEL.lastIndex = 0;
      let m;
      while ((m = LABEL.exec(line))) {
        if (insideString(line, m.index)) continue;
        if (/^\s*(\{|<(?:span|strong|b|em))/i.test(line.slice(m.index + m[0].length))) {
          add('label', m[0].replace(/\s+$/, ''), m.index);
        }
      }

      // 2. a metadata field interpolated in render position
      for (const re of [DOTTED, BARE]) {
        re.lastIndex = 0;
        while ((m = re.exec(line))) {
          const brace = line.lastIndexOf('{', m.index);
          const close = line.indexOf('}', m.index);
          if (brace === -1 || close === -1) continue; // not inside a JSX expression
          if (line.slice(brace + 1, m.index).includes('}')) continue;
          if (inAttribute(line, brace)) continue;
          if (insideString(line, m.index)) continue;
          add('field', m[0].trim(), m.index);
        }
      }
    });
  }
}

walk(PAGES);

// One report per line+field, not one per regex that happened to match it.
const seen = new Set();
const uniq = findings.filter((f) => {
  const key = `${f.file}:${f.line}:${f.match.replace(/^\./, '')}`;
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

const rel = (p) => path.relative(ROOT, p).replace(/\\/g, '/');

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(uniq.map((f) => ({ ...f, file: rel(f.file) })), null, 2));
} else {
  const byFile = {};
  for (const f of uniq) (byFile[f.file] ||= []).push(f);
  console.log(`scanned ${rel(PAGES)} — ${uniq.length} finding(s) in ${Object.keys(byFile).length} file(s)\n`);
  for (const [file, hits] of Object.entries(byFile)) {
    console.log(rel(file));
    for (const h of hits) {
      console.log(
        `  ${String(h.line).padStart(5)}:${String(h.col).padEnd(3)} [${h.kind}] ${h.match.padEnd(18)} | ${h.snippet.slice(0, 110)}`
      );
    }
    console.log('');
  }
}

process.exit(uniq.length ? 1 : 0);
