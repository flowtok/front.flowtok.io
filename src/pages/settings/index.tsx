import { useTranslation } from 'react-i18next';

import {
  AccountCard,
  NotificationsCard,
} from 'components/molecules/SettingsCards';
import { PageTemplate } from 'components/templates/Page';
import styles from './styles.module.scss';

export default () => {
  const { t } = useTranslation();

  return (
    <PageTemplate
      headerProps={{
        title: t('header.settings.title'),
        rounded: true,
      }}
      extendedStyleProps={{
        paddingTop: 10,
      }}
    >
      <div className={styles['outter-wrapper']}>
        <AccountCard
          age={26}
          country="Россия"
          name="Карина"
          tagname="@karinakross"
          username="karinakross"
        />
        <NotificationsCard />
      </div>
    </PageTemplate>
  );
};
