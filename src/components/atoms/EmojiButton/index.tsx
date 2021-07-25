import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import './styles.css';
import styles from './styles.module.scss';
import emoji from '../../../configs/emoji';
import parse from 'html-react-parser';
import { useAnimationClass } from '../../../hooks/useAnimationClass';
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard';
import { notificationVar } from '../../../api/local-state';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import { useNewCodeTikTokMutation } from '../../../types/graphql';

type EmojiButtonPropsT = any;

export const EmojiButton: FC<EmojiButtonPropsT> = ({}) => {
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

  return (
    <div className={`emoji-list ${styles.wrapper}`}>
      <span
        className={`bubbly-button ${styles.emoji}`}
        id="emj"
        ref={targetButton}
        onClick={onClick}
      >
        <Swiper
          className={styles.slider}
          slidesPerView={1}
          direction="horizontal"
          spaceBetween={15}
          centeredSlides={true}
          onSlideChange={onSwipe}
          // allowSlidePrev={false}
          // loop={true}
          effect={'cube'}
        >
          <SwiperSlide className={styles.slide}>
            {loading ? 'Loading...' : parse(htmlEmoji)}
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            {loading ? 'Loading...' : <div></div>}
          </SwiperSlide>
        </Swiper>
      </span>
    </div>
  );
};
