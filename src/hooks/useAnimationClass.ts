import React, { RefObject, useLayoutEffect, useState } from 'react';

/**
 * Хук для добавления css классов для анимации
 *
 * @param ref ссылка на элемент, который анимируем
 * @param className класс, который нало добавить
 * @param duration время, через которое надо удалить класс
 *
 * @return  animate функция для запуска анимации (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
 */

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
