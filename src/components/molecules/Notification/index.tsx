import React, { FC, useEffect, useMemo, useState } from 'react';
import tick from 'assets/notification/tick.svg';
import cross from 'assets/notification/cross.svg';
import alert from 'assets/notification/alert.svg';
import {
  NotificationT,
  NotificationTypeT,
  notificationVar,
} from '../../../graphql/local-state';
import styles from './styles.module.scss';
import 'animate.css';

type NotificationPropsT = {
  notification: NotificationT;
};
type ViewPropsT = NotificationPropsT & {
  icon: string;
  className: string;
};

export const Notification: FC<NotificationPropsT> = (props) => {
  const { animation, icon } = useEnhancer(props.notification.type);

  return <View {...props} icon={icon} className={animation} />;
};

export const View: FC<ViewPropsT> = ({
  notification: { message, type },
  className,
  icon,
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[type]} ${className}`}>
      <img src={icon} alt="" className={styles.img} />
      <div className={styles.message}>{message}</div>
    </div>
  );
};

const useEnhancer = (type: NotificationTypeT) => {
  const animationIn = `animate__animated animate__bounceInRight`;
  const animationOut = `animate__animated animate__bounceOutRight`;

  const [animation, setAnimation] = useState<string>(animationIn);

  const icon = useMemo(() => {
    switch (type) {
      case 'alert':
        return alert;
      case 'error':
        return cross;
      case 'success':
        return tick;
      default:
        return tick;
    }
  }, [type]);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setAnimation(animationOut);
    }, 3000);
    const timeout2 = setTimeout(() => {
      notificationVar(null);
    }, 4000);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return {
    icon,
    animation,
  };
};
