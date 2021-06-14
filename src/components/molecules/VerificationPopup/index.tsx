import { forwardRef, PropsWithChildren } from 'react';
import { PopUp } from '../PopUp';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { ListItem } from '../../atoms/ListItem';
import commonStyles from '../SettingsCards/styles.module.scss';
import classNames from 'classnames';
import { Button } from '../../atoms/Button';
import LoadIcon from 'assets/common/icons/load.svg';
import { TikTokProfile } from '../SignUp/TikTokProfile';
import AvatarMock from '../../../assets/common/images/avatar_mock.png';
import { useMediaQuery } from 'react-responsive';

interface VerificationPopupProps {
  isOpen: boolean;
}

export const VerificationPopup = forwardRef<
  HTMLDivElement,
  PropsWithChildren<VerificationPopupProps>
>(({ isOpen }) => {
  const { t } = useTranslation();
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1440px)' });
  const finalClassName = classNames(
    commonStyles['description'],
    styles['description-list']
  );

  /*will be deleted*/
  const blogger = {
    fullName: 'karinakross',
    shortName: '@karinakross',
    avatar: AvatarMock,
  };

  return (
    <PopUp
      isOpen={isOpen}
      isCross={false}
      closeOnDocumentClick={false}
      title={t('popup-notification.title')}
      size={isDesktopLarge ? 'm' : ''}
      titlePosition={isDesktopLarge ? 'center' : 'left'}
    >
      <div className={styles['verification-container']}>
        <ul className={styles['steps-wrapper']}>
          <li>
            <ListItem value="1" />
            <p className={finalClassName}>
              {t('popup-notification.first-step')}
            </p>
          </li>
          <li>
            <ListItem value="2" />
            <p className={finalClassName}>
              {t('popup-notification.second-step')}
            </p>
          </li>
        </ul>
        <div className={styles['blogger-wrapper']}>
          <TikTokProfile profileData={{ ...blogger }} />
        </div>
        <div className={styles['footer-popup']}>
          <Button preset={'success'}>🤣 💛 🐵 🔥</Button>
          <div className={styles['load-block']}>
            <img src={LoadIcon} alt="" />
          </div>
        </div>
        <Button preset={'light'} className={styles['help-btn']}>
          {t('popup-notification.help-question')}
        </Button>
      </div>
    </PopUp>
  );
});
