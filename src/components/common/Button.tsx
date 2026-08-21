// src/components/common/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      onClick,
      href,
      target,
      rel,
      className = '',
      variant = 'primary',
      size = 'md',
      disabled = false,
      type = 'button',
    },
    ref
  ) => {
    const baseStyles = 'font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer';

    const variants = {
      primary: 'bg-emerald-600 text-white hover:bg-emerald-700 disabled:bg-gray-400',
      secondary: 'bg-teal-600 text-white hover:bg-teal-700 disabled:bg-gray-400',
      outline: 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 disabled:border-gray-400 disabled:text-gray-400',
      ghost: 'text-emerald-600 hover:bg-emerald-50 disabled:text-gray-400',
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={combinedClassName}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
