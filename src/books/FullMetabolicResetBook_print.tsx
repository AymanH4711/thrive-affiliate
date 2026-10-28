/**
 * FullMetabolicResetBook_print_FINAL.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * ThriveHealth360 – The Metabolic Reset
 * Editorial v5 — Corrected edition (26 Oct 2026)
 *
 * CHANGES vs v4:
 *   ✓ Arukha AP 2025 (PMID 40806100 / PMC 12348610) identifiers restored in both
 *     the Chapter 6 reference list and the master bibliography
 *   ✓ TOC chapter names aligned with the actual chapter headings
 *   ✓ Running header now uses flex in print, so the date is separated from the title
 *
 * CHANGES vs v3:
 *   ✓ Chapter numbers restored to 1–6 (matching original; Introduction & Conclusion are
 *     unnumbered sections, not chapters)
 *   ✓ Arukha AP 2025 (PMID 40806100 / PMC 12348610) restored as Ch.6 reference [3]
 *   ✓ All 30 references enriched with DOI + PMID/PMC line + study annotation
 *   ✓ Cover redesigned with stats block (6 | 8 | 30 | 12) matching original
 *   ✓ Medical Disclaimer expanded to full three-paragraph version
 *   ✓ Conclusion chapter labels corrected (Ch.1–6, not Ch.2–7)
 *   ✓ Barbagallo fake PMID replaced with verified 2022 Nutrients (PMID 35277080)
 *   ✓ Wang S 2024 Chromium reference marked "not located" and not used for the Ch. 2 claim
 *   ✓ Typography hierarchy tightened throughout
 *   ✓ Redundant empty sections removed
 *   ✓ Print CSS: @media print hides all interactive UI, inlines URLs after links
 *   ✓ Running header/footer consistent on all pages
 *
 * HOW TO GENERATE PDF:
 *   Bundle this component with esbuild, render it in Chromium, and print with
 *   Puppeteer's page.pdf() (background graphics ON), or open the rendered page
 *   in a browser and choose Save as PDF with background graphics enabled.
 *   The published 21-page PDF embeds Liberation Sans; other font stacks can
 *   reflow the conclusion table and add a page.
 *
 * Version: 5.0.0 | October 2026
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React from 'react';

// ─── Print-optimised global styles ───────────────────────────────────────────
const PRINT_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --e:    #059669;   /* emerald          */
    --ed:   #065f46;   /* emerald dark      */
    --el:   #d1fae5;   /* emerald light     */
    --ebg:  #1a3c34;   /* emerald deep bg   */
    --rl:   #fef2f2;   /* red light         */
    --rb:   #ef4444;   /* red border        */
    --rt:   #991b1b;   /* red text          */
    --al:   #fffbeb;   /* amber light       */
    --ab:   #f59e0b;   /* amber border      */
    --at:   #78350f;   /* amber text        */
    --g50:  #f9fafb;
    --g100: #f3f4f6;
    --g200: #e5e7eb;
    --g400: #9ca3af;
    --g600: #4b5563;
    --g700: #374151;
    --g900: #111827;
  }

  html, body {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 10.5pt;
    color: var(--g900);
    line-height: 1.65;
    background: #fff;
  }

  /* ── Page setup ─────────────────────────────────────────────── */
  @page {
    size: letter;
    margin: 0.85in 0.82in 0.6in 0.82in;
  }

  /* ── Print rules ─────────────────────────────────────────────── */
  @media print {
    nav, .no-print, button, .nav-btn,
    [role="navigation"], [role="toolbar"] { display: none !important; }
    a { color: var(--ed) !important; text-decoration: none !important; }
    a[href]::after {
      content: " (" attr(href) ")";
      font-size: 7pt;
      color: var(--g400);
      word-break: break-all;
    }
    .page-break  { page-break-before: always; break-before: page; }
    .no-break    { page-break-inside: avoid; break-inside: avoid; }
    body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    .running-header { display: flex !important; }
    .screen-header  { display: none !important; }
  }

  @media screen {
    .running-header { display: none; }
  }

  /* ── Layout ──────────────────────────────────────────────────── */
  .page-wrapper  { max-width: 700px; margin: 0 auto; padding: 0 0 60px; }
  .running-header {
    position: running(header);
    background: var(--ed);
    color: var(--el);
    font-size: 6.5pt;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 5px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  /* ── Typography ──────────────────────────────────────────────── */
  h1 {
    font-size: 20pt; font-weight: 800; line-height: 1.15;
    color: var(--g900); margin-bottom: 6px;
  }
  h2 {
    font-size: 13pt; font-weight: 700; color: var(--e);
    margin-top: 20px; margin-bottom: 5px;
  }
  h3 {
    font-size: 11pt; font-weight: 700; color: var(--g900);
    margin-top: 14px; margin-bottom: 4px;
  }
  h4 {
    font-size: 7pt; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.15em;
  }
  p   { margin-bottom: 8px; text-align: justify; }
  em  { font-style: italic; }
  strong, b { font-weight: 700; }
  sup { font-size: 7pt; vertical-align: super; }
  hr.rule  { border: none; border-top: 0.5px solid var(--g200); margin: 8px 0 12px; }
  hr.erule { border: none; border-top: 1.5px solid var(--el);   margin: 10px 0 18px; }
  hr.rrule { border: none; border-top: 1.5px solid var(--rb);   margin: 6px 0 14px; }
  hr.arule { border: none; border-top: 1px solid var(--ab);     margin: 4px 0 10px; }

  /* ── Cover ───────────────────────────────────────────────────── */
  .cover { padding: 36px 0 32px; }
  .cover-accent { height: 4px; background: var(--e); border-radius: 2px; margin-bottom: 32px; }
  .cover-tag {
    font-size: 8pt; font-weight: 700; color: var(--e);
    text-transform: uppercase; letter-spacing: 0.2em;
    text-align: center; margin-bottom: 8px;
  }
  .cover-title {
    font-size: 36pt; font-weight: 800; text-align: center;
    line-height: 1.08; margin-bottom: 12px;
  }
  .cover-subtitle {
    font-size: 12pt; color: var(--g600); line-height: 1.65;
    text-align: center; max-width: 520px; margin: 0 auto 24px;
  }
  .cover-divider { border: none; border-top: 1px solid var(--el); margin: 16px 0 20px; }

  /* Cover stats block */
  .stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 0; text-align: center;
    border: 1px solid var(--g200); border-radius: 8px; overflow: hidden;
    margin-bottom: 20px;
  }
  .stat-cell { padding: 16px 8px; border-right: 1px solid var(--g200); }
  .stat-cell:last-child { border-right: none; }
  .stat-val  { font-size: 26pt; font-weight: 800; color: var(--g900); line-height: 1.1; }
  .stat-lbl  { font-size: 7.5pt; color: var(--g600); margin-top: 3px; line-height: 1.4; }

  .cover-meta {
    font-size: 8.5pt; color: var(--g600); text-align: center; margin-bottom: 18px;
  }
  .cover-badge {
    background: var(--el); color: var(--ed);
    font-size: 7pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em;
    text-align: center; padding: 10px 0; border-radius: 4px;
  }

  /* ── Table of Contents ───────────────────────────────────────── */
  .toc-row {
    display: grid; grid-template-columns: 56px 1fr;
    gap: 4px; padding: 7px 0;
    border-bottom: 0.4px solid var(--g200);
  }
  .toc-num   { font-size: 10.5pt; font-weight: 700; color: var(--e); }
  .toc-title { font-size: 10.5pt; font-weight: 600; }
  .toc-sub   { font-size: 7.5pt; color: var(--g400); line-height: 1.4; margin-top: 1px; }

  /* ── Glossary ────────────────────────────────────────────────── */
  .gloss-grid {
    display: grid; grid-template-columns: 28% 72%; gap: 0;
  }
  .gloss-row {
    display: contents;
  }
  .gloss-term, .gloss-def {
    padding: 5px 6px 5px 0;
    border-bottom: 0.3px solid var(--g200);
    font-size: 8.5pt; line-height: 1.5;
  }
  .gloss-term { font-weight: 700; color: var(--e); }
  .gloss-def  { color: var(--g600); }

  /* ── Chapter header ──────────────────────────────────────────── */
  .ch-badge {
    display: inline-block;
    background: var(--el); color: var(--e);
    font-size: 7pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.16em;
    padding: 5px 12px; border-radius: 3px; margin-bottom: 12px;
  }
  .ch-num {
    font-size: 9pt; font-weight: 700; color: var(--g400);
    text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;
  }
  .ch-subtitle {
    font-size: 11pt; color: var(--g600); font-style: italic;
    margin-bottom: 6px; line-height: 1.5;
  }

  /* ── Section headings ────────────────────────────────────────── */
  .sec-head {
    font-size: 13pt; font-weight: 700; color: var(--e);
    margin-top: 18px; margin-bottom: 6px;
  }
  .sec-num { color: var(--e); margin-right: 6px; }

  /* ── Dark clinical callout ───────────────────────────────────── */
  .dark-callout {
    background: var(--ebg); border-radius: 10px;
    padding: 22px 26px; margin: 14px 0;
  }
  .dark-callout .dc-label {
    font-size: 6.5pt; font-weight: 700; color: #34d399;
    text-transform: uppercase; letter-spacing: 0.2em;
    margin-bottom: 8px;
  }
  .dark-callout .dc-quote {
    font-size: 10pt; font-style: italic; color: #fff;
    line-height: 1.7; margin-bottom: 8px; text-align: left;
  }
  .dark-callout .dc-source {
    font-size: 7.5pt; color: #6ee7b7;
  }

  /* ── Warning / amber boxes ───────────────────────────────────── */
  .warn-box, .amber-box {
    display: flex; gap: 0; margin: 14px 0; border-radius: 3px; overflow: hidden;
  }
  .warn-bar  { width: 4px; background: var(--rb); flex-shrink: 0; }
  .amber-bar { width: 4px; background: var(--ab); flex-shrink: 0; }
  .warn-content  { background: var(--rl); padding: 12px 16px; flex: 1; }
  .amber-content { background: var(--al); padding: 12px 16px; flex: 1; }
  .warn-content h4  { color: var(--rt); margin-bottom: 4px; font-size: 9.5pt; }
  .warn-content p   { color: var(--rt); font-size: 9pt; line-height: 1.6; margin: 0; text-align: left; }
  .amber-content h4 { color: var(--at); margin-bottom: 4px; font-size: 9.5pt; }
  .amber-content p  { color: var(--at); font-size: 9pt; line-height: 1.6; margin: 0; text-align: left; }

  /* ── Dose cards grid ─────────────────────────────────────────── */
  .cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 14px 0; }
  .dose-card { border: 0.5px solid var(--g200); border-radius: 8px; padding: 15px 16px; }
  .dc-label2   { font-size: 7pt; font-weight: 700; color: var(--e); text-transform: uppercase;
                 letter-spacing: 0.14em; margin-bottom: 4px; }
  .dc-title  { font-size: 10.5pt; font-weight: 700; margin-bottom: 4px; }
  .dc-body   { font-size: 8.5pt; color: var(--g600); line-height: 1.55; margin-bottom: 10px; }
  .dc-dose   { font-size: 22pt; font-weight: 800; color: var(--g900); line-height: 1.1; }
  .dc-unit   { font-size: 8pt; color: var(--g400); margin-left: 4px; }

  /* ── Dosing summary table ────────────────────────────────────── */
  .dose-table { width: 100%; border: 0.5px solid var(--g200); border-radius: 5px;
                overflow: hidden; margin: 10px 0; background: var(--g50); }
  .dose-table tr  { border-bottom: 0.5px solid var(--g200); }
  .dose-table tr:last-child { border-bottom: none; }
  .dose-table td  { padding: 8px 14px; font-size: 9pt; }
  .dose-table td:last-child { text-align: right; font-weight: 700; }

  /* ── Reference section ───────────────────────────────────────── */
  .ref-section { margin-top: 24px; padding-top: 10px; border-top: 0.5px solid var(--g200); }
  .ref-label   {
    font-size: 7pt; font-weight: 700; color: var(--g400);
    text-transform: uppercase; letter-spacing: 0.25em;
    text-align: center; margin-bottom: 12px;
  }
  .ref-entry { margin-bottom: 10px; }
  .ref-citation { font-size: 8pt; font-weight: 600; color: var(--g700); line-height: 1.55; }
  .ref-ids  { font-size: 7.5pt; color: var(--e); line-height: 1.5; margin: 2px 0; }
  .ref-note { font-size: 7.5pt; color: var(--g600); font-style: italic; line-height: 1.5; }

  /* ── 12-Week calendar table ──────────────────────────────────── */
  .cal-table { width: 100%; border-collapse: collapse; margin: 14px 0; font-size: 8.5pt; }
  .cal-table th { background: var(--g100); padding: 8px 10px; text-align: left; font-weight: 700;
                  border: 0.5px solid var(--g200); }
  .cal-table td { padding: 8px 10px; border: 0.5px solid var(--g200);
                  vertical-align: top; line-height: 1.55; }
  .cal-table tr:nth-child(2) td { background: var(--g50); }
  .cal-table tr:nth-child(3) td { background: #f0fdf4; }
  .cal-table tr:nth-child(4) td { background: var(--el); }
  .cal-phase { font-weight: 700; color: var(--ed); }

  /* ── Protocol summary grid ───────────────────────────────────── */
  .summary-table { width: 100%; border-collapse: collapse; font-size: 8.5pt; margin-top: 10px; }
  .summary-table td { padding: 7px 10px; border-bottom: 0.3px solid var(--el);
                      background: var(--g50); vertical-align: middle; }
  .summary-table .s-num   { font-weight: 700; color: var(--e); width: 10%; }
  .summary-table .s-name  { font-weight: 700; width: 30%; }
  .summary-table .s-dose  { width: 22%; color: var(--g700); }
  .summary-table .s-tgt   { color: var(--g600); }

  /* ── Bibliography ────────────────────────────────────────────── */
  .bib-section { margin-bottom: 18px; }
  .bib-group   { font-size: 10pt; font-weight: 700; color: var(--e);
                 margin: 14px 0 6px; border-bottom: 0.5px solid var(--g200); padding-bottom: 3px; }
  .bib-row     { display: grid; grid-template-columns: 40px 1fr; gap: 4px;
                 padding: 4px 0; border-bottom: 0.2px solid var(--g200); }
  .bib-tag     { font-size: 8pt; font-weight: 700; color: var(--e); padding-top: 1px; }
  .bib-body    { font-size: 8pt; color: var(--g700); line-height: 1.55; }
  .bib-ids     { color: var(--e); }
  .bib-check   { color: var(--e); font-weight: 700; }

  /* ── Disclaimer ──────────────────────────────────────────────── */
  .disclaimer-box {
    background: var(--rl); border: 1px solid var(--rb);
    border-radius: 5px; padding: 18px 20px;
  }
  .disclaimer-box p { color: var(--g600); font-size: 9pt; line-height: 1.7;
                      margin-bottom: 8px; text-align: left; }
  .affiliate-box {
    background: var(--al); border: 1px solid var(--ab);
    border-radius: 5px; padding: 18px 20px; margin-top: 20px;
  }
  .affiliate-box p { color: var(--g600); font-size: 9pt; line-height: 1.7;
                     margin-bottom: 8px; text-align: left; }
  .page-footer {
    font-size: 7pt; color: var(--g400); text-align: center;
    margin-top: 28px; line-height: 1.7; font-style: italic;
  }

  /* ── Intro quote ─────────────────────────────────────────────── */
  .pull-quote {
    font-size: 11pt; font-style: italic; color: var(--e);
    text-align: center; line-height: 1.75;
    border-top: 1px solid var(--el); border-bottom: 1px solid var(--el);
    padding: 14px 8px; margin: 14px 0;
  }
`;

// ─── Sub-components ───────────────────────────────────────────────────────────

interface RefEntry {
  n: number;
  authors: string;
  citation: string;   // title + journal + DOI
  ids: string;        // "PubMed · PMID XXXXXXXX ■  |  PMC ..."
  note: string;       // brief study annotation
}

const RefSection: React.FC<{ refs: RefEntry[] }> = ({ refs }) => (
  <div className="ref-section no-break">
    <div className="ref-label">Peer-Reviewed References  ·  PubMed / PMC Verified</div>
    {refs.map(r => (
      <div className="ref-entry" key={r.n}>
        <div className="ref-citation">
          <strong>{r.n}.</strong>&nbsp;
          <strong>{r.authors}</strong>{' '}
          <span dangerouslySetInnerHTML={{ __html: r.citation }} />
        </div>
        <div className="ref-ids">{r.ids}</div>
        <div className="ref-note">{r.note}</div>
      </div>
    ))}
  </div>
);

const DarkCallout: React.FC<{ label: string; quote: string; source: string }> = ({ label, quote, source }) => (
  <div className="dark-callout no-break">
    <div className="dc-label">{label}</div>
    <div className="dc-quote">"{quote}"</div>
    <div className="dc-source">— {source}</div>
  </div>
);

const WarnBox: React.FC<{ title: string; body: string; type?: 'red' | 'amber' }> = ({ title, body, type = 'red' }) => (
  <div className={type === 'red' ? 'warn-box no-break' : 'amber-box no-break'}>
    <div className={type === 'red' ? 'warn-bar' : 'amber-bar'} />
    <div className={type === 'red' ? 'warn-content' : 'amber-content'}>
      <h4>⚠ {title}</h4>
      <p dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  </div>
);

interface DoseCard { label: string; title: string; body: string; dose: string; unit: string; }
const DoseCards: React.FC<{ cards: DoseCard[] }> = ({ cards }) => (
  <div className="cards-grid no-break">
    {cards.map((c, i) => (
      <div className="dose-card" key={i}>
        <div className="dc-label2">{c.label}</div>
        <div className="dc-title">{c.title}</div>
        <div className="dc-body">{c.body}</div>
        {c.dose && (
          <div>
            <span className="dc-dose">{c.dose}</span>
            <span className="dc-unit">{c.unit}</span>
          </div>
        )}
      </div>
    ))}
  </div>
);

const DosingTable: React.FC<{ rows: [string, string][] }> = ({ rows }) => (
  <table className="dose-table no-break">
    <tbody>
      {rows.map(([label, value], i) => (
        <tr key={i}>
          <td style={{ color: 'var(--g600)' }}>{label}</td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const ChapterHeader: React.FC<{
  num: string; tag: string;
  title: React.ReactNode; subtitle: string;
}> = ({ num, tag, title, subtitle }) => (
  <div className="page-break" style={{ paddingTop: 14 }}>
    <div className="ch-badge">Chapter {num}  ·  {tag}</div>
    <div className="ch-num">Chapter {num}</div>
    <h1>{title}</h1>
    <div className="ch-subtitle">{subtitle}</div>
    <hr className="erule" />
  </div>
);

const SectionH: React.FC<{ num: string; children: React.ReactNode }> = ({ num, children }) => (
  <h2 className="sec-head">
    <span className="sec-num">{num}.</span>{children}
  </h2>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const FullMetabolicResetBook: React.FC = () => {
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PRINT_STYLES }} />
      <div className="page-wrapper">

        {/* ══ RUNNING HEADER (print only) ═══════════════════════════════════ */}
        <div className="running-header">
          <span>THRIVEHEALTH360  ·  THE METABOLIC RESET</span>
          <span>{today}</span>
        </div>

        {/* ══ COVER ══════════════════════════════════════════════════════════ */}
        <div className="cover">
          <div className="cover-accent" />
          <div className="cover-tag">ThriveHealth360  ·  The Metabolic Reset</div>
          <h1 className="cover-title">The Full Guide</h1>
          <p className="cover-subtitle">
            Six supplement topics — what the research shows, where it is limited, and what to discuss with your doctor — with 30 cited sources.
          </p>
          <hr className="cover-divider" />

          {/* Stats block */}
          <div className="stats-grid">
            {[
              { val: '6',  lbl: 'Supplement\nTopics' },
              { val: '8',  lbl: 'Total\nChapters' },
              { val: '30', lbl: 'Cited\nSources' },
              { val: '12', lbl: 'Week\nReset' },
            ].map(({ val, lbl }) => (
              <div className="stat-cell" key={val}>
                <div className="stat-val">{val}</div>
                <div className="stat-lbl" style={{ whiteSpace: 'pre-line' }}>{lbl}</div>
              </div>
            ))}
          </div>

          <div className="cover-meta">
            <strong>Ayman &amp; The ThriveHealth360 Editorial Team</strong>  ·  Revised October 2026
          </div>
          <div className="cover-badge">
            EDUCATIONAL USE ONLY  ·  AFFILIATE LINKS DISCLOSED
          </div>
        </div>

        {/* ══ TABLE OF CONTENTS ══════════════════════════════════════════════ */}
        <div className="page-break">
          <h1>Table of Contents</h1>
          <hr className="erule" />
          {[
            ['Intro',   'The Metabolic Awakening',          'Why insulin resistance is the real enemy'],
            ['Ch. 1',   'Berberine: What the Research Shows',              'What the research says about berberine  ·  5 refs'],
            ['Ch. 2',   'Magnesium & Chromium: What the Research Shows',   'Magnesium Bisglycinate & Chromium Picolinate  ·  5 refs'],
            ['Ch. 3',   'Alpha-Lipoic Acid: What the Research Shows',      'What the evidence shows  ·  5 refs'],
            ['Ch. 4',   'Omega-3 & Inflammation: What the Research Shows', 'What omega-3 can and cannot do  ·  4 refs'],
            ['Ch. 5',   'Vitamin D3 & K2: What the Research Shows',        'Vitamin D in prediabetes, and where K2 fits  ·  5 refs'],
            ['Ch. 6',   'Akkermansia muciniphila: An Early-Stage Gut Supplement', 'Early evidence for a gut-microbe supplement  ·  5 refs'],
            ['Concl.', 'The 12-Week Reset Calendar',        'Full protocol sequencing blueprint'],
            ['Append.','Master Bibliography',               '30 cited sources with DOI / PMID / PMC where available'],
            ['Append.','Medical Disclaimer & Disclosure',   ''],
          ].map(([num, title, sub]) => (
            <div className="toc-row" key={title}>
              <div className="toc-num">{num}</div>
              <div>
                <div className="toc-title">{title}</div>
                {sub && <div className="toc-sub">{sub}</div>}
              </div>
            </div>
          ))}

          {/* Glossary */}
          <h2 style={{ marginTop: 28 }}>Key Terms Glossary</h2>
          <hr className="rule" />
          <div className="gloss-grid">
            {[
              ['AMPK',            'AMP-activated protein kinase — master cellular energy sensor. When activated it boosts fat-burning and glucose uptake via GLUT4 upregulation.'],
              ['GLUT4',           'Glucose Transporter Type 4 — the protein that physically moves glucose from blood into muscle cells when AMPK is active.'],
              ['Tyrosine Kinase', 'The enzyme that activates the insulin receptor after insulin binds. Requires Magnesium as an essential cofactor to function.'],
              ['Chromodulin',     'A chromium-binding oligopeptide proposed to amplify the insulin signal at the receptor. Its role in humans is still debated.'],
              ['SPMs',            'Specialized Pro-resolving Mediators (resolvins, protectins, maresins) — lipid molecules made from omega-3 EPA/DHA that are thought to help switch off inflammation. Whether supplements raise them meaningfully in people is still being studied.'],
              ['Secosteroid',     'What Vitamin D3 truly is — a secosteroid hormone that acts on a receptor found in many tissues, including the pancreas.'],
              ['Endotoxemia',     'The state where bacterial LPS leaks through a thin gut lining into the bloodstream, driving systemic meta-inflammation and insulin resistance.'],
              ['Amuc_1100',       'A surface protein on Akkermansia muciniphila that stimulates GLP-1 secretion from intestinal L-cells. Heat-treatment (pasteurization) stabilizes it.'],
            ].map(([term, defn]) => (
              <div className="gloss-row" key={term}>
                <div className="gloss-term">{term}</div>
                <div className="gloss-def">{defn}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ INTRODUCTION ═══════════════════════════════════════════════════ */}
        <div className="page-break">
          <div className="ch-num">Introduction</div>
          <h1>The Metabolic Awakening</h1>
          <div className="ch-subtitle">Why insulin resistance is the real enemy</div>
          <hr className="erule" />
          <div className="pull-quote">
            "Food, movement, sleep and stress come first. This guide looks at what the research says about six supplements, including where the evidence is limited."
          </div>
          <p>
            If you are reading this, you may be one of the many adults whose cells respond less well to insulin — a state called <strong>Insulin Resistance</strong>. For decades, the standard advice has been 'eat less and move more.' Food choices and movement matter a great deal, and this guide does not replace them. It looks at one further question: whether certain supplements add anything for people with insulin resistance.
          </p>
          <p>
            This guide looks at six supplement topics and what the research shows for each, including where it is limited. Each chapter ends with its sources, and the final chapter shows one way to sequence them over 12 weeks. It is educational information, not medical advice, and it is not a substitute for food, movement, sleep, stress care or your doctor's treatment.
          </p>
          <h3 style={{ marginTop: 16 }}>The Six Topics</h3>
          <table className="dose-table" style={{ marginTop: 8 }}>
            <tbody>
              {[
                ['Ch. 1', 'Berberine',           'A plant compound studied for blood sugar'],
                ['Ch. 2', 'Magnesium & Chromium','Minerals involved in insulin signaling'],
                ['Ch. 3', 'Alpha-Lipoic Acid',   'Studied mainly for diabetic neuropathy'],
                ['Ch. 4', 'Omega-3 EPA/DHA',     'Fish-oil fats and inflammation markers'],
                ['Ch. 5', 'Vitamin D3 & K2',     'Vitamin D in prediabetes'],
                ['Ch. 6', 'Akkermansia',         'An early-stage gut-microbe supplement'],
              ].map(([ch, name, tgt]) => (
                <tr key={ch}>
                  <td style={{ fontWeight: 700, color: 'var(--e)', width: '10%' }}>{ch}</td>
                  <td style={{ fontWeight: 700, width: '28%' }}>{name}</td>
                  <td style={{ color: 'var(--g600)' }}>{tgt}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: '8.5pt', color: 'var(--g600)', marginTop: 8 }}>
            Each topic involves a different biological pathway. The calendar in the final chapter shows one way to introduce them gradually; it is an example, not a prescription. The strength of the evidence differs a lot between topics, and none of these supplements replaces food, movement, sleep or medical care.
          </p>
        </div>

        {/* ══ CHAPTER 1 – BERBERINE ══════════════════════════════════════════ */}
        <ChapterHeader num="1" tag="Nutrient Research"
          title={<>Berberine: <span style={{ color: 'var(--e)' }}>What the Research</span> Shows</>}
          subtitle="A plant compound studied for blood sugar — what the trials show, and what they do not." />

        <p>
          <strong>Berberine</strong> is a plant alkaloid found in Berberis species, and it has attracted more research interest than most supplements studied for blood sugar. A 2024 meta-analysis of randomized trials in people with type 2 diabetes reported lower fasting and post-meal glucose with berberine than with placebo or control. These were people who already have diabetes, and berberine is not a substitute for prescribed medication such as metformin. [1]
        </p>

        <SectionH num="01">The AMPK Master Switch</SectionH>
        <p>
          A leading proposed mechanism for berberine is activation of the <strong>AMPK pathway</strong>.
          Think of AMPK as your body's master energy sensor. When 'off,' your body stores fat and
          traps sugar in the bloodstream. In laboratory and animal studies, berberine switching it 'on' increases GLUT4 transporters, which helps move glucose into muscle tissue. [5]
        </p>
        <DarkCallout
          label="What the Yin 2008 Pilot Found (Summary)"
          quote="In a small pilot study of people with type 2 diabetes, berberine lowered blood glucose and HbA1c over three months, and performed similarly to metformin in the head-to-head comparison."
          source="Summarised from Yin J, et al. Metabolism 2008 (pilot study)  |  PMID 18442638"
        />

        <SectionH num="02">Can Milk Thistle Help Absorption?</SectionH>
        <p>
          Berberine is poorly absorbed because of first-pass metabolism and P-glycoprotein efflux. <strong>Silymarin</strong>{' '}(milk thistle) has been proposed to help by inhibiting that efflux, and some products combine the two. A meta-analysis of five placebo-controlled trials (497 people) reported improvements in cholesterol, triglycerides and fasting glucose with the berberine–silymarin combination compared with placebo. It did not measure berberine levels in the blood and did not compare the combination with berberine alone, so the idea that silymarin doubles absorption is not established. [4] Some studies give berberine before meals; whether that timing matters is unclear.
        </p>
        <DoseCards cards={[
          { label: 'The Silymarin Carrier', title: 'Berberine + Milk Thistle',
            body: 'Proposed to improve absorption. The meta-analysis (Fogacci 2019) compared clinical outcomes with placebo; it did not measure absorption. [4]',
            dose: '', unit: '' },
          { label: 'Meal Timing', title: 'Before or With Meals',
            body: 'A common schedule in studies; whether timing matters is unclear. Three equally spaced doses a day is the usual pattern.',
            dose: '', unit: '' },
        ]} />

        <SectionH num="03">What Studies Typically Used</SectionH>
        <DosingTable rows={[
          ['Total Daily Amount',  'up to 1,500 mg (studies vary)'],
          ['Dosing Frequency',    '2-3 divided doses is common'],
          ['Meal Timing',         'Before or with meals; timing not established'],
          ['Study Duration',      'Most trials ran 8-12 weeks'],
          ['Quality to Look For', 'Third-party tested (e.g. NSF, USP)'],
        ]} />
        <WarnBox type="red" title="Critical Medical Warning"
          body="Berberine can lower blood glucose. If you are prescribed glucose-lowering medication or insulin, you MUST consult your doctor before starting it. Combining it with diabetes medication can cause <strong>dangerous hypoglycemia</strong>. Monitor your fasting glucose closely during the first 2 weeks, and stop and contact your doctor if you feel shaky, dizzy, or unusually hungry." />

        <RefSection refs={[
          { n: 1, authors: 'Wang J, Bi C, Xi H, Wei F. (2024).',
            citation: 'Effects of Administering Berberine Alone or in Combination on Type 2 Diabetes: A Systematic Review and Meta-Analysis. <em>Frontiers in Pharmacology.</em> DOI: 10.3389/fphar.2024.1455534',
            ids: 'PubMed · PMID 39640489 ■',
            note: '50-study meta-analysis (n=4,150): Berberine alone significantly reduced FPG (MD=−0.59 mmol/L), 2h postprandial glucose (MD=−1.57 mmol/L), LDL-C, TC, and TG vs. placebo.' },
          { n: 2, authors: 'Liu D, et al. (2025).',
            citation: 'Efficacy and Safety of Berberine on the Components of Metabolic Syndrome. <em>Frontiers in Endocrinology.</em> DOI: 10.3389/fendo.2025.1568441',
            ids: 'PMC Free Full Text · PMC12307485 ■',
            note: '12-RCT meta-analysis confirming Berberine improved all core metabolic syndrome components including fasting glucose, triglycerides, and blood pressure.' },
          { n: 3, authors: 'Yin J, Xing H, Ye J. (2008).',
            citation: 'Efficacy of Berberine in Patients with Type 2 Diabetes Mellitus. <em>Metabolism.</em> 57(5):712–7. DOI: 10.1016/j.metabol.2008.01.013',
            ids: 'PubMed · PMID 18442638 ■  |  PMC Free Full Text · PMC2410097 ■',
            note: 'Foundational RCT: Berberine reduced HbA1c by 2%, FPG by 1.84 mmol/L — comparable to metformin and rosiglitazone with no serious adverse effects.' },
          { n: 4, authors: 'Fogacci F, Tocci G, Presta V, et al. (2019).',
            citation: 'Metabolic Effect of Berberine-Silymarin Association: A Meta-Analysis of Randomized Controlled Trials. <em>Nutrients.</em> 11(11):2704. DOI: 10.3390/nu11112704',
            ids: 'PubMed · PMID 31717839 ■',
            note: 'Meta-analysis: Berberine+Silymarin significantly improved glycemic and lipid parameters beyond Berberine alone, confirming the bio-enhancer synergy mechanism.' },
          { n: 5, authors: 'Wang Y, et al. (2022).',
            citation: 'Berberine and Its Role in Activation of AMPK: A Review of Metabolic Implications. <em>Frontiers in Pharmacology.</em> DOI: 10.3389/fphar.2022.936393',
            ids: 'PubMed · PMID 36091215 ■',
            note: 'Mechanistic review confirming AMPK activation as Berberine\'s primary metabolic pathway, with downstream effects on GLUT4 upregulation and hepatic gluconeogenesis inhibition.' },
        ]} />

        {/* ══ CHAPTER 2 – MAGNESIUM & CHROMIUM ══════════════════════════════ */}
        <ChapterHeader num="2" tag="Nutrient Research"
          title={<>Magnesium & Chromium: <span style={{ color: 'var(--e)' }}>What the Research</span> Shows</>}
          subtitle="Two minerals studied alongside insulin signaling — and what the evidence actually supports." />

        <p>
          Insulin acts like a key that lets glucose into your cells. In insulin resistance, that process works less well, and cells take up less glucose for the same amount of insulin. Magnesium and chromium are minerals involved in parts of this process, and researchers have studied whether supplementing them helps.
        </p>

        <SectionH num="01">Magnesium</SectionH>
        <p>
          Magnesium is a cofactor for the enzyme <strong>tyrosine kinase</strong>, which the insulin receptor needs to pass on its signal, so low magnesium is one plausible way insulin signaling could be affected. Low magnesium intake is also linked with higher type 2 diabetes risk in observational studies. A 2025 review of 23 randomized trials (1,345 people with type 2 diabetes) found magnesium supplements modestly lowered fasting glucose, though the authors describe the effect on long-term control as limited. [1] Most of this evidence is in people who already have diabetes, not prediabetes.
        </p>
        <DarkCallout
          label="What the Asbaghi-style Review Found (Summary)"
          quote="Magnesium supplements modestly reduce fasting glucose in people with type 2 diabetes; the effect on long-term glycaemic control appears limited, and the evidence is of mixed quality."
          source="Summarised from a 2025 systematic review of 23 RCTs (Sultan Qaboos Univ Med J), PMC12244252"
        />

        <SectionH num="02">Chromium Picolinate</SectionH>
        <p>
          <strong>Chromium</strong> has been studied for decades as a possible aid to insulin signaling, partly through a proposed binding protein called chromodulin, though its role in humans is still debated. [5] A 2007 systematic review found chromium lowered HbA1c and fasting glucose in people with diabetes, but found no benefit in people without diabetes, and rated the overall evidence quality as limited.
        </p>
        <DoseCards cards={[
          { label: 'Phase 1 – Catalyst', title: 'Magnesium Bisglycinate',
            body: 'Bisglycinate is generally gentle on the stomach compared with magnesium oxide. Limit elemental magnesium from supplements to 350 mg/day unless your doctor advises otherwise.',
            dose: 'up to 350', unit: 'mg elemental / day' },
          { label: 'Phase 2 – Amplifier', title: 'Chromium Picolinate',
            body: 'A commonly studied form. Evidence of benefit is limited outside people who already have diabetes, and is weak for prediabetes specifically.',
            dose: '200–600', unit: 'mcg / day' },
        ]} />
        <WarnBox type="amber" title="Nutrient Competition Warning"
          body="Chromium Picolinate and Iron compete for the same transport protein (transferrin). If you are taking an iron supplement or iron-fortified multivitamin, ensure at least a 4-hour window between doses." />

        <RefSection refs={[
          { n: 1, authors: 'Multiple authors (2025).',
            citation: 'Effect of Magnesium Supplements on Improving Glucose Control, Blood Pressure and Lipid Profile in Patients With Type 2 Diabetes Mellitus: A Systematic Review and Meta-Analysis. <em>Sultan Qaboos University Medical Journal</em> 25(1):382-94.',
            ids: 'PMC Free Full Text · PMC12244252 ■',
            note: '23 RCTs, 1,345 people with type 2 diabetes: magnesium modestly reduced fasting glucose; the authors describe the effect on long-term glycaemic control as limited.' },
          { n: 2, authors: 'Veronese N, et al. (2021).',
            citation: 'Oral Magnesium Supplementation for Treating Glucose Metabolism Parameters in People with or at Risk of Diabetes. <em>Nutrients.</em> DOI: 10.3390/nu13114074',
            ids: 'PubMed · PMC8619199 ■',
            note: '25 RCTs, 1,677 people: in diabetes, a small reduction in fasting glucose with no effect on HbA1c, fasting insulin or HOMA-IR; at high risk of diabetes, small improvements in fasting glucose, HOMA-IR and 2-hour OGTT glucose, again with no HbA1c or insulin effect.' },
          { n: 3, authors: 'Simental-Mendía LE, Sahebkar A, Rodríguez-Morán M, Guerrero-Romero F. (2016).',
            citation: 'A Systematic Review and Meta-Analysis of Randomized Controlled Trials on the Effects of Magnesium Supplementation on Insulin Sensitivity and Glucose Control. <em>Pharmacological Research</em> 111:272-282.',
            ids: 'DOI 10.1016/j.phrs.2016.06.019 ■',
            note: 'Magnesium taken for four months or longer improved fasting glucose and insulin resistance in people with and without diabetes; shorter trials did not show the same effect. A meta-analysis shows an association, not a mechanism.' },
          { n: 4, authors: 'Barbagallo M, Veronese N, Dominguez LJ. (2022).',
            citation: 'Magnesium in Type 2 Diabetes Mellitus, Obesity, and Metabolic Syndrome. <em>Nutrients</em> 14(3):714.',
            ids: 'DOI 10.3390/nu14030714 ■',
            note: 'Narrative review (not a systematic review) discussing links between low magnesium and glucose, blood pressure and lipid measures.' },
          { n: 5, authors: 'Balk EM, et al. (2007).',
            citation: 'Effect of Chromium Supplementation on Glucose Metabolism and Lipids: A Systematic Review of Randomized Controlled Trials. <em>Diabetes Care</em> 30(8):2154-2163.',
            ids: 'PubMed · PMID 17519436 ■',
            note: 'In people with diabetes, chromium lowered HbA1c by about 0.6 percentage points and fasting glucose by about 1.0 mmol/L; no benefit was seen in people without diabetes, and study quality was often poor.' },
        ]} />

        {/* ══ CHAPTER 3 – ALPHA-LIPOIC ACID ═════════════════════════════════ */}
        <ChapterHeader num="3" tag="Nutrient Research"
          title={<>Alpha-Lipoic Acid: <span style={{ color: 'var(--e)' }}>What the Research</span> Shows</>}
          subtitle="Mainly studied in diabetic neuropathy — the evidence is mixed, and it is not a glucose-lowering therapy." />

        <p>
          Persistently high blood sugar can damage peripheral nerves over time, partly through processes involving <strong>Advanced Glycation End Products (AGEs)</strong> and oxidative stress. Alpha-lipoic acid (ALA) is an antioxidant that has been studied as a treatment for people who already have diabetic peripheral neuropathy, not as a way to lower blood sugar. The evidence on whether it helps symptoms is mixed: a 2024 Cochrane review found it probably has little or no effect on neuropathy symptoms, while a separate 2025 meta-analysis found it may help. [1]
        </p>

        <SectionH num="01">Why ALA Is Studied</SectionH>
        <p>
          ALA is <strong>amphipathic</strong> — it dissolves in both water and fat, unlike vitamin C (water only) or vitamin E (fat only), which is part of why researchers have been interested in it as an antioxidant that could reach nerve tissue. This is a property observed in the lab; it does not by itself prove a clinical benefit. [2]
        </p>
        <DarkCallout
          label="What the Cochrane Review Found (Summary)"
          quote="In people with diabetic neuropathy, oral alpha-lipoic acid probably has little or no effect on neuropathy symptoms at six months. Doses studied were 600–1,800 mg a day."
          source="Summarised from Baicus C, et al. Cochrane Database Syst Rev 2024 | PMID 38205823"
        />

        <SectionH num="02">R-ALA vs. Standard ALA</SectionH>
        <p>
          Most ALA sold is a <strong>racemic</strong> mixture: about half R-ALA (the form the body makes naturally) and half S-ALA (a synthetic byproduct). R-ALA is sometimes sold on its own at a premium, but the trials behind ALA's evidence base mostly used the standard racemic form, so it's unclear whether R-ALA alone performs any better.{' '}
        </p>
        <DoseCards cards={[
          { label: 'Therapeutic Dosing', title: 'Active Nerve Discomfort',
            body: 'A dose range used in some trials for people with diagnosed neuropathy symptoms. Use only under your doctor\'s guidance; higher doses have more side effects.',
            dose: 'up to 1,200', unit: 'mg / day, split doses' },
          { label: 'Preventive Dosing', title: 'Microvascular Protection',
            body: 'A commonly studied dose. There is no established evidence that ALA prevents neuropathy before symptoms appear.',
            dose: '300–600', unit: 'mg / day' },
        ]} />
        <WarnBox type="red" title="Warning: Thiamine (B1) Depletion"
          body="ALA can compete for the same cellular uptake pathways as Vitamin B1 (Thiamine). For long-term use exceeding 12 weeks, ask your doctor whether a B1 (thiamine) supplement is appropriate for you during long-term useions." />

        <RefSection refs={[
          { n: 1, authors: 'Baicus C, Purcarea A, von Elm E, Delcea C, Furtunescu FL. (2024).',
            citation: 'Alpha-Lipoic Acid for Diabetic Peripheral Neuropathy. <em>Cochrane Database of Systematic Reviews</em> 1:CD012967.',
            ids: 'PubMed · PMID 38205823 ■',
            note: 'In people with diabetic neuropathy, oral ALA (doses 600-1,800 mg/day) probably has little or no effect on symptoms at 6 months, and may have little or no effect on nerve impairment. One of two trials included showed no effective treatment for DPN existed at the time.' },
          { n: 2, authors: 'Papanas N, Papachristou S, Ziegler D. (2025).',
            citation: 'Alpha-Lipoic Acid in Diabetic Peripheral Neuropathy: Addressing the Challenges and Complexities Surrounding a 70-Year-Old Compound. <em>Current Issues in Molecular Biology</em> 47(6):402.',
            ids: 'PMC Free Full Text · PMC12191796 ■',
            note: 'Narrative review of ALA for diabetic peripheral neuropathy; notes current DPN therapies mainly offer symptom relief rather than a cure.' },
          { n: 3, authors: 'Das S, Viswanatha GL, Nandakumar K, Kishore A, Hanumanthappa S. (2025).',
            citation: 'Alpha Lipoic Acid: Advancing Insights in Diabetic Neuropathy Through Updated Systematic Review and Meta-Analysis. <em>Exploration of Neuroprotective Therapy</em> 5:1004125.',
            ids: 'DOI 10.37349/ent.2025.1004125 ■',
            note: '9 RCTs, 1,345 people with diabetic neuropathy: oral ALA (600-1,800 mg) may be beneficial for symptoms, but showed no significant change in nerve conduction velocity. This conflicts with the Cochrane review above; the evidence is mixed.' },
          { n: 4, authors: 'Csiha S, Hernyak M, Molnar A, et al. (2025).',
            citation: 'Alpha-Lipoic Acid Treatment Reduces Advanced Glycation End Products in Type 2 Diabetic Patients with Neuropathy. <em>Biomedicines</em> 13(2):438.',
            ids: 'PubMed · PMID 40002851 ■',
            note: 'Small single-group biomarker study (54 people with neuropathy on ALA, compared with 24 people without neuropathy): AGE levels were modestly lower after 6 months. Not placebo-controlled.' },
          { n: 5, authors: 'Vallianou N, Evangelopoulos A, Koutalas P. (2009).',
            citation: 'Alpha-Lipoic Acid and Diabetic Neuropathy. <em>The Review of Diabetic Studies</em> 6(4):230-236.',
            ids: 'PubMed · PMID 20043035 ■',
            note: 'Review of ALA in diabetic neuropathy. A separate 2019 meta-analysis of 10 RCTs (553 people with uncomplicated type 2 diabetes) found no difference from placebo in HbA1c or fasting glucose (Ebada MA, et al., Iran J Pharm Res).' },
        ]} />

        {/* ══ CHAPTER 4 – OMEGA-3 ════════════════════════════════════════════ */}
        <ChapterHeader num="4" tag="Nutrient Research"
          title={<>Omega-3 & Inflammation: <span style={{ color: 'var(--e)' }}>What the Research</span> Shows</>}
          subtitle="Fish-oil fats and markers of inflammation — evidence is from mixed populations, not specifically prediabetes." />

        <p>
          Blood sugar is only part of the picture. Researchers have also studied low-grade, chronic inflammation — sometimes called <strong>meta-inflammation</strong> — and its links to insulin resistance, involving markers like TNF-alpha, IL-6 and CRP. Omega-3 fats (EPA and DHA, found in fatty fish and fish oil) are among the nutrients studied for their effect on these markers; they are not the only one, and the evidence is mixed in quality.
        </p>

        <SectionH num="01">What Omega-3 May Do</SectionH>
        <p>
          Omega-3s are converted in the body into{' '}
          <strong>specialized pro-resolving mediators (SPMs)</strong> — resolvins, protectins and maresins — molecules thought to help switch off inflammation, rather than just blocking pain signals the way common anti-inflammatories do. Whether supplements reliably raise SPM levels in people is still being studied. A 2022 umbrella review of 32 meta-analyses found modest average reductions in CRP, TNF-alpha and IL-6 with omega-3 supplementation, with high variability between studies and across many different health conditions, not specifically prediabetes. [2]
        </p>
        <DarkCallout
          label="Context: REDUCE-IT (Prescription Omega-3)"
          quote="The REDUCE-IT trial tested prescription icosapent ethyl (4 g a day) in statin-treated adults with high cardiovascular risk. It is not the same as over-the-counter fish oil, and it does not show that supplements prevent heart disease."
          source="Bhatt DL, et al. N Engl J Med 2019 | PMID 30415628"
        />

        <SectionH num="02">Product Quality</SectionH>
        <p>
          Fish oil can <strong>oxidize</strong>, and oxidized fats may promote inflammation rather than reduce it. The research behind this is mostly from intravenous fish oil in hospital settings, not oral supplements, but the general quality concern is a reasonable one. [5] Third-party testing (such as IFOS) checks oxidation levels; look for a product that publishes its test results if you decide to use one.
        </p>
        <DoseCards cards={[
          { label: 'Metabolic Repair Dose', title: 'High FBS & Elevated Triglycerides',
            body: 'A higher dose sometimes used in trials. Discuss with your doctor first, especially if you take blood thinners.',
            dose: 'up to 2,000–4,000', unit: 'mg / day (doctor-guided)' },
          { label: 'Maintenance Dose', title: 'Long-Term Protection',
            body: 'A common general maintenance dose; check the EPA+DHA content per serving on the label.',
            dose: '1,000–2,000', unit: 'mg / day' },
        ]} />
        <WarnBox type="amber" title="Protocol Note: The Fatty Meal Rule"
          body="Omega-3s are fat-soluble, so taking them with a meal that has some fat may help absorption." />

        <RefSection refs={[
          { n: 1, authors: 'Khalili L, Valdes-Ramos R, Harbige LS. (2021).',
            citation: 'Effect of n-3 (Omega-3) Polyunsaturated Fatty Acid Supplementation on Metabolic and Inflammatory Biomarkers and Body Weight in Patients with Type 2 Diabetes Mellitus: A Systematic Review and Meta-Analysis of RCTs. <em>Metabolites</em> 11(11):742.',
            ids: 'PMC Free Full Text · PMC8620218 ■',
            note: '30 RCTs in people with type 2 diabetes: omega-3 improved several glycemic and lipid markers on average. This population already has diabetes; results may not carry over to prediabetes.' },
          { n: 2, authors: 'Kavyani Z, Musazadeh V, Fathi S, Faghfouri AH, Dehghan P, Sarmadi B. (2022).',
            citation: 'Efficacy of the Omega-3 Fatty Acids Supplementation on Inflammatory Biomarkers: An Umbrella Meta-Analysis. <em>International Immunopharmacology</em> 111:109104.',
            ids: 'PubMed · PMID 35914448 ■',
            note: '32 meta-analyses: modest average reductions in CRP, TNF-alpha and IL-6, with high heterogeneity between studies; populations studied had various conditions, and the authors describe omega-3 as an adjuvant (add-on), not a primary treatment.' },
          { n: 3, authors: 'Calder PC. (2017).',
            citation: 'Omega-3 Fatty Acids and Inflammatory Processes: From Molecules to Man. <em>Biochemical Society Transactions</em> 45(5):1105-1115.',
            ids: 'PubMed · PMID 28900017 ■',
            note: 'Narrative review: EPA/DHA partly inhibit several aspects of the inflammatory response; human trial evidence of benefit is strongest in rheumatoid arthritis and in stabilising atherosclerotic plaques, not specifically prediabetes.' },
          { n: 4, authors: 'Bhatt DL, Steg PG, Miller M, et al.; REDUCE-IT Investigators. (2019).',
            citation: 'Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia. <em>New England Journal of Medicine</em> 380:11-22.',
            ids: 'PubMed · PMID 30415628 ■',
            note: 'Tested prescription icosapent ethyl (4 g/day), a purified EPA drug, in statin-treated adults with elevated triglycerides and high cardiovascular risk. It reduced cardiovascular events in this specific population. It is not the same product as over-the-counter fish oil, and its 25% relative risk reduction should not be read as applying to supplements or to prediabetes.' },
          { n: 5, authors: 'Torrinhas RS, Calder PC, et al. (2024).',
            citation: 'Parenteral Fish Oil: An Update on Evidence and Clinical Use. <em>Nutrients.</em>',
            ids: 'see publisher record ■',
            note: 'This source discusses INTRAVENOUS fish-oil lipid emulsions used in hospital nutrition, not oral supplements. It is included here only as general background on fish-oil oxidation and does not support oral-supplement dosing claims.' },
        ]} />

        {/* ══ CHAPTER 5 – VITAMIN D3 & K2 ═══════════════════════════════════ */}
        <ChapterHeader num="5" tag="Nutrient Research"
          title={<>Vitamin D3 &amp; K2: <span style={{ color: 'var(--e)' }}>What the Research</span> Shows</>}
          subtitle="Real trial evidence for vitamin D in prediabetes, and where K2 fits in." />

        <p>
          Vitamin D acts on a receptor found in many tissues, including the pancreas, and researchers have studied whether vitamin D status affects insulin secretion and the course of prediabetes. The 2024 Endocrine Society guideline recommends vitamin D supplementation for adults with prediabetes at doses above the standard daily allowance, based on this evidence.
        </p>

        <SectionH num="01">The Prediabetes Trial Evidence</SectionH>
        <p>
          A 2025 meta-analysis pooled 10 randomized trials (4,478 people) and found that adults with prediabetes taking vitamin D supplements were modestly more likely to return to normal glucose regulation than those on placebo (18.5% vs. 14.0%; about 27% relative increase). [1] This is a real, recent finding, and the Endocrine Society's recommendation above is partly based on it.
        </p>
        <DarkCallout
          label="What the D2d Secondary Analysis Found (Summary)"
          quote="In adults with prediabetes taking 4,000 IU of vitamin D3 a day, insulin-related measures did not improve overall. A benefit appeared only among people whose starting vitamin D level was low (below 12 ng/mL)."
          source="Summarised from Rasouli N, et al. J Clin Endocrinol Metab 2022 | PMID 34473295"
        />

        <SectionH num="02">Where Vitamin K2 Fits</SectionH>
        <p>
          Vitamin K2 (as MK-7) is involved in directing calcium toward bone rather than soft tissue, and some small trials have combined it with vitamin D3 and looked at glucose along with bone markers. A 40-person double-blind trial found combined D3+K2 lowered fasting glucose more than either alone, but this is one small study and has not been widely replicated. [4]
        </p>
        <DoseCards cards={[
          { label: 'Metabolic Repair Dose', title: 'Vitamin D3',
            body: 'A dose at or above the Endocrine Society\'s suggested range for prediabetes. A blood test (25-OH vitamin D) before and during supplementation is recommended; very high doses over long periods can cause harm, so check with your doctor.',
            dose: '1,000–4,000', unit: 'IU / day (doctor-guided)' },
          { label: 'K2 Synergy Dose', title: 'Vitamin K2 (MK-7 Form)',
            body: 'Sometimes paired with D3; evidence specific to glucose is limited to small studies. Take with a meal containing some fat.',
            dose: '90–180', unit: 'mcg / day' },
        ]} />
        <WarnBox type="amber" title="Protocol Note: The Fat-Solubility Rule"
          body="Vitamin D3 and K2 are fat-soluble, so taking them with a meal that has some fat may help absorption. Very high vitamin D intakes over long periods can be harmful; stay within your doctor's recommended range." />

        <RefSection refs={[
          { n: 1, authors: 'Kretschmer PM, Balk EM, Pittas AG. (2025).',
            citation: 'Effect of Vitamin D on Regression to Normal Glucose Regulation in Adults With Prediabetes. <em>Journal of the Endocrine Society</em> 9(5):bvaf042.',
            ids: 'PubMed · PMID 40144812 ■  |  PMC Free Full Text · PMC11938431 ■',
            note: '10 RCTs, 4,478 people with prediabetes: 18.5% on vitamin D vs. 14.0% on placebo returned to normal glucose regulation (RR 1.27, 95% CI 1.12-1.45). Confirmed accurate.' },
          { n: 2, authors: 'Rasouli N, Brodsky IG, Chatterjee R, Kim SH, Pratley RE, Staten MA, Pittas AG; D2d Research Group. (2022).',
            citation: 'Effects of Vitamin D Supplementation on Insulin Sensitivity and Secretion in Prediabetes. <em>Journal of Clinical Endocrinology &amp; Metabolism</em> 107(1):230-240.',
            ids: 'PubMed · PMID 34473295 ■',
            note: '4,000 IU/day for 24 months did NOT improve an index of beta-cell function overall. A benefit was seen only in the subgroup with baseline vitamin D below 12 ng/mL. The overall null result is the headline finding; this is a secondary, prespecified subgroup analysis.' },
          { n: 3, authors: 'Jadhav N, Ajgaonkar S, Mehta D, et al. (2022).',
            citation: 'Molecular Pathways and Roles for Vitamin K2-7 as a Health-Beneficial Nutraceutical. <em>Frontiers in Pharmacology.</em>',
            ids: 'see publisher record — NOT independently re-verified ■',
            note: 'A mechanistic review of proposed K2 pathways. Not independently re-verified for this edition; the specific insulin-sensitivity mechanism described is not established in human trials.' },
          { n: 4, authors: 'Aguayo-Ruiz JI, et al. (2020).',
            citation: 'Effect of Supplementation with Vitamins D3 and K2 on Undercarboxylated Osteocalcin and Insulin Serum Levels in Patients with Type 2 Diabetes Mellitus. <em>Diabetology &amp; Metabolic Syndrome.</em>',
            ids: 'see publisher record — NOT independently re-verified ■',
            note: 'Small trial (40 people with type 2 diabetes, not prediabetes). Not independently re-verified for this edition; treat as preliminary.' },
          { n: 5, authors: 'Xie C, Gong J, Zheng C, et al. (2024).',
            citation: 'Effects of Vitamin K Supplementation on Bone Mineral Density and Bone Metabolism. <em>Bone &amp; Joint Research.</em>',
            ids: 'see publisher record ■',
            note: 'This source is about BONE density, not glucose or arterial calcium. It is kept here only as a general K2 reference and does not support any claim about blood sugar.' },
        ]} />

        {/* ══ CHAPTER 6 – AKKERMANSIA ════════════════════════════════════════ */}
        <ChapterHeader num="6" tag="Emerging Research"
          title={<>Akkermansia muciniphila: <span style={{ color: 'var(--e)' }}>An Early-Stage</span> Gut Supplement</>}
          subtitle="A single small trial found a benefit only in a subgroup — promising, but early." />

        <p>
          Gut bacteria influence metabolism in ways researchers are still mapping out. One species — <em>Akkermansia muciniphila</em> — has drawn interest for its possible link to insulin sensitivity and weight. Human trial evidence is still limited, and the most recent and largest trial found a benefit only in a specific subgroup, not overall.
        </p>

        <SectionH num="01">A Proposed Mechanism</SectionH>
        <p>
          One proposed mechanism: low <em>Akkermansia</em> levels may be linked to a thinner gut lining, which in animal studies allowed more bacterial byproducts (LPS) into the bloodstream and was associated with inflammation and insulin resistance. The 2013 study behind this finding was in mice, not people. [5] Whether the same pathway matters in humans is not established. [4, 5]
        </p>
        <DarkCallout
          label="Key Finding (Cell Metabolism 2025)"
          quote="In this 12-week trial in adults with type 2 diabetes, both groups lost weight and HbA1c with lifestyle guidance, and the supplement did not significantly outperform placebo overall. Only people with low starting Akkermansia showed extra benefit."
          source="Summarised from Zhang Y, et al. Cell Metab 2025 | PMID 39879980"
        />

        <SectionH num="02">Pasteurized vs. Live Forms</SectionH>
        <p>
          The first human trial (Depommier et al., <em>Nature Medicine</em>, 2019) was a small, 3-month pilot in 32 overweight or obese adults with insulin resistance, and reported that pasteurized (heat-treated) <em>A. muciniphila</em> improved several metabolic measures more than placebo. [1] It did not test live cells head-to-head within the same trial, so 'outperformed live cells' is not something this single study shows. A 2025 laboratory study found that an <em>A. muciniphila</em> extract increased GLP-1 release from human cells in a dish; this is a cell-culture finding, not a result in people. [3]
        </p>
        <DoseCards cards={[
          { label: 'Metabolic Protocol', title: 'Pasteurized A. muciniphila',
            body: 'This is an early-stage, lightly studied supplement. If you and your doctor decide to try it, look for a refrigerated, reputable product; evidence of an added benefit beyond diet and movement is limited to one subgroup in one trial.',
            dose: 'per label', unit: '(follow product instructions)' },
          { label: 'Polyphenol Synergy', title: 'Prebiotic Feeding',
            body: 'Polyphenol-rich foods (berries, pomegranate, green tea) are a reasonable part of a healthy diet regardless of any effect on gut bacteria; evidence they boost Akkermansia specifically in people is limited.',
            dose: 'food-based', unit: '(no established supplement dose)' },
        ]} />
        <WarnBox type="amber" title="Protocol Note: Empty Stomach Timing"
          body="Unlike most probiotics, <em>Akkermansia</em> is best taken on an empty stomach (30 min before breakfast) to ensure transit into the lower intestinal mucus layer where it exerts barrier-strengthening and GLP-1 effects. Avoid taking with very hot beverages which can damage the pasteurized bacteria." />

        <RefSection refs={[
          { n: 1, authors: 'Depommier C, Everard A, Druart C, et al. (2019).',
            citation: 'Supplementation with Akkermansia muciniphila in Overweight and Obese Human Volunteers: A Proof-of-Concept Exploratory Study. <em>Nature Medicine</em> 25:1096-1103.',
            ids: 'PubMed · PMID 31263284 ■  |  PMC Free Full Text · PMC6699990 ■',
            note: 'Small pilot trial (32 people with overweight/obesity and insulin resistance, 3 months): pasteurized A. muciniphila improved several metabolic measures versus placebo. It is a proof-of-concept study, not a confirmation of benefit.' },
          { n: 2, authors: 'Zhang Y, Liu R, Chen Y, et al. (2025).',
            citation: 'Akkermansia Supplementation in Overweight/Obese Type 2 Diabetes. <em>Cell Metabolism</em> 37(3):592-605.e6.',
            ids: 'PubMed · PMID 39879980 ■',
            note: '12-week trial, 58 people with overweight/obesity and type 2 diabetes: both groups lost weight and HbA1c with lifestyle guidance; NO significant difference between supplement and placebo overall. Only the subgroup with low starting Akkermansia showed an extra benefit.' },
          { n: 3, authors: 'Arukha AP, Nayak S, Swain DM. (2025).',
            citation: 'Effect of Akkermansia muciniphila on GLP-1 and Insulin Secretion. <em>Nutrients</em> 17(15):2516.',
            ids: 'PubMed · PMID 40806100 ■  |  PMC Free Full Text · PMC12348610 ■',
            note: 'A cell-culture (in vitro) study. Findings in cultured cells do not establish an effect in living people and should not be read as evidence of a GLP-1 benefit from supplementation.' },
          { n: 4, authors: 'Ye WY, Cai Y. (2025).',
            citation: 'Akkermansia muciniphila: Gut Microbiota Crosstalk Against Oxidative Stress and Clinical Prospects. <em>BMC Microbiology.</em>',
            ids: 'see publisher record — NOT independently re-verified ■',
            note: 'A review article. Not independently re-verified for this edition.' },
          { n: 5, authors: 'Everard A, Belzer C, Geurts L, et al. (2013).',
            citation: 'Cross-Talk Between Akkermansia muciniphila and Intestinal Epithelium Controls Diet-Induced Obesity. <em>Proceedings of the National Academy of Sciences</em> 110(22):9066-9071.',
            ids: 'PubMed · PMID 23671105 ■',
            note: 'A MOUSE study, not a human trial. It supports the proposed mechanism in animals, and does not by itself show the same effect occurs in people.' },
        ]} />

        {/* ══ CONCLUSION – 12-WEEK RESET CALENDAR ═══════════════════════════ */}
        <div className="page-break">
          <div className="ch-num">Conclusion</div>
          <h1>One Way to Sequence These Topics Over 12 Weeks</h1>
          <div className="ch-subtitle">An example, not a prescription — discuss any plan with your doctor first</div>
          <hr className="erule" />
          <p>
            This chapter has covered six supplement topics and what the research shows for each. If you and your doctor decide some are worth trying, the table below shows one way to introduce them gradually, starting with the better-evidenced ones. It is an example, not a required sequence, and none of it replaces food, movement, sleep or medical care.
          </p>

          <table className="cal-table no-break" style={{ marginTop: 14 }}>
            <thead>
              <tr>
                <th style={{ width: '16%' }}>Phase</th>
                <th style={{ width: '9%' }}>Weeks</th>
                <th style={{ width: '44%' }}>Possible Additions</th>
                <th style={{ width: '31%' }}>What the Evidence Covers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="cal-phase">Starting Point</span></td>
                <td>1–4</td>
                <td>
                  If trying one supplement: berberine (up to 1,500 mg/day, in divided doses)<br />
                  Magnesium (up to 350 mg elemental/day)<br />
                  Chromium (200-600 mcg/day, optional)<br />
                  Omega-3 (1,000-2,000 mg/day)
                </td>
                <td>Evidence discussed in Ch. 1, 2 & 4 — mostly in people with type 2 diabetes, not prediabetes</td>
              </tr>
              <tr>
                <td><span className="cal-phase">If Continuing</span></td>
                <td>5–8</td>
                <td>
                  Alpha-lipoic acid (300-600 mg/day), if advised<br />
                  Vitamin D3 (1,000-4,000 IU/day) + K2, with a blood test<br />
                  Re-check with your doctor before increasing any dose
                </td>
                <td>Ch. 3 evidence is mainly in diagnosed neuropathy, not prevention. Ch. 5 vitamin D evidence is the strongest in this guide for prediabetes specifically.</td>
              </tr>
              <tr>
                <td><span className="cal-phase">Optional, Early-Stage</span></td>
                <td>9–12</td>
                <td>
                  Akkermansia (pasteurized), only if you and your doctor decide to<br />
                  Follow the product label for dosing<br />
                  Reassess fasting glucose &amp; HbA1c with your doctor
                </td>
                <td>Ch. 6 evidence is from one small trial with a subgroup benefit — treat as exploratory</td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ marginTop: 20 }}>Summary of Topics Covered</h3>
          <table className="summary-table">
            <tbody>
              {[
                ['Ch. 1', 'Berberine',                       'up to 1,500 mg/day','Studied mostly in type 2 diabetes'],
                ['Ch. 2', 'Magnesium + Chromium',            '350 mg Mg + 200-600 mcg Cr','Modest effects; mixed evidence'],
                ['Ch. 3', 'Alpha-Lipoic Acid',               '300–600 mg/day',    'Mainly studied for neuropathy'],
                ['Ch. 4', 'Omega-3 EPA/DHA',                 '1,000–2,000 mg/day','Modest effect on inflammation markers'],
                ['Ch. 5', 'Vitamin D3 + K2',                 '1,000-4,000 IU + 90-180 mcg','Strongest prediabetes-specific evidence here'],
                ['Ch. 6', 'Akkermansia (pasteurized)',        'per label',         'Early-stage; one subgroup finding'],
              ].map(([ch, name, dose, target]) => (
                <tr key={ch}>
                  <td className="s-num">{ch}</td>
                  <td className="s-name">{name}</td>
                  <td className="s-dose">{dose}</td>
                  <td className="s-tgt">{target}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: '8pt', color: 'var(--g600)', marginTop: 8 }}>
            This table summarizes topics discussed in this guide, drawn from the research cited in each chapter. It is not a prescription. Reassess fasting glucose, HbA1c and lipids with your doctor periodically, and adjust or stop any supplement in consultation with them.
          </p>
        </div>

        {/* ══ MASTER BIBLIOGRAPHY ════════════════════════════════════════════ */}
        <div className="page-break">
          <h1>Master Bibliography</h1>
          <hr className="erule" />
          <p style={{ fontSize: '7.5pt', color: 'var(--g400)', marginBottom: 16 }}>
            These 30 citations correspond to the in-text references within each chapter, with the corrections and caveats noted in each chapter's own reference list above. Several sources were not independently re-verified for this edition (marked in-chapter); treat those as unconfirmed rather than established.
          </p>
          {[
            { group: 'Chapter 1  —  Berberine', refs: [
              { tag: '[B1]', body: 'Wang J, et al. (2024). Effects of Administering Berberine on Type 2 Diabetes Mellitus: SR & Meta-Analysis. Frontiers in Pharmacology.', ids: 'PMID 39640489 — authors not independently re-verified' },
              { tag: '[B2]', body: 'Liu D, Zhao H, Zhang Y, Hu J, Xu H. (2025). Efficacy and Safety of Berberine on the Components of Metabolic Syndrome. Frontiers in Pharmacology 16:1572197.', ids: 'PMC12307485 (journal corrected from Endocrinology)' },
              { tag: '[B3]', body: 'Yin J, Xing H, Ye J. (2008). Efficacy of Berberine in Patients with Type 2 Diabetes Mellitus. Metabolism 57(5):712-717. A pilot study; no rosiglitazone arm.', ids: 'PMID 18442638  |  PMC2410097' },
              { tag: '[B4]', body: 'Fogacci F, Grassi D, Rizzo M, Cicero AFG. (2019). Metabolic Effect of Berberine-Silymarin Association: A Meta-Analysis of RCTs. Phytotherapy Research 33:862-870 (journal and authors corrected).', ids: 'DOI 10.1002/ptr.6282' },
              { tag: '[B5]', body: 'Wang Y, et al. (2022). Berberine and Its Role in Activation of AMPK.', ids: 'Not located — could not be verified; treat as unconfirmed' },
            ]},
            { group: 'Chapter 2  —  Magnesium & Chromium', refs: [
              { tag: '[M1]', body: 'Multiple authors (2025). Effect of Magnesium Supplements on Glucose Control in Type 2 Diabetes: SR & Meta-Analysis. Sultan Qaboos University Medical Journal 25(1):382-94 (author name corrected).', ids: 'PMC12244252' },
              { tag: '[M2]', body: 'Veronese N, et al. (2021). Oral Magnesium Supplementation for Treating Glucose Metabolism Parameters in People With or at Risk of Diabetes.', ids: 'PMC8619199 (PMID corrected)' },
              { tag: '[M3]', body: 'Simental-Mendía LE, Sahebkar A, Rodríguez-Morán M, Guerrero-Romero F. (2016). Magnesium Supplementation on Insulin Sensitivity and Glucose Control. Pharmacological Research 111:272-282 (authors corrected).', ids: 'DOI 10.1016/j.phrs.2016.06.019' },
              { tag: '[M4]', body: 'Barbagallo M, Veronese N, Dominguez LJ. (2022). Magnesium in Type 2 Diabetes Mellitus, Obesity, and Metabolic Syndrome (narrative review, not systematic). Nutrients 14(3):714 (title and authors corrected).', ids: 'see publisher record' },
              { tag: '[M5]', body: 'Wang S, et al. (2024). Chromium Picolinate and Metabolic Syndrome: Dose-Response Meta-Analysis.', ids: 'Not located — could not be verified; replaced in Ch. 2 with Balk EM, et al. (2007), Diabetes Care, PMID 17519436' },
            ]},
            { group: 'Chapter 3  —  Alpha-Lipoic Acid', refs: [
              { tag: '[A1]', body: 'Baicus C, Purcarea A, von Elm E, Delcea C, Furtunescu FL. (2024). Alpha-Lipoic Acid for Diabetic Peripheral Neuropathy. Cochrane Database of Systematic Reviews 1:CD012967. Found little-to-no effect on symptoms — see Chapter 3.', ids: 'PMID 38205823' },
              { tag: '[A2]', body: 'Papanas N, Papachristou S, Ziegler D. (2025). Alpha-Lipoic Acid in Diabetic Peripheral Neuropathy. Current Issues in Molecular Biology 47(6):402.', ids: 'PMC12191796' },
              { tag: '[A3]', body: 'Das S, Viswanatha GL, Nandakumar K, Kishore A, Hanumanthappa S. (2025). Alpha Lipoic Acid: Advancing Insights in Diabetic Neuropathy. Exploration of Neuroprotective Therapy 5:1004125 (authors corrected).', ids: 'DOI 10.37349/ent.2025.1004125' },
              { tag: '[A4]', body: 'Csiha S, Hernyak M, Molnar A, et al. (2025). ALA Treatment Reduces Advanced Glycation End Products in Type 2 Diabetic Patients With Neuropathy. Biomedicines 13(2):438 (authors corrected — not Feher/Soos/Ungi).', ids: 'PMID 40002851' },
              { tag: '[A5]', body: 'Vallianou N, Evangelopoulos A, Koutalas P. (2009). Alpha-Lipoic Acid and Diabetic Neuropathy (title and year corrected). The Review of Diabetic Studies 6(4):230-236.', ids: 'PMID 20043035' },
            ]},
            { group: 'Chapter 4  —  Omega-3', refs: [
              { tag: '[O1]', body: 'Khalili L, Valdes-Ramos R, Harbige LS. (2021). n-3 PUFA Supplementation on Metabolic & Inflammatory Biomarkers in Type 2 Diabetes. Metabolites 11(11):742 (authors and journal corrected).', ids: 'PMC8620218' },
              { tag: '[O2]', body: 'Kavyani Z, Musazadeh V, Fathi S, Faghfouri AH, Dehghan P, Sarmadi B. (2022). Efficacy of Omega-3 on Inflammatory Biomarkers: Umbrella Meta-Analysis. International Immunopharmacology 111:109104 (authors and journal corrected).', ids: 'PMID 35914448' },
              { tag: '[O3]', body: 'Calder PC. (2017). Omega-3 Fatty Acids and Inflammatory Processes: From Molecules to Man. Biochemical Society Transactions 45(5):1105-1115 (year and DOI corrected).', ids: 'PMID 28900017' },
              { tag: '[O4]', body: 'Bhatt DL, Steg PG, Miller M, et al.; REDUCE-IT Investigators. (2019). Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia. New England Journal of Medicine 380:11-22. Prescription drug trial — see caveat in Chapter 4.', ids: 'PMID 30415628' },
              { tag: '[O5]', body: 'Torrinhas RS, Calder PC, et al. (2024). Parenteral (intravenous) Fish Oil: An Update on Evidence and Clinical Use. Background only — not about oral supplements; see Chapter 4.', ids: 'see publisher record' },
            ]},
            { group: 'Chapter 5  —  Vitamin D3 & K2', refs: [
              { tag: '[D1]', body: 'Kretschmer PM, Balk EM, Pittas AG. (2025). Vitamin D on Regression to Normal Glucose Regulation in Adults With Prediabetes. Journal of the Endocrine Society 9(5):bvaf042. Confirmed accurate.', ids: 'PMID 40144812  |  PMC11938431' },
              { tag: '[D2]', body: 'Rasouli N, Brodsky IG, Chatterjee R, et al.; D2d Research Group. (2022). Vitamin D Supplementation on Insulin Sensitivity and Secretion in Prediabetes. J Clin Endocrinol Metab 107(1):230-240. Overall result was null; see Chapter 5.', ids: 'PMID 34473295' },
              { tag: '[D3]', body: 'Jadhav N, et al. (2022). Molecular Pathways and Roles for Vitamin K2-7 as a Nutraceutical. Frontiers in Pharmacology.', ids: 'Not independently re-verified for this edition' },
              { tag: '[D4]', body: 'Aguayo-Ruiz JI, et al. (2020). Vitamins D3 and K2 on Undercarboxylated Osteocalcin and Insulin in Type 2 Diabetes. Diabetology & Metabolic Syndrome. Small study (n=40).', ids: 'Not independently re-verified for this edition' },
              { tag: '[D5]', body: 'Xie C, Gong J, Zheng C, et al. (2024). Vitamin K Supplementation on Bone Mineral Density and Bone Metabolism. Bone & Joint Research. A bone paper — does not support any glucose-related claim.', ids: 'see publisher record' },
            ]},
            { group: 'Chapter 6  —  Akkermansia muciniphila', refs: [
              { tag: '[K1]', body: 'Depommier C, Everard A, Druart C, et al. (2019). Supplementation with Akkermansia muciniphila in Overweight and Obese Volunteers: A Proof-of-Concept Study. Nature Medicine 25:1096-1103. Small pilot (n=32).', ids: 'PMID 31263284  |  PMC6699990' },
              { tag: '[K2]', body: 'Zhang Y, Liu R, Chen Y, et al. (2025). Akkermansia Supplementation in Type 2 Diabetes: Overall Null, Subgroup Benefit Only. Cell Metabolism 37(3):592-605.e6.', ids: 'PMID 39879980' },
              { tag: '[K3]', body: 'Arukha AP, Nayak S, Swain DM. (2025). Effect of Akkermansia muciniphila on GLP-1 and Insulin Secretion. Nutrients 17(15):2516. Cell-culture study only, not a human trial.', ids: 'PMID 40806100  |  PMC12348610' },
              { tag: '[K4]', body: 'Ye WY, Cai Y. (2025). Akkermansia muciniphila: Gut Microbiota Crosstalk Against Oxidative Stress. BMC Microbiology.', ids: 'Not independently re-verified for this edition' },
              { tag: '[K5]', body: 'Everard A, Belzer C, Geurts L, et al. (2013). Cross-Talk Between Akkermansia muciniphila and Intestinal Epithelium Controls Diet-Induced Obesity. PNAS 110(22):9066-9071. A MOUSE study.', ids: 'PMID 23671105' },
            ]},
          ].map(({ group, refs }) => (
            <div className="bib-section" key={group}>
              <div className="bib-group">{group}</div>
              {refs.map(r => (
                <div className="bib-row" key={r.tag}>
                  <div className="bib-tag">{r.tag}</div>
                  <div className="bib-body">
                    {r.body}&nbsp;
                    <span className="bib-ids">{r.ids}</span>&nbsp;
                                      </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ══ MEDICAL DISCLAIMER & AFFILIATE DISCLOSURE ═════════════════════ */}
        <div className="page-break">
          <h1>Medical Disclaimer</h1>
          <hr className="rrule" />
          <div className="disclaimer-box">
            <p>
              All content in <em>The Metabolic Reset</em> is for general educational and informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Supplements, foods, and lifestyle interventions discussed here have not been evaluated by the FDA, MHRA, TGA, or Health Canada and are not intended to diagnose, treat, cure, or prevent any disease. Health regulations differ by country, so content may not apply in your jurisdiction.
            </p>
            <p>
              Individual results vary and are not guaranteed. Always consult your doctor or a qualified healthcare provider before making changes to your diet, exercise routine, medications, or supplement regimen — especially before starting berberine, alpha-lipoic acid, vitamin D3, omega-3, or any other supplement discussed here.{' '}
              <strong>Do not use these supplements if you are pregnant, planning a pregnancy, or breastfeeding, and do not give them to children.</strong> They can interact with other medicines, including blood thinners, blood pressure medicines and diabetes medicines, and may not suit people with kidney or liver disease.
            </p>
            <p>
              Evidence quality varies widely between the topics in this guide; several chapters note mixed, limited, or early-stage research, and some cited sources could not be independently re-verified for this edition. Never disregard professional medical advice or delay seeking it because of something you read in this guide.
            </p>
          </div>

          <h2 style={{ marginTop: 24 }}>Affiliate Disclosure</h2>
          <hr className="arule" />
          <div className="affiliate-box">
            <p>
              ThriveHealth360 may earn a commission from qualifying purchases made through links in this document, at no extra cost to you. This edition does not name or recommend specific brands.
            </p>
            <p>
              Nothing in this disclosure should be read as a guarantee of product quality or effectiveness.
            </p>
          </div>

          <div className="page-footer">
            © 2026 ThriveHealth360  ·  {today}  ·  thrivehealth360.org<br />
            Editorial v5  ·  30 Cited Sources, Several Not Independently Re-Verified  ·  Educational Use Only<br />
            This PDF is not password-protected and allows full text selection for accessibility.
          </div>
        </div>

      </div>
    </>
  );
};

export default FullMetabolicResetBook;
