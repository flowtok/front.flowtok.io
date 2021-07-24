import { useEffect } from 'react';

export const useWindowResize = (onWindowResize: (width: number) => void) => {
  useEffect(() => {
    const listener = () => onWindowResize(window.innerWidth);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);
};
