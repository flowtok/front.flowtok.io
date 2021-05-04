import Popup from 'reactjs-popup';
import { forwardRef, PropsWithChildren } from 'react';
import { Paper } from '../../atoms/Paper';
import CloseIcon from 'assets/common/icons/close.svg';
import styles from './styles.module.scss';
import commonStyles from '../SettingsCards/styles.module.scss';

interface PopUpProps {
  isOpen: boolean;
  close?: () => void;
  title: string;
  isClose?: boolean;
}

export const PopUp = forwardRef<HTMLDivElement, PropsWithChildren<PopUpProps>>(
  ({ children, isOpen, close, title, isClose = true }) => {
    const contentStyle = { width: '100%', marginLeft: 20, marginRight: 20 };
    const overlayStyle = { background: 'rgba(0, 0, 0, 0.4)' };
    let closeBtn = null;
    if (isClose) {
      closeBtn = (
        <span onClick={close} className={styles['close']}>
          <img src={CloseIcon} />
        </span>
      );
    }
    return (
      <Popup
        open={isOpen}
        closeOnDocumentClick={isClose}
        onClose={close}
        {...{ overlayStyle, contentStyle }}
      >
        <Paper className={styles['wrap-content']}>
          {closeBtn}
          <h3 className={commonStyles['primary-title']}>{title}</h3>
          {children}
        </Paper>
      </Popup>
    );
  }
);
