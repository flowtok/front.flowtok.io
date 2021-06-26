import { useTranslation } from 'react-i18next';

import { Paper } from 'components/atoms/Paper';
import commonStyles from '../styles.module.scss';
import { formatMoney } from '../../../../utils/FormatHelper';

export interface InProcessCardProps {
  inProcessAmount: number;
}

export const InProcessCard = ({ inProcessAmount }: InProcessCardProps) => {
  const { t } = useTranslation();

  return (
    <Paper>
      <p className={commonStyles['title-secondary']}>
        {t('pages.profile.in-process.secondary')}
      </p>
      <p className={commonStyles['value-secondary']}>
        {formatMoney(inProcessAmount, '₽')}
      </p>
    </Paper>
  );
};
