import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type WithTempClassProps = {
  trigger: string;
  className: string;
  duration: number;
  renderTarget: (props: { className: string }) => ReactNode;
};

/**
 * Компонент добаляет функционал добавления временного класса по триггеру.
 *
 * @param className класс, который надо добавить
 * @param trigger событие, на которое будет добавляться класс (onClick, onBlur, ...)
 * @param duration время, на которое добавляется класс в ms
 * @param renderTarget функция, котороя рендерит компонент, к которому будем добавлять класс
 */

export const WithTempClass: FC<WithTempClassProps> = ({
  className,
  trigger,
  duration,
  renderTarget,
}) => {
  const [classNameShouldBeAdded, setClassNameShouldBeAdded] = useState<boolean>(
    false
  );

  const getClassName = useCallback(
    () => (classNameShouldBeAdded ? className : ''),
    [classNameShouldBeAdded, className]
  );

  useEffect(() => {
    if (classNameShouldBeAdded) {
      const timer = setTimeout(() => {
        setClassNameShouldBeAdded(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  });

  const props = useMemo(
    () => ({
      [trigger]: () => setClassNameShouldBeAdded(true),
    }),
    [trigger]
  );

  return (
    <div {...props} data-testid={'trigger-box'}>
      {renderTarget({ className: getClassName() })}
    </div>
  );
};
