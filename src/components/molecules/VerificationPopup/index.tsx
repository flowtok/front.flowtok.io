import React, {
  forwardRef,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import { PopUp } from '../PopUp';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { ListNumber } from '../../atoms/ListNumber';
import commonStyles from '../SettingsCards/styles.module.scss';
import classNames from 'classnames';
import { TikTokProfile } from '../SignUp/TikTokProfile';
import { useMediaQuery } from 'react-responsive';
import { SwiperButton } from '../../atoms/EmojiButton';
import {
  useNewCodeTikTokMutation,
  useVerifyTikTokMutation,
} from '../../../types/graphql';
import { useAnimationClass } from '../../../hooks/useAnimationClass';
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard';
import emoji from '../../../configs/emoji';
import { notificationVar } from '../../../graphql/local-state';
import { Swiper as SwiperClass } from 'swiper';
import parse from 'html-react-parser';

type VerificationPopupPropsT = {
  isVerified: boolean;
};

const CHECK_VERIFICATION_INTERVAL = 10000;

const useSwipeEmojiButton = () => {
  const [htmlEmoji, setHtmlEmoji] = useState<string>('');
  const targetButton = useRef<HTMLSpanElement>(null);
  const animateButton = useAnimationClass(targetButton, 'bubbles', 750);
  const [copy] = useCopyToClipboard(1000);

  useEffect(() => {
    const emojiFromBase = localStorage.getItem('emoji');
    if (emojiFromBase) {
      const emojis = emoji.replace_unified(emojiFromBase);
      setHtmlEmoji(emojis);
    }
  }, []);

  const onClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    animateButton(e);
    notificationVar({
      type: 'success',
      message: 'Смайлики скопированы!',
    });
    const emojiFromBase = localStorage.getItem('emoji');
    if (emojiFromBase) {
      copy(emojiFromBase);
    }
  };

  const [fetchNewCode, { loading }] = useNewCodeTikTokMutation({
    onCompleted: (data) => {
      if (data.newCodeTikTok) {
        const emojis = emoji.replace_unified(data.newCodeTikTok);
        setHtmlEmoji(emojis);
        localStorage.setItem('emoji', data.newCodeTikTok);
      }
    },
  });

  const onSwipe = async (swiperCore: SwiperClass) => {
    const { activeIndex, previousIndex, slidePrev } = swiperCore;
    if (previousIndex < activeIndex) {
      await fetchNewCode();
      slidePrev.bind(swiperCore)();
    }
  };
  return {
    onSwipe,
    onClick,
    loading,
    emojis: parse(htmlEmoji),
    ref: targetButton,
  };
};

const useTikTokVerification = (isVerified: boolean) => {
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
  PropsWithChildren<VerificationPopupPropsT>
>(({ isVerified }) => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const finalClassName = classNames(
    commonStyles['description'],
    styles['description-list']
  );

  useTikTokVerification(isVerified);
  const { loading, emojis, onSwipe, onClick, ref } = useSwipeEmojiButton();

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
          <SwiperButton
            onSwipe={onSwipe}
            loading={loading}
            onClick={onClick}
            ref={ref}
          >
            {emojis}
          </SwiperButton>
        </div>
        <div className={styles['help-btn']}>
          {t('popup-notification.help-question')}
        </div>
      </div>
    </PopUp>
  );
});
