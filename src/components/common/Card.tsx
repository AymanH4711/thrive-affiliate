// src/components/common/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'outlined';
  onClick?: () => void;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', variant = 'default', onClick }, ref) => {
    const baseStyles = 'rounded-lg';
    
    const variants = {
      default: 'bg-white border border-gray-200 shadow-sm',
      gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200',
      outlined: 'bg-white border-2 border-emerald-500',
    };

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
