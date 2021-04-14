import classNames from 'classnames';

import styles from './styles.module.scss';

export interface TabsProps {
  list: string[];
  selected: number;
  onSelect: (index: number) => void;
}

export const Tabs = ({ list, selected, onSelect }: TabsProps) => {
  return (
    <div className={styles['tabs-wrapper']}>
      <div
        className={styles['tabs-inner-wrapper']}
        style={
          {
            '--index': selected,
            '--count': list.length,
          } as any
        }
      >
        {list.map((item, index) => (
          <button
            key={index}
            className={classNames(styles['tab'], `tab-${index}`, {
              [styles['tab_selected']]: index === selected,
            })}
            onClick={() => onSelect(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
