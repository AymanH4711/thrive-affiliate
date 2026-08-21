// src/components/TrustSignalPack.tsx
import React from 'react';
import { Microscope, ShieldCheck, Stethoscope, AlertCircle } from 'lucide-react';

interface TrustSignalPackProps {
  showAffiliateDivulge?: boolean;
}

export const TrustSignalPack: React.FC<TrustSignalPackProps> = ({ 
  showAffiliateDivulge = true 
}) => {
  return (
    <div className="my-8">
      {/* Trust Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
          <Microscope className="text-emerald-600 w-8 h-8" />
          <div>
            <span className="block font-bold text-teal-900 text-sm">Science Backed</span>
            <span className="text-xs text-slate-600">Verified by clinical data</span>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
          <ShieldCheck className="text-emerald-600 w-8 h-8" />
          <div>
            <span className="block font-bold text-teal-900 text-sm">Lab Tested</span>
            <span className="text-xs text-slate-600">Purity & Potency Verified</span>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
          <Stethoscope className="text-emerald-600 w-8 h-8" />
          <div>
            <span className="block font-bold text-teal-900 text-sm">Expert Aligned</span>
            <span className="text-xs text-slate-600">Meets health standards</span>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg flex gap-3">
        <AlertCircle className="text-amber-600 w-6 h-6 shrink-0 mt-1" />
        <div className="text-xs text-amber-800 leading-relaxed">
          <strong>Medical Disclaimer:</strong> This content is for educational purposes. 
          Not a substitute for professional medical advice. Always consult your physician 
          before starting any new supplement or changing treatment.
        </div>
      </div>

      {/* Affiliate Disclosure */}
      {showAffiliateDivulge && (
        <div className="mt-4 p-4 bg-slate-100 border-l-4 border-slate-400 rounded-r-lg text-xs text-slate-700">
          <strong>Affiliate Disclosure:</strong> Thrive may earn a commission from purchases 
          made through our links. This helps support our research and content creation.
        </div>
      )}
    </div>
  );
};

export default TrustSignalPack;