import styles from './styles.module.scss';
import commonStyles from '../../../SettingsCards/styles.module.scss';
import classNames from 'classnames';

export enum BalanceType {
  inc = 'inc',
  dec = 'dec',
}

export interface HistoryItem {
  value: string;
  date: string;
  type: BalanceType;
}

export interface HistoryItemProps {
  item: HistoryItem;
}

export const HistoryItem = ({ item }: HistoryItemProps) => {
  const { value, date, type } = item;
  const balanceType = type === BalanceType.inc ? '+' : '-';
  const color = type === BalanceType.inc ? '#24C054' : '#ED0000';

  const finalClassName = classNames(
    commonStyles['description'],
    styles['description-date']
  );

  return (
    <div className={styles['history-item']}>
      <p className={styles['value']} style={{ color }}>
        {balanceType} {value} ₽
      </p>
      <p className={finalClassName}>{date}</p>
    </div>
  );
};
