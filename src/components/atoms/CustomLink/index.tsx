import styles from './styles.module.scss';
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

export type DividerDirectionUnionType = 'vertical' | 'horizontal';

type CustomLinkPropsT = PropsWithChildren<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>;

export const CustomLink = ({
  children,
  className = '',
  ...rest
}: CustomLinkPropsT) => (
  <a className={`${styles['link']} ${className}`} {...rest}>
    {children}
  </a>
);
