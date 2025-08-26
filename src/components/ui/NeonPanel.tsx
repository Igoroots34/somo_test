import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export interface NeonPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, the panel will pass its styles down to its child instead of
   * rendering a new div. This is useful when you want to apply the neon
   * styling to an existing element (e.g. a card from shadcn/ui).
   */
  asChild?: boolean;
}

/**
 * NeonPanel is a decorative container with a rounded border and subtle
 * neon glow. It uses CSS custom properties defined in the Tailwind
 * configuration to control its colours. The panel is agnostic of its
 * contents and can wrap any children.
 */
export const NeonPanel = React.forwardRef<HTMLDivElement, NeonPanelProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        {...props}
        className={clsx(
          'relative rounded-2xl border border-cp-primary/50 bg-white/5 backdrop-blur-sm',
          'shadow-[0_0_20px_rgba(246,224,94,0.15)]',
          'before:absolute before:inset-0 before:-z-10 before:rounded-2xl',
          'before:bg-[radial-gradient(60%_50%_at_50%_0%,rgba(246,224,94,0.12)_0%,rgba(0,0,0,0)_70%)]',
          className
        )}
      />
    );
  }
);

NeonPanel.displayName = 'NeonPanel';