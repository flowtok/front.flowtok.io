import React, { forwardRef, PropsWithChildren } from 'react';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import styles from './styles.module.scss';

type SwiperButtonPropsT = {
  onClick: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  onSwipe: (swiperCore: SwiperClass) => void;
  loading: boolean;
};

export const SwiperButton = forwardRef<
  HTMLSpanElement,
  PropsWithChildren<SwiperButtonPropsT>
>(({ onClick, onSwipe, loading, children }, ref) => (
  <div className={`emoji-list ${styles.wrapper}`}>
    <span
      className={`bubbly-button ${styles.emoji}`}
      id="emj"
      ref={ref}
      onClick={onClick}
    >
      <Swiper
        className={styles.slider}
        slidesPerView={1}
        direction="horizontal"
        spaceBetween={15}
        centeredSlides={true}
        onSlideChange={onSwipe}
      >
        <SwiperSlide className={styles.slide}>
          {loading ? 'Loading...' : children}
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          {loading ? 'Loading...' : <div />}
        </SwiperSlide>
      </Swiper>
    </span>
  </div>
));
