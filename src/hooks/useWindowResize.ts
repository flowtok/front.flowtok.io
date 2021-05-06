import { useEffect } from 'react';

export const useWindowResize = (onWindowResize: () => void) => {
  useEffect(() => {
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);
};
