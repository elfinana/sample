import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  variant?: 'clear' | 'fill' | 'border';
  'aria-label': string;
}

export default function IconButton({
  src,
  variant = 'clear',
  'aria-label': ariaLabel,
  className = '',
  ...props
}: IconButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center w-10 h-10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex-shrink-0';
  
  const variantStyles = {
    clear: 'bg-transparent hover:bg-greyOpacity-200 active:bg-greyOpacity-300 rounded-lg',
    fill: 'bg-grey-200 hover:bg-grey-300 active:bg-grey-400 rounded-lg',
    border: 'bg-transparent border border-grey-300 hover:bg-greyOpacity-100 active:bg-greyOpacity-200 rounded-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      <img src={src} alt={ariaLabel} className="w-6 h-6" />
    </button>
  );
}

