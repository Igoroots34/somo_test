import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Style variant for the button. Primary buttons are used for main
   * actions, secondary for neutral actions and destructive for actions
   * that have negative consequences (e.g. delete).
   */
  variant?: 'primary' | 'secondary' | 'destructive';
}

/**
 * A simple button component that applies Tailwind classes based on the
 * chosen variant. This file is a stand‑in for shadcn/ui's button
 * component and can be extended further to support sizes, icons,
 * loading states, etc.
 */
export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, ...props }) => {
  const base =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';
  const variants: Record<string, string> = {
    primary: 'bg-cp-primary text-black hover:bg-cp-primary-600 focus:ring-cp-primary',
    secondary: 'bg-white/10 text-white hover:bg-white/20 focus:ring-white/30',
    destructive: 'bg-rose-600 text-white hover:bg-rose-500 focus:ring-rose-600'
  };
  return (
    <button className={clsx(base, variants[variant], className)} {...props} />
  );
};