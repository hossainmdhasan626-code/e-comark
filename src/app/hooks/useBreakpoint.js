'use client';
import { useState, useEffect } from 'react';

export const useBreakpoint = (width = 768) => {
  const [isTargetReached, setIsTargetReached] = useState(false);

  useEffect(() => {
    const updateTarget = (e) => {
      if (e.matches) {
        setIsTargetReached(true);
      } else {
        setIsTargetReached(false);
      }
    };

    // Media query setup (e.g., max-width: 768px)
    const media = window.matchMedia(`(max-width: ${width}px)`);
    
    // Initial check
    setIsTargetReached(media.matches);

    // Listener for screen resize
    media.addEventListener('change', updateTarget);

    return () => media.removeEventListener('change', updateTarget);
  }, [width]);

  return isTargetReached;
};