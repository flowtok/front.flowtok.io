import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import './styles.css';
import styles from './styles.module.scss';
import emoji from '../../../configs/emoji';
import parse from 'html-react-parser';
import { useAnimationClass } from '../../../hooks/useAnimationClass';
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard';
import { notificationVar } from '../../../api/local-state';
import { Swiper, SwiperSlide } from 'swiper/react';

type EmojiButtonPropsT = any;

export const EmojiButton: FC<EmojiButtonPropsT> = ({}) => {
  const [htmlEmoji, setHtmlEmoji] = useState<string>('');
  const targetButton = useRef<HTMLSpanElement>(null);
  const animateButton = useAnimationClass(targetButton, 'bubbles', 750);
  const [copy] = useCopyToClipboard(1000);

  useLayoutEffect(() => {
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

  return (
    <div className="emoji-list">
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
        >
          <SwiperSlide className={styles.slide}>{parse(htmlEmoji)}</SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div>hello</div>
          </SwiperSlide>
        </Swiper>
      </span>
    </div>
  );
};
