import {
  DetailedHTMLProps,
  HTMLAttributes,
  forwardRef,
  PropsWithChildren,
} from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export type PaperProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'ref'
>;

export const Paper = forwardRef<HTMLDivElement, PropsWithChildren<PaperProps>>(
  ({ children, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={classNames(styles['paper-wrapper'], className)}
      {...rest}
    >
      {children}
    </div>
  )
);
