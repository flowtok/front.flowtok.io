import styles from './styles.module.scss';

export type DividerDirectionUnionType = 'vertical' | 'horizontal';

export interface LinkProps {
  url: string;
  value: string;
  iSTargetBlank?: boolean;
}

export const CustomLink = ({ url, value, iSTargetBlank }: LinkProps) => (
  <a
    className={styles['link']}
    href={url}
    target={iSTargetBlank ? '_blank' : ''}
  >
    {value}
  </a>
);
