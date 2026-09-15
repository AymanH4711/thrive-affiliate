import { Zap } from 'lucide-react';
import ComingSoonCategory from '@/components/supplements/ComingSoonCategory';

// Was showing placeholder Green Tea Extract and Magnesium Glycinate products
// (neither a real Digistore24 offer, placeholder Amazon links, invented
// ratings) — replaced with an honest coming-soon state. Original content
// archived at: src/pages/supplements/_archived/MetabolicWeightCategory.archived.tsx
export default function MetabolicWeightCategory() {
  return (
    <ComingSoonCategory
      categoryId="metabolic-weight"
      name="Metabolic & Weight Support Supplements"
      shortName="Metabolic & Weight"
      description="Evidence-based supplements studied for their potential to support metabolic health, healthy weight management, and sustained energy levels."
      colorClass="blue"
      icon={Zap}
      url="/supplements/metabolic-weight"
    />
  );
}
