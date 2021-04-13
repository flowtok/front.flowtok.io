import { useTranslation } from 'react-i18next';

import { Paper } from 'components/atoms/Paper';
import { GradientButton } from 'components/atoms/GradientButton';
import commonStyles from '../styles.module.scss';
import styles from './styles.module.scss';

export interface WalletCardProps {
  balance: string;
}

export const WalletCard = ({ balance }: WalletCardProps) => {
  const { t } = useTranslation();

  return (
    <Paper className={styles.wallet}>
      <h3 className={commonStyles['title-primary']}>
        {t('pages.profile.wallet.primary')}
      </h3>
      <p className={commonStyles['title-secondary']}>
        {t('pages.profile.wallet.secondary')}
      </p>
      <p className={commonStyles['value-primary']}>{balance}</p>
      <GradientButton className={styles['pay-off-button']}>
        {t('pages.profile.wallet.pay-off-button-text')}
      </GradientButton>
    </Paper>
  );
};
