import styles from './styles.module.scss';
import commonStyles from '../../../SettingsCards/styles.module.scss';
import classNames from 'classnames';
import { HistoryItemType, HistoryPayment } from '../../../../../models/models';

export interface HistoryItemProps {
  item: HistoryPayment;
}

export const HistoryItemComponent = ({ item }: HistoryItemProps) => {
  const { value, date, type } = item;
  const balanceType = type === HistoryItemType.Inc ? '+' : '-';
  const color = type === HistoryItemType.Inc ? '#24C054' : '#ED0000';

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
