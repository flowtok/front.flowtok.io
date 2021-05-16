import {
  AccountCard,
  NotificationsCard,
  SupportCard,
  WithdrawalCard,
} from 'components/molecules/SettingsCards';
import styles from './styles.module.scss';
import { PageTemplateDesktop } from '../../../components/templates/PageDesktop';

export default () => {
  return (
    <PageTemplateDesktop>
      <div className={styles['outter-wrapper']}>
        <div>
          <AccountCard
            age={26}
            country="Россия"
            name="Карина"
            tagname="@karinakross"
            username="karinakrosse"
          />
          <NotificationsCard />
        </div>
        <div>
          <WithdrawalCard />
          <SupportCard />
        </div>
      </div>
    </PageTemplateDesktop>
  );
};
