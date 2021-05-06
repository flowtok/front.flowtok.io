import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Tabs } from 'components/atoms/Tabs';
import { TaskCard } from 'components/molecules/TaskCard';
import { PageTemplate } from 'components/templates/Page';
import styles from './styles.module.scss';
import 'swiper/swiper.scss';
import { DefaultPage } from '../../components/molecules/TaskCard/DefaultPage';

interface TaskT {
  disabled?: boolean;
  inProgress?: boolean;
  date?: string;
  state: string;
  title: string;
  description: string;
  payment: string;
}

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

  const tasks: TaskT[] = [
    {
      disabled: false,
      inProgress: true,
      state: 'active',
      title: 'FlowTok',
      description:
        'Подпишитесь на официальный канал FlowTok для того, чтобы следить за последними новостями. Так же будем рассказывать как работает наш сервис.',
      payment: '10.00₽',
    },
    {
      disabled: true,
      inProgress: false,
      state: 'active',
      title: 'FlowTok',
      description:
        'Подпишитесь на официальный канал FlowTok для того, чтобы следить за последними новостями. Так же будем рассказывать как работает наш сервис.',
      payment: '10.00₽',
    },
    {
      state: 'completed',
      title: 'FlowTok',
      description:
        'Подпишитесь на официальный канал FlowTok для того, чтобы следить за последними новостями. Так же будем рассказывать как работает наш сервис.',
      payment: '10.00₽',
      date: 'Сегодня',
    },
    {
      state: 'completed',
      title: 'FlowTok',
      description:
        'Подпишитесь на официальный канал FlowTok для того, чтобы следить за последними новостями. Так же будем рассказывать как работает наш сервис.',
      payment: '10.00₽',
      date: 'Сегодня',
    },
  ];

  if (!tasks.length) {
    return (
      <PageTemplate
        headerProps={{
          title: t('header.tasks.title'),
          rounded: true,
        }}
        extendedStyleProps={{
          paddingTop: 10,
          paddingBottom: 10,
        }}
        isNavbar={true}
      >
        <DefaultPage />
      </PageTemplate>
    );
  }

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
      isNavbar={true}
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
              {tasks.map((task, key) => {
                if (task.state === 'active') {
                  return (
                    <>
                      <TaskCard
                        key={'task-' + key}
                        inProgress={task.inProgress}
                        disabled={task.disabled}
                        state={task.state}
                        title={task.title}
                        description={task.description}
                        payment={task.payment}
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
                      {key === 0 && (
                        <p className={styles['disable-message']}>
                          {t('pages.tasks.disable-message')}
                        </p>
                      )}
                    </>
                  );
                }
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles['task-outter-wrapper']}>
              {tasks.map((task, key) => {
                if (task.state === 'completed') {
                  return (
                    <TaskCard
                      key={'task-done-' + key}
                      state={task.state}
                      title={task.title}
                      description={task.description}
                      payment={task.payment}
                      date={task.date}
                    />
                  );
                }
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </PageTemplate>
  );
};
