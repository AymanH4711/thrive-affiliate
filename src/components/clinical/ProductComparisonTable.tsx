// src/components/conversion/ProductComparisonTable.tsx
//
// Reusable head-to-head comparison table — generalizes the inline table
// pattern used in comparison articles (e.g. BerberineVsMetformin.tsx's
// "Efficacy: Head-to-Head Comparison" table) into a typed, reusable component
// so every comparison article renders it consistently instead of hand-rolling
// table markup per page.
//
// Usage:
//   import { ProductComparisonTable } from '@/components/conversion/ProductComparisonTable';
//   <ProductComparisonTable
//     items={['Metformin', 'Berberine']}
//     rows={[
//       { metric: 'Fasting Glucose Reduction', values: ['–30–40 mg/dL', '–20–30 mg/dL'] },
//       { metric: 'Time to Effect', values: ['2–4 weeks', '2–8 weeks'], highlight: 0 },
//     ]}
//     caption="Based on 2024–2025 clinical trial data"
//   />

export interface ComparisonRow {
  /** Row label, e.g. "Fasting Glucose Reduction" */
  metric: string;
  /** One value per entry in `items`, same order/length */
  values: string[];
  /** Index into `items`/`values` to visually highlight as the stronger option (optional) */
  highlight?: number;
}

export interface ProductComparisonTableProps {
  /** Column headers — the things being compared, e.g. ['Metformin', 'Berberine'] */
  items: string[];
  rows: ComparisonRow[];
  /** Optional caption shown below the table (e.g. data source/date range) */
  caption?: string;
  /** Optional heading above the table. Omit to render just the table. */
  heading?: string;
}

export function ProductComparisonTable({
  items,
  rows,
  caption,
  heading,
}: ProductComparisonTableProps) {
  if (items.length === 0 || rows.length === 0) return null;

  return (
    <div className="mb-8">
      {heading && (
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{heading}</h3>
      )}
      <div className="overflow-x-auto rounded-xl border-2 border-gray-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left font-bold text-gray-700 border-b-2 border-gray-300">
                Metric
              </th>
              {items.map((item, i) => (
                <th
                  key={i}
                  className="p-3 text-left font-bold text-gray-700 border-b-2 border-gray-300"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={rowIdx % 2 === 1 ? 'bg-gray-50' : undefined}
              >
                <td className="p-3 border-t border-gray-200 font-semibold text-gray-800">
                  {row.metric}
                </td>
                {row.values.map((value, colIdx) => (
                  <td
                    key={colIdx}
                    className={`p-3 border-t border-gray-200 ${
                      row.highlight === colIdx
                        ? 'bg-emerald-50 font-semibold text-emerald-800'
                        : 'text-gray-700'
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <p className="mt-2 text-xs text-gray-500 italic">{caption}</p>
      )}
    </div>
  );
}

export default ProductComparisonTable;
