import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Tabs } from 'components/atoms/Tabs';
import { TaskCard } from 'components/molecules/TaskCard';
import { PageTemplate } from 'components/templates/Page';
import styles from './styles.module.scss';
import 'swiper/swiper.scss';

export default () => {
  const { t } = useTranslation();

  const [selectedTab, setSelectedTab] = useState<number>(0);

  const [swiper, setSwiper] = useState<SwiperClass>();

  const onTabSelect = (index: number) => {
    if (index === 1) {
      swiper?.slideNext();
    }
    if (index === 0) {
      swiper?.slidePrev();
    }
    setSelectedTab(index);
  };

  const onSlideChange = (swiper: SwiperClass) => {
    setSelectedTab(swiper.activeIndex);
  };

  return (
    <PageTemplate
      headerProps={{
        title: t('header.tasks.title'),
        rounded: true,
        additionalChild: (
          <div>
            <Tabs
              list={[
                t('header.tasks.tabs.active'),
                t('header.tasks.tabs.completed'),
              ]}
              selected={selectedTab}
              onSelect={onTabSelect}
            />
          </div>
        ),
      }}
      extendedStyleProps={{
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <div className={styles['outter-wrapper']}>
        <Swiper
          slidesPerView={1}
          direction="horizontal"
          spaceBetween={20}
          onSwiper={setSwiper}
          onSlideChange={onSlideChange}
        >
          <SwiperSlide>
            <div className={styles['task-outter-wrapper']}>
              <TaskCard
                inProgress
                state="active"
                title="FlowTok"
                description="Подпишитесь на официальный канал FlowTok для того, чтобы следить за последними новостями. Так же будем рассказывать как работает наш сервис."
                payment="10.00₽"
                linkButton={{
                  text: t('task-cards.links.channel'),
                  url: '',
                }}
                actionButton={{
                  action: () => {
                    return;
                  },
                }}
              />
              <p className={styles['disable-message']}>
                {t('pages.tasks.disable-message')}
              </p>
              <TaskCard
                state="active"
                disabled
                title="FlowTok"
                description="Подпишитесь на официальный канал FlowTok для того, чтобы следить за последними новостями. Так же будем рассказывать как работает наш сервис."
                payment="10.00₽"
                linkButton={{
                  text: t('task-cards.links.channel'),
                  url: '',
                }}
                actionButton={{
                  action: () => {
                    return;
                  },
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles['task-outter-wrapper']}>
              <TaskCard
                state="completed"
                title="FlowTok"
                description="Подпишитесь на официальный канал FlowTok для того, чтобы следить за последними новостями. Так же будем рассказывать как работает наш сервис."
                payment="10.00₽"
                date="Сегодня"
              />
              <TaskCard
                state="completed"
                title="FlowTok"
                description="Подпишитесь на официальный канал FlowTok для того, чтобы следить за последними новостями. Так же будем рассказывать как работает наш сервис."
                payment="10.00₽"
                date="Сегодня"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </PageTemplate>
  );
};
