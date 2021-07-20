import { useTranslation } from 'react-i18next';

import {
  InProcessCard,
  ReferalCard,
  StatsCard,
  TotalEarningsCard,
  WalletCard,
} from 'components/molecules/ProfileCards';
import { PageTemplate } from 'components/templates/Page';
import styles from './styles.module.scss';
import React, { useMemo } from 'react';
import { adaptiveValue } from '../../../utils/mixins';
import { useWindowResize } from '../../../hooks/useWindowResize';
import { GetBloggerProfileDataQuery } from '../../../types/graphql';

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

  const onWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useWindowResize(onWindowResize);

  const extendedStyleProps = useMemo(() => {
    return {
      paddingTop: adaptiveValue(10, 1024, 600, width),
      paddingBottom: adaptiveValue(10, 1024, 600, width),
      background: 'red',
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
          <ReferalCard
            refUrl={refLink}
            refsCount={refCount}
            totalEarningsFromRefs={refEarning}
          />
        </div>
      </div>
    </PageTemplate>
  );
};
