import React, { RefObject, useLayoutEffect, useState } from 'react';

export function useAnimationClass(
  ref: RefObject<HTMLElement>,
  className: string,
  duration: number
) {
  const [isAnimatedNow, setIsAnimatedNow] = useState<boolean>(false);

  useLayoutEffect(() => {
    const elem = ref.current;
    if (elem && isAnimatedNow) {
      elem.classList.add(className);
      const timer = setTimeout(() => {
        setIsAnimatedNow(false);
        elem.classList.remove(className);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimatedNow]);

  return (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (!isAnimatedNow) {
      setIsAnimatedNow(true);
    }
  };
}
