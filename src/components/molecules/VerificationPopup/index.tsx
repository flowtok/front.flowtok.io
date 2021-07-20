import { forwardRef, PropsWithChildren, useEffect } from 'react';
import { PopUp } from '../PopUp';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { ListItem } from '../../atoms/ListItem';
import commonStyles from '../SettingsCards/styles.module.scss';
import classNames from 'classnames';
import { Button } from '../../atoms/Button';
import { TikTokProfile } from '../SignUp/TikTokProfile';
import AvatarMock from '../../../assets/common/images/avatar_mock.png';
import { useMediaQuery } from 'react-responsive';
import { EmojiButton } from '../../atoms/EmojiButton';
import { useVerifyTikTokMutation } from '../../../types/graphql';

interface VerificationPopupProps {
  isVerified: boolean;
}

const CHECK_VERIFICATION_INTERVAL = 60000;

const useEnhancer = (isVerified: boolean) => {
  // const [verifyTikTok] = useMutation<>(VERIFY_TIK_TOK, {
  //   onCompleted: (data) => {},
  //   onError: (error) => {
  //     console.log(error.message);
  //   },
  // });

  const [verifyTikTok] = useVerifyTikTokMutation({});

  useEffect(() => {
    if (!isVerified) {
      const interval = setInterval(() => {
        verifyTikTok();
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

  return (
    <PopUp
      isOpen={isVerified}
      isCross={false}
      closeOnDocumentClick={false}
      title={t('popup-notification.title')}
      size={isDesktop ? 'sm' : ''}
      titlePosition={isDesktop ? 'center' : 'left'}
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
          <TikTokProfile setTikTokIsFound={() => console.log('')} />
        </div>
        <div className={styles['footer-popup']}>
          <EmojiButton />
        </div>
        <Button preset={'light'} className={styles['help-btn']}>
          c{t('popup-notification.help-question')}
        </Button>
      </div>
    </PopUp>
  );
});
