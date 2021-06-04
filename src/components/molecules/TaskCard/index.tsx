import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { Paper } from 'components/atoms/Paper';
import { Button } from 'components/atoms/Button';
import { Divider } from 'components/atoms/Divider';
import InfoIcon from 'assets/common/icons/info.svg';
import InfoLargeIcon from 'assets/common/icons/info_large.svg';
import InfoMiddleIcon from 'assets/common/icons/info-middle.svg';
import styles from './styles.module.scss';
import { TasksPopUp, TasksPopUpTypes } from './TasksPopUp';
import React, { ReactElement, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { usePopperTooltip } from 'react-popper-tooltip';

export interface DefaultTaskCardProps {
  // @default false
  disabled?: boolean;
  // @default false
  inProgress?: boolean;
  title: string;
  description: string;
  payment: string;
}

export interface ActiveTaskCardProps {
  state: 'active';
  linkButton: {
    text: string;
    url: string;
  };
  actionButton: {
    action: () => void;
  };
}

export interface CompletedTaskCardProps {
  state: 'completed';
  date?: string;
}

export type TaskCardProps = DefaultTaskCardProps &
  (ActiveTaskCardProps | CompletedTaskCardProps);

export const TaskCard = ({
  disabled = false,
  title,
  description,
  payment,
  inProgress,
  ...rest
}: TaskCardProps) => {
  const [isOpenPopUp, setOpenPopUp] = useState<boolean>(false);
  const [typePopUp, setTypePopUp] = useState<string>('');

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    placement: 'bottom-start',
    offset: [0, 10],
  });

  /*will be delete*/
  const tasksList = [
    { value: 'Жмете кнопку "Открыть сайт"', isDone: false },
    { value: 'Выполняете задание', isDone: true },
    {
      value:
        'В течение одного часа возвращаетесь на сайт и жмете кнопку "Проверить"',
      isDone: false,
    },
    { value: 'Получаете деньги!', isDone: true },
  ];

  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1440px)' });

  const getInfoIcon = () => {
    if (isDesktop && !isDesktopLarge) return InfoMiddleIcon;
    if (isDesktopLarge) return InfoLargeIcon;
    return InfoIcon;
  };

  const taskStatusBtn = (
    <>
      <button
        ref={setTriggerRef}
        className={styles['task-status-btn']}
        onClick={() => {
          if (!isDesktop) {
            setTypePopUp(TasksPopUpTypes.howToDo);
            setOpenPopUp(true);
          }
        }}
      >
        <img src={getInfoIcon()} alt="" />
      </button>
      {isDesktop && visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: styles['tooltip-container'] })}
        >
          <Paper style={{ padding: 20, borderRadius: 10 }}>
            <h3 className={styles['popper-title']}>
              {t('task-cards.popup-titles.how-to-do')}
            </h3>
            <ul className={styles['task-list']}>
              {tasksList.map((task, key) => {
                return <li key={'task' + key}>{task.value}</li>;
              })}
            </ul>
          </Paper>
          <div {...getArrowProps({ className: styles['tooltip-arrow'] })} />
        </div>
      )}
    </>
  );

  const classWrapper = classNames(
    styles['task-wrapper'],
    styles[`task_wrapper-${rest.state}`]
  );

  let divider: null | ReactElement = (
    <Divider
      direction={
        isDesktopLarge && rest.state === 'active' ? 'vertical' : 'horizontal'
      }
    />
  );

  if (isDesktop && !isDesktopLarge) divider = null;

  const getSize = () => {
    if (isDesktop && !isDesktopLarge) return 's-task';
    if (isDesktopLarge) return 'sm';
    return 's';
  };

  return (
    <>
      <Paper
        className={classNames(styles['task-card'], {
          [styles['task-card_disabled']]: disabled,
        })}
      >
        <div className={classWrapper}>
          <div className={styles['info-parts']}>
            <div className={styles['header-block']}>
              <div className={styles['title-block']}>
                <h3 className={styles['title']}>{title}</h3>
                {!isDesktop && taskStatusBtn}
                {rest.state === 'completed' && (
                  <span className={styles['date']}>{rest.date}</span>
                )}
              </div>
            </div>
            {isDesktop && (
              <p className={styles['description-title']}>
                {t('task-cards.popup-titles.description')}
              </p>
            )}
            <p className={styles['description']}>{description}</p>
          </div>
          {divider}
          <div className={styles['actions-block']}>
            <div className={styles['payment-block']}>
              <p className={styles['title']}>
                {rest.state === 'active'
                  ? t('task-cards.possible-payment.label')
                  : t('task-cards.getted-payment.label')}
              </p>
              <p className={styles['value']}>{payment}</p>
            </div>
            {isDesktopLarge && rest.state === 'active' && <Divider />}
            {rest.state === 'active' && (
              <>
                {!isDesktop && isDesktopLarge && <Divider />}
                <div className={styles['task-card-actions']}>
                  <div className={styles['top-btn-group']}>
                    <a
                      href={rest.linkButton.url}
                      target="_blank"
                      className={styles['btn-link']}
                    >
                      <Button
                        disabled={disabled}
                        size={getSize()}
                        radius={isDesktopLarge ? null : 11}
                        preset={isDesktop ? 'black' : 'border-gradient'}
                      >
                        {rest.linkButton.text}
                      </Button>
                    </a>
                    {isDesktop && taskStatusBtn}
                  </div>
                  <Button
                    disabled={disabled}
                    size={getSize()}
                    radius={isDesktopLarge ? null : 11}
                    onClick={() => {
                      if (inProgress) {
                        setTypePopUp(TasksPopUpTypes.thatIsDone);
                        setOpenPopUp(true);
                      } else rest.actionButton.action;
                    }}
                  >
                    {inProgress
                      ? t('task-cards.actions.check')
                      : t('task-cards.actions.perform')}
                  </Button>
                </div>
                {!disabled && inProgress && (
                  <button className={styles['cancel']}>
                    {t('task-cards.cancel')}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </Paper>
      <TasksPopUp
        isOpen={isOpenPopUp}
        close={() => setOpenPopUp(false)}
        type={typePopUp}
        tasks={tasksList}
      />
    </>
  );
};
