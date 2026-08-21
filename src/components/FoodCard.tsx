// src/components/FoodCard.tsx
/**
 * FoodCard Component
 * 
 * Reusable component for displaying individual food items with:
 * - Icon, name, category, GI/GL values
 * - Benefit statement and mechanism explanation
 * - Serving recommendations and practical tips
 * - Color-coded badges for quick scanning
 * - Optional glycemic load meter visualization
 * 
 * Usage:
 * <FoodCard food={foodObject} icon={IconComponent} showGLMeter={true} />
 */

import React, { ReactNode } from 'react';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface Food {
  id: number;
  name: string;
  subtext: string;
  category: string;
  gi: number | string;
  gl: number | string;
  badge: string;
  benefit: string;
  mechanism: string;
  serving: string;
  tips: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface FoodCardProps {
  food: Food;
  icon?: React.ComponentType<{ className?: string }>;
  showGLMeter?: boolean;
  expandable?: boolean;
  onExpand?: (foodId: number) => void;
  isExpanded?: boolean;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Determine GL color based on value
 * Green (0-5): Very low impact
 * Yellow (6-10): Moderate impact
 * Red (11+): Higher impact
 */
const getGLColor = (gl: number | string): string => {
  const glValue = typeof gl === 'string' 
    ? parseFloat(gl.split(' ')[0]) // Handle "4-5 per ½ cup" format
    : gl;
  
  if (isNaN(glValue)) return 'gray'; // Handle "N/A" or invalid values
  if (glValue === 0) return 'emerald';
  if (glValue <= 5) return 'emerald';
  if (glValue <= 10) return 'yellow';
  return 'red';
};

/**
 * Format GL value for display
 * Handles both numeric and string ranges
 */
const formatGLValue = (gl: number | string): string => {
  if (typeof gl === 'string') return gl;
  return gl === 0 ? '0' : String(gl);
};

/**
 * Map GL color to Tailwind classes
 */
const getColorClasses = (color: string): { text: string; bg: string; bar: string } => {
  const colorMap: Record<string, { text: string; bg: string; bar: string }> = {
    emerald: {
      text: 'text-emerald-700',
      bg: 'bg-emerald-100',
      bar: 'bg-emerald-500'
    },
    yellow: {
      text: 'text-yellow-700',
      bg: 'bg-yellow-100',
      bar: 'bg-yellow-500'
    },
    red: {
      text: 'text-red-700',
      bg: 'bg-red-100',
      bar: 'bg-red-500'
    },
    gray: {
      text: 'text-gray-700',
      bg: 'bg-gray-100',
      bar: 'bg-gray-500'
    }
  };
  
  return colorMap[color] || colorMap.gray;
};

/**
 * Get GL impact label
 */
const getGLLabel = (gl: number | string): string => {
  const glValue = typeof gl === 'string' 
    ? parseFloat(gl.split(' ')[0]) 
    : gl;
  
  if (isNaN(glValue)) return 'N/A';
  if (glValue === 0) return '✅ Zero Impact';
  if (glValue <= 5) return '✅ Very Low';
  if (glValue <= 10) return '⚠️ Moderate';
  return '🔴 Higher Impact';
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const FoodCard: React.FC<FoodCardProps> = ({
  food,
  icon: IconComponent = food.icon,
  showGLMeter = false,
  expandable = false,
  onExpand,
  isExpanded = false
}) => {
  const glColor = getGLColor(food.gl);
  const colorClasses = getColorClasses(glColor);
  const glLabel = getGLLabel(food.gl);
  const glValue = formatGLValue(food.gl);

  const handleExpand = () => {
    if (expandable && onExpand) {
      onExpand(food.id);
    }
  };

  return (
    <div
      className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition duration-200 bg-white"
      data-food-card={food.id}
    >
      {/* HEADER: Icon, Name, Badge */}
      <div className="flex items-start gap-3 mb-4">
        {IconComponent && (
          <IconComponent className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
        )}
        
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900">{food.name}</h3>
          <p className="text-sm text-gray-600">{food.subtext}</p>
        </div>

        {/* Badge */}
        <span className="ml-auto bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
          {food.badge}
        </span>
      </div>

      {/* GI/GL VALUES */}
      <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
        <div className="grid grid-cols-3 gap-3 text-sm">
          {/* GI Value */}
          <div>
            <p className="text-gray-600 font-semibold text-xs uppercase">GI</p>
            <p className="text-gray-900 font-bold text-lg">
              {food.gi === 0 ? '0' : String(food.gi)}
            </p>
          </div>

          {/* GL Value */}
          <div>
            <p className="text-gray-600 font-semibold text-xs uppercase">GL</p>
            <p className="text-gray-900 font-bold text-lg">
              {glValue === 'N/A' ? 'N/A' : glValue}
            </p>
          </div>

          {/* Category */}
          <div>
            <p className="text-gray-600 font-semibold text-xs uppercase">Category</p>
            <p className="text-gray-900 text-xs font-medium leading-tight">
              {food.category}
            </p>
          </div>
        </div>

        {/* Optional GL Meter (Visual Representation) */}
        {showGLMeter && food.gl !== 'N/A' && (
          <div className="mt-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-gray-700">Impact</span>
              <span className={`text-xs font-bold ${colorClasses.text}`}>
                {glLabel}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${colorClasses.bar} transition-all duration-300`}
                style={{
                  width: `${
                    typeof food.gl === 'string'
                      ? Math.min((parseFloat(food.gl) / 15) * 100, 100)
                      : Math.min((food.gl / 15) * 100, 100)
                  }%`
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* CONTENT SECTION */}
      <div className="space-y-3">
        {/* Benefit */}
        <div>
          <p className="text-gray-700 mb-1">
            <strong>Benefit:</strong> {food.benefit}
          </p>
        </div>

        {/* Mechanism */}
        <div>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Science:</strong> {food.mechanism}
          </p>
        </div>

        {/* Serving */}
        <div>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Serving:</strong> {food.serving}
          </p>
        </div>

        {/* Tip */}
        <div>
          <p className="text-gray-700 text-sm">
            <strong>💡 Tip:</strong> {food.tips}
          </p>
        </div>
      </div>

      {/* Optional Expand Button */}
      {expandable && (
        <button
          onClick={handleExpand}
          className="mt-4 pt-4 border-t border-gray-200 w-full text-center text-emerald-600 hover:text-emerald-700 text-sm font-semibold transition"
          aria-expanded={isExpanded}
        >
          {isExpanded ? '▼ Show Less' : '▶ Learn More'}
        </button>
      )}
    </div>
  );
};

export default FoodCard;

// ============================================================================
// USAGE EXAMPLES
// ============================================================================

/*

// EXAMPLE 1: Simple Usage
import { FoodCard } from '@/components/FoodCard';

<FoodCard food={foodObject} icon={LeafIcon} />

// EXAMPLE 2: With GL Meter
<FoodCard 
  food={foodObject} 
  icon={LeafIcon} 
  showGLMeter={true} 
/>

// EXAMPLE 3: In a Grid
<div className="grid md:grid-cols-2 gap-6">
  {bestFoods.map((food) => (
    <FoodCard 
      key={food.id} 
      food={food} 
      showGLMeter={true}
    />
  ))}
</div>

// EXAMPLE 4: With Expandable Details
<FoodCard 
  food={foodObject} 
  icon={IconComponent}
  showGLMeter={true}
  expandable={true}
  onExpand={(foodId) => console.log(`Expanded food ${foodId}`)}
  isExpanded={expandedFoodId === foodObject.id}
/>

*/