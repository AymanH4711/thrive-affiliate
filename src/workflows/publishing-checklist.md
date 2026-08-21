# Publishing Checklist – Pre-Publish Gate

Use this checklist **before** merging any new article or major page update.

## Content Quality
- [ ] Article length ≥ 1,200 words (unless it's a tool/quiz)
- [ ] Uses `ArticleLayout.tsx` wrapper (not ad-hoc SEO/disclaimers)
- [ ] Opening hook follows `echo.md` patterns (no "in today's article…")
- [ ] Every scary paragraph has an agency pair ("Here's what you can do") – checked manually or via script

## Citations & Evidence
- [ ] At least 3 citations from accepted sources (PubMed, NIH, ADA, peer-reviewed journals)
- [ ] `EvidenceStrengthBadge` displayed for any supplement claim
- [ ] `CitationList` component renders at the bottom – **screenshot attached to PR** (visual proof)

## Legal & Compliance
- [ ] Affiliate disclosure present above the fold (uses `AffiliateDisclosure.tsx`)
- [ ] No forbidden phrases from `compliance-rules.json` (e.g., "cures", "reverses", "we recommend")
- [ ] Supplement disclaimer (`SupplementDisclaimers.tsx`) included on any page mentioning supplements

## SEO & Performance
- [ ] OG image present in `public/images/blog/` with correct filename
- [ ] Meta title + description follow brand patterns (no clickbait)
- [ ] Internal links added via `internalLinkGenerator.ts` or manually (≥3 internal links)
- [ ] Images have alt text and are under 200KB

## Voice & Tone
- [ ] Read the article out loud. If it sounds like a corporate brochure, rewrite.
- [ ] No forbidden words: synergistic, holistic, superfoods, detox, biohack, wellness journey.

## Automation
- [ ] Run `npm run cite-audit` locally – passes without warnings
- [ ] GitHub Actions compliance check passed (auto-run on PR)

## Sign-off
- [ ] Final review by human editor (or AI with `echo.md` injected)