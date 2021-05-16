import React from 'react';
import { useMediaQuery } from 'react-responsive';

import TasksDesktop from './desktop/index';
import TasksMobile from './mobile/index';

export interface TaskT {
  disabled?: boolean;
  inProgress?: boolean;
  date?: string;
  state: 'active' | 'completed';
  title: string;
  description: string;
  payment: string;
}

export default () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1920px)' });
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
  if (isDesktop) {
    return <TasksDesktop tasks={tasks} />;
  } else {
    return <TasksMobile tasks={tasks} />;
  }
};
