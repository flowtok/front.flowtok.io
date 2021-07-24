import { forwardRef, PropsWithChildren, useEffect } from 'react';
import { PopUp } from '../PopUp';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { ListNumber } from '../../atoms/ListNumber';
import commonStyles from '../SettingsCards/styles.module.scss';
import classNames from 'classnames';
import { TikTokProfile } from '../SignUp/TikTokProfile';
import { useMediaQuery } from 'react-responsive';
import { EmojiButton } from '../../atoms/EmojiButton';
import { useVerifyTikTokMutation } from '../../../types/graphql';

interface VerificationPopupProps {
  isVerified: boolean;
}

const CHECK_VERIFICATION_INTERVAL = 10000;

const useEnhancer = (isVerified: boolean) => {
  const [verifyTikTok] = useVerifyTikTokMutation({});

  useEffect(() => {
    if (!isVerified) {
      const interval = setInterval(() => {
        // verifyTikTok();
      }, CHECK_VERIFICATION_INTERVAL);
      return () => clearInterval(interval);
    }
  }, []);
};

export const VerificationPopup = forwardRef<
  HTMLDivElement,
  PropsWithChildren<VerificationPopupProps>
>(({ isVerified }) => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const finalClassName = classNames(
    commonStyles['description'],
    styles['description-list']
  );

  useEnhancer(isVerified);

  return (
    <PopUp
      isOpen={!isVerified}
      isCross={false}
      closeOnDocumentClick={false}
      title={t('popup-notification.title')}
      size={isDesktop ? 'sm' : ''}
    >
      <div className={styles['verification-container']}>
        <ul className={styles['steps-wrapper']}>
          <li>
            <ListNumber value="1" />
            <p className={finalClassName}>
              {t('popup-notification.first-step')}
            </p>
          </li>
          <li>
            <ListNumber value="2" />
            <p className={finalClassName}>
              {t('popup-notification.second-step')}
            </p>
          </li>
        </ul>
        <div className={styles['blogger-wrapper']}>
          <TikTokProfile />
        </div>
        <div className={styles['footer-popup']}>
          <EmojiButton />
        </div>
        <div className={styles['help-btn']}>
          {t('popup-notification.help-question')}
        </div>
      </div>
    </PopUp>
  );
});
