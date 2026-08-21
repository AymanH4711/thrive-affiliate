// src/components/ProductComparisonDynamic.tsx
import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { Check, Star, ExternalLink } from 'lucide-react';

interface ProductComparisonDynamicProps {
  pillarId: string;
  maxProducts?: number;
  highlightTopPick?: boolean;
}

export const ProductComparisonDynamic: React.FC<ProductComparisonDynamicProps> = ({
  pillarId,
  maxProducts = 3,
  highlightTopPick = true
}) => {
  const products = useProducts(pillarId)?.slice(0, maxProducts) || [];

  if (products.length === 0) return null;

  return (
    <div className="overflow-x-auto my-12 rounded-xl shadow-2xl border border-slate-200">
      <table className="w-full text-left bg-white border-collapse">
        <thead>
          <tr className="bg-teal-900 text-white">
            <th className="p-5 text-sm uppercase tracking-wider">Product</th>
            <th className="p-5 text-sm uppercase tracking-wider">Rating</th>
            <th className="p-5 text-sm uppercase tracking-wider">Best For</th>
            <th className="p-5 text-sm uppercase tracking-wider">Action</th>
           </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {products.map((product, idx) => {
            const isTopPick = highlightTopPick && idx === 0;
            return (
              <tr
                key={product.id}
                className={`${
                  isTopPick ? 'bg-emerald-50' : 'hover:bg-slate-50'
                } transition-colors`}
              >
                <td className="p-5 font-bold text-slate-900">
                  {isTopPick && (
                    <span className="text-[10px] text-emerald-600 uppercase font-black mb-1 flex items-center gap-1">
                      ⭐ Thrive Top Pick
                    </span>
                  )}
                  {product.name}
                </td>
                <td className="p-5">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={16} fill="currentColor" />
                    <span className="font-bold text-slate-700">
                      {product.rating}
                    </span>
                  </div>
                </td>
                <td className="p-5 text-slate-600 italic">
                  {/* Derive from product category */}
                  {pillarId.replace("-", " ")}
                </td>
                <td className="p-5">
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                      isTopPick
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    Check Price <ExternalLink size={14} />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparisonDynamic;