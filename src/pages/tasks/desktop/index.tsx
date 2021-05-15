import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Tabs } from 'components/atoms/Tabs';
import { PageTemplate } from 'components/templates/Page';
import styles from './styles.module.scss';
import 'swiper/swiper.scss';
import { EmptyTasks } from '../../../components/molecules/TaskCard/EmptyTasks';
import { TaskT } from '../index';
import { PageTemplateDesktop } from '../../../components/templates/PageDesktop';

interface TasksPageProps {
  tasks: TaskT[];
}

export default ({ tasks }: TasksPageProps) => {
  const { t } = useTranslation();
  tasks = [];
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

  if (!tasks.length) {
    return (
      <PageTemplateDesktop>
        <EmptyTasks />
      </PageTemplateDesktop>
    );
  }

  return (
    <PageTemplate
      headerProps={{
        title: t('header.tasks.title'),
        rounded: true,
        additionalChild: (
          <div className={styles['tabs-container']}>
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
              {tasks
                .sort((a) => {
                  if (!a.inProgress) return 1;
                  if (a.inProgress) return -1;
                  return 0;
                })
                .map((task, key) => {
                  if (task.state === 'active') {
                    return <></>;
                  }
                })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles['task-outter-wrapper']}>
              {tasks.map((task, key) => {
                if (task.state === 'completed') {
                  return <></>;
                }
              })}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </PageTemplate>
  );
};
