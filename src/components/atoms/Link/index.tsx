import styles from './styles.module.scss';

export type DividerDirectionUnionType = 'vertical' | 'horizontal';

export interface LinkProps {
  url: string;
  value: string;
}

export const Link = ({ url, value }: LinkProps) => (
  <a className={styles['link']} href={url}>
    {value}
  </a>
);
