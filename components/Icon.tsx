import React from 'react';

interface IconProps {
  icon: string;
  className?: string;
  width?: string | number;
}

export default function Icon({ icon, className, width }: IconProps) {
  // We use React.createElement and cast to any to bypass the JSX IntrinsicElements type check
  // which is causing persistent issues during the production build.
  return React.createElement('iconify-icon', {
    icon,
    class: className, // iconify-icon uses 'class' instead of 'className' for its internal shadow DOM
    width,
  } as any);
}
