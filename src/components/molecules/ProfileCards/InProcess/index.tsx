import { useTranslation } from 'react-i18next';

import { Paper } from 'components/atoms/Paper';
import commonStyles from '../styles.module.scss';

export interface InProcessCardProps {
  inProcessAmount: string;
}

export const InProcessCard = ({ inProcessAmount }: InProcessCardProps) => {
  const { t } = useTranslation();

  return (
    <Paper>
      <p className={commonStyles['title-secondary']}>
        {t('pages.profile.in-process.secondary')}
      </p>
      <p className={commonStyles['value-secondary']}>{inProcessAmount}</p>
    </Paper>
  );
};
