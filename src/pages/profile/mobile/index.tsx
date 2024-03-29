import { useTranslation } from 'react-i18next';

import {
  InProcessCard,
  ReferralCard,
  StatsCard,
  TotalEarningsCard,
  WalletCard,
} from 'components/molecules/ProfileCards';
import { PageTemplate } from 'components/templates/Page';
import React, { useMemo } from 'react';
import { computeAdaptiveValue } from '@utils/mixins/mixins';
import { useWindowResize } from '@hooks/useWindowResize';
import { GetBloggerProfileDataQuery } from '@root/types/graphql';
import styles from './styles.module.scss';

export default ({ me }: GetBloggerProfileDataQuery) => {
  const { t } = useTranslation();
  const [width, setWidth] = React.useState(window.innerWidth);

  const {
    balance,
    refCount,
    refEarning,
    refLink,
    heldMoney,
    historyPayment = [],
    userImage,
  } = { ...me };

  const onWindowResize = (width: number) => {
    setWidth(width);
  };

  useWindowResize(onWindowResize);

  const extendedStyleProps = useMemo(() => {
    return {
      paddingTop: computeAdaptiveValue({
        value: 10,
        container: 600,
        minContainer: 600,
        windowWidth: width,
      }),
      paddingBottom: computeAdaptiveValue({
        value: 10,
        container: 600,
        minContainer: 600,
        windowWidth: width,
      }),
    };
  }, [width]);

  return (
    <PageTemplate
      headerProps={{
        title: t('header.profile.title'),
        avatar: userImage,
        rounded: true,
      }}
      extendedStyleProps={extendedStyleProps}
      isNavbar={true}
    >
      <div className={styles['outter-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <WalletCard balance={balance} history={historyPayment ?? []} />
          <InProcessCard inProcessAmount={heldMoney} />
          <TotalEarningsCard totalEarnings={10} />
          <StatsCard viewsMedian={'3'} payOffPerVideo={'4'} rating={3} />
          <ReferralCard
            refUrl={refLink}
            refsCount={refCount}
            totalEarningsFromRefs={refEarning}
          />
        </div>
      </div>
    </PageTemplate>
  );
};
