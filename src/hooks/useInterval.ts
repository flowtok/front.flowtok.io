import { useEffect, useRef } from 'react';
import { Callback } from '@root/types/helpers';

/**
 * Хук от Дена Абрамова, который делает setInterval декларативным, что более привычно для React
 * Ссылка на источник https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 *
 * @param callback функция, которая будет вызываться
 * @param delay интервал, через который будет вызываться функция
 */

export function useInterval(callback: Callback, delay: number | null) {
  const savedCallback = useRef<Callback | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
