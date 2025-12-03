import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'standard' | 'gradient';
  className?: string;
  hover?: boolean;
}

const Card = ({ children, variant = 'standard', className = '', hover = true }: CardProps) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-300';
  
  const variantClasses = {
    standard: 'bg-white shadow-md',
    gradient: 'bg-card-gradient border border-primary-200',
  };

  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
