import React, {
  forwardRef,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { Swiper as SwiperClass } from 'swiper';
import parse from 'html-react-parser';
import {
  useNewCodeTikTokMutation,
  useVerifyTikTokMutation,
} from '@root/types/graphql';
import { useCopyToClipboard } from '@hooks/useCopyToClipboard';
import { notificationVar } from '@graphql/local-state';
import Emoji from '@root/configs/emoji';
import { WithTempClass } from '@root/hocs/WithTempClass';
import { EmptyObject } from '@root/types/helpers';
import { useInterval } from '@hooks/useInterval';
import { ListNumber } from '../../atoms/ListNumber';
import commonStyles from '../SettingsCards/styles.module.scss';
import { TikTokProfile } from '../SignUp/TikTokProfile';
import SwiperButton from '../../atoms/SwiperButton';
import { PopUp } from '../PopUp';
import styles from './styles.module.scss';

export type VerificationPopupProps = EmptyObject;

const CHECK_VERIFICATION_INTERVAL = 10000;

export const useSwipeEmojiButton = () => {
  const { t } = useTranslation();
  const [htmlEmoji, setHtmlEmoji] = useState<string>('');
  const targetButton = useRef<HTMLSpanElement>(null);
  const notifyOnCopy = () =>
    notificationVar({
      type: 'success',
      message: t('notifications.emojis-is-copied'),
    });
  const [copy] = useCopyToClipboard({ freezeTime: 1000, onCopy: notifyOnCopy });

  useEffect(() => {
    const emojiFromBase = localStorage.getItem('emoji');
    if (emojiFromBase) {
      const emojis = Emoji.replace_unified(emojiFromBase);
      setHtmlEmoji(emojis);
    }
  }, []);

  const onClick = () => {
    const emojiFromBase = localStorage.getItem('emoji');
    if (emojiFromBase) {
      copy(emojiFromBase);
    }
  };

  const [fetchNewCode, { loading }] = useNewCodeTikTokMutation({
    onCompleted: (data) => {
      if (data.newCodeTikTok) {
        const emojis = Emoji.replace_unified(data.newCodeTikTok);
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

const useTikTokVerification = () => {
  const [verifyTikTok] = useVerifyTikTokMutation({});

  useInterval(() => {
    // verifyTikTok();
  }, CHECK_VERIFICATION_INTERVAL);
};

export const VerificationPopup = forwardRef<
  HTMLDivElement,
  PropsWithChildren<VerificationPopupProps>
>(() => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const finalClassName = classNames(
    commonStyles['description'],
    styles['description-list']
  );

  useTikTokVerification();

  const { loading, emojis, onSwipe, onClick, ref } = useSwipeEmojiButton();

  return (
    <PopUp
      isOpen={true}
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
          <WithTempClass
            trigger={'onClick'}
            className={'bubbles'}
            duration={750}
            renderTarget={({ className }) => (
              <SwiperButton
                data-testid="swiper-button"
                onSwipe={onSwipe}
                loading={loading}
                onClick={onClick}
                animationClassName={className}
                ref={ref}
              >
                {emojis}
              </SwiperButton>
            )}
          />
        </div>
        <div className={styles['help-btn']}>
          {t('popup-notification.help-question')}
        </div>
      </div>
    </PopUp>
  );
});
