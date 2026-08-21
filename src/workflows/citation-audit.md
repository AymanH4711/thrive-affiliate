# Citation Audit SOP – `/cite-audit` → `/cite-clean`

## Purpose
Ensure every health claim in an article is backed by at least two credible citations from accepted sources (PubMed, NIH, ADA, peer-reviewed journals). This SOP runs both manually and automatically via CI.

---

## When to Run

| Trigger | Action |
|---------|--------|
| Before publishing any new article | Manual `npm run cite-audit -- --file=article.tsx` |
| On every pull request to `main` | Automatic via `.github/workflows/compliance-check.yml` |
| Monthly (scheduled) | Automatic via `automation-config.json` weekly loop |

---

## Command Reference

```bash
# Audit a single article
npm run cite-audit -- --file=src/pages/blog/comparison/BerberineVsMetformin.tsx

# Audit all articles in a folder
npm run cite-audit -- --folder=src/pages/blog/

# Audit the entire site (warning: slow)
npm run cite-audit -- --scope=all

# Auto-clean (add missing citations using TAVILY MCP)
npm run cite-clean -- --dry-run   # preview only
npm run cite-clean -- --apply      # actually fetch and insert citations

---

## Audit Rules

> ⚠️ **This table is a human-readable summary only.**  
> The authoritative values live in `src/utils/compliance/compliance-rules.json`.  
> If these conflict, `compliance-rules.json` wins. Update both together.