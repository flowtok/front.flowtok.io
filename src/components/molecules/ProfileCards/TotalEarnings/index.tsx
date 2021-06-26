import { useTranslation } from 'react-i18next';

import { Paper } from 'components/atoms/Paper';
import commonStyles from '../styles.module.scss';
import { formatMoney } from '../../../../utils/FormatHelper';

export interface TotalEarningsCardProps {
  totalEarnings: number;
}

export const TotalEarningsCard = ({
  totalEarnings,
}: TotalEarningsCardProps) => {
  const { t } = useTranslation();

  return (
    <Paper>
      <p className={commonStyles['title-secondary']}>
        {t('pages.profile.total-earnings.secondary')}
      </p>
      <p className={commonStyles['value-secondary']}>
        {formatMoney(totalEarnings, '₽')}
      </p>
    </Paper>
  );
};
