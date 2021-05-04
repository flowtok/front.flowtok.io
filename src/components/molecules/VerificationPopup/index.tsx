import { forwardRef, PropsWithChildren } from 'react';
import { PopUp } from '../PopUp';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { ListItem } from '../../atoms/ListItem';
import commonStyles from '../SettingsCards/styles.module.scss';
import classNames from 'classnames';
import { BloggerInfo } from '../BloggerInfo';
import { Button } from '../../atoms/Button';
import LoadIcon from 'assets/common/icons/load.svg';

interface VerificationPopupProps {
  isOpen: boolean;
}

export const VerificationPopup = forwardRef<
  HTMLDivElement,
  PropsWithChildren<VerificationPopupProps>
>(({ isOpen }) => {
  const { t } = useTranslation();

  const finalClassName = classNames(
    commonStyles['description'],
    styles['description-list']
  );

  /*will be delete*/
  const blogger = {
    username: 'karinakross',
    tagname: '@karinakross',
  };

  return (
    <PopUp
      isOpen={isOpen}
      isClose={false}
      title={t('popup-notification.title')}
    >
      <ul className={styles['steps-wrapper']}>
        <li>
          <ListItem value="1" />
          <p className={finalClassName}>{t('popup-notification.first-step')}</p>
        </li>
        <li>
          <ListItem value="2" />
          <p className={finalClassName}>
            {t('popup-notification.second-step')}
          </p>
        </li>
      </ul>
      <div className={styles['blogger-wrapper']}>
        <BloggerInfo
          blogger={{ ...blogger }}
          editText={t('popup-notification.edit')}
        />
      </div>
      <div className={styles['footer-popup']}>
        <Button preset={'success'}>🤣 💛 🐵 🔥</Button>
        <div className={styles['load-block']}>
          <img src={LoadIcon} />
        </div>
      </div>
      <Button preset={'light'} className={styles['help-btn']}>
        {t('popup-notification.help-question')}
      </Button>
    </PopUp>
  );
});
