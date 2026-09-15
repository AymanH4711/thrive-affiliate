import { Activity } from 'lucide-react';
import ComingSoonCategory from '@/components/supplements/ComingSoonCategory';

// Was showing a placeholder Alpha-Lipoic Acid product (not a real Digistore24
// offer, placeholder Amazon link, invented rating) — replaced with an honest
// coming-soon state. Original content archived at:
// src/pages/supplements/_archived/InsulinSensitivityCategory.archived.tsx
export default function InsulinSensitivityCategory() {
  return (
    <ComingSoonCategory
      categoryId="insulin-sensitivity"
      name="Insulin Sensitivity Supplements"
      shortName="Insulin Sensitivity"
      description="Specialized nutrients designed to improve cellular insulin response and metabolic efficiency."
      colorClass="purple"
      icon={Activity}
      url="/supplements/insulin-sensitivity"
    />
  );
}
