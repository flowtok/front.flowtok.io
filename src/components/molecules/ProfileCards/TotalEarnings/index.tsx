import { useTranslation } from 'react-i18next';

import { Paper } from 'components/atoms/Paper';
import commonStyles from '../styles.module.scss';

export interface TotalEarningsCardProps {
  totalEarnings: string;
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
      <p className={commonStyles['value-secondary']}>{totalEarnings}</p>
    </Paper>
  );
};
