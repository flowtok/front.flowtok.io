import { useTranslation } from 'react-i18next';

import {
  WalletCard,
  InProcessCard,
  TotalEarningsCard,
  StatsCard,
  ReferalCard,
} from 'components/molecules/ProfileCards';
import { PageTemplate } from 'components/templates/Page';
import styles from './styles.module.scss';

export default () => {
  const { t } = useTranslation();

  return (
    <PageTemplate
      headerProps={{
        title: t('header.profile.title'),
        withAvatar: true,
        rounded: true,
      }}
      extendedStyleProps={{
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <div className={styles['outter-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <WalletCard balance="15 236.00 ₽" />
          <InProcessCard inProcessAmount="6 703.50 ₽" />
          <TotalEarningsCard totalEarnings="164 520.30 ₽" />
          <StatsCard viewsMedian="2.6М" payOffPerVideo="255 ₽" rating={4.6} />
          <ReferalCard
            refUrl="https://flowtok.com/ref/5f3eba819845264b903e746f"
            refsCount={17}
            totalEarningsFromRefs="890.00 ₽"
          />
        </div>
      </div>
    </PageTemplate>
  );
};
