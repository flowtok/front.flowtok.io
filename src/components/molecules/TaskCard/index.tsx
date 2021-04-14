import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { Paper } from 'components/atoms/Paper';
import { Button } from 'components/atoms/Button';
import { Divider } from 'components/atoms/Divider';
import InfoIcon from 'assets/common/icons/info.svg';
import styles from './styles.module.scss';

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
  date: string;
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
  const { t } = useTranslation();

  return (
    <Paper
      className={classNames(styles['task-card'], {
        [styles['task-card_disabled']]: disabled,
      })}
    >
      <div className={styles['header-block']}>
        <div className={styles['title-block']}>
          <h3 className={styles['title']}>{title}</h3>
          <button>
            <img src={InfoIcon} />
          </button>
          {rest.state === 'completed' && (
            <span className={styles['date']}>{rest.date}</span>
          )}
        </div>
      </div>
      <p className={styles['description']}>{description}</p>
      <Divider />
      <div className={styles['payment-block']}>
        <p className={styles['title']}>
          {rest.state === 'active'
            ? t('task-cards.possible-payment.label')
            : t('task-cards.getted-payment.label')}
        </p>
        <p className={styles['value']}>{payment}</p>
      </div>
      {rest.state === 'active' && (
        <>
          <Divider />
          <div className={styles['task-card-actions']}>
            <a href={rest.linkButton.url} target="_blank">
              <Button
                disabled={disabled}
                size="s"
                radius={11}
                preset="border-gradient"
              >
                {rest.linkButton.text}
              </Button>
            </a>
            <Button
              disabled={disabled}
              size="s"
              radius={11}
              onClick={rest.actionButton.action}
            >
              {inProgress
                ? t('task-cards.actions.perform')
                : t('task-cards.actions.check')}
            </Button>
          </div>
          {!disabled && inProgress && (
            <button className={styles['cancel']}>
              {t('task-cards.cancel')}
            </button>
          )}
        </>
      )}
    </Paper>
  );
};
