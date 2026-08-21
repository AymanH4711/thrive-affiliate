# Content Update Protocol – Post-Publish Refresh Rules

## Purpose
Define when and how to refresh published articles, and how to improve `echo.md` based on real performance data.

---

## When to Refresh an Article

| Condition | Action | Priority |
|-----------|--------|----------|
| Article age > 180 days | Full review (citations, statistics, recommendations) | Medium |
| Bounce rate > 70% (last 30 days) | Rewrite opening and restructure | High |
| Time on page < 90 seconds | Add engagement hooks (bullets, images, CTA) | High |
| A related article was updated | Refresh internal links only | Low |
| New FDA/FTC guideline published | Immediate compliance check | Critical |
| Article has 2x average engagement | Extract voice patterns → update `echo.md` (see below) | High |

---

## Refresh Workflow Steps

1. **Identify stale articles**  
   Run: `npm run content-update -- --check-stale`

2. **Create an update branch**  
   `git checkout -b update/article-name`

3. **Perform updates**  
   - Refresh citations (use `/cite-audit` and `/cite-clean`)
   - Update statistics with recent studies
   - Add new internal links using `siloLinker.ts`
   - Improve voice using current `echo.md`

4. **Run pre-publish checklist** (see `publishing-checklist.md`)

5. **Deploy and monitor** for 2 weeks

---

## Echo.md Feedback Loop (High Engagement Pattern Extraction)

**Trigger:** Any article with time-on-page **≥ 2x site average** AND bounce rate **≤ 30%**

**Process:**

1. Identify the unique phrases or sentence structures in that article.
2. Ask: *"What does this article do that others don't?"*
3. Extract 3–5 specific examples of voice, hooks, or transitions.
4. Add them to `echo.md` under the appropriate section (e.g., "Do Say").

**Example:**
- Article "Why You're Tired After Lunch" had 4:30 average time (site avg 2:10).
- Extracted pattern: opening with a question + short answer.
- Added to `echo.md`:

```markdown
**New pattern (from high-performer):**
> "Feel sluggish at 2 PM? That's not 'afternoon slump.' That's your blood sugar crashing."