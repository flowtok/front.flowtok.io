import Popup from 'reactjs-popup';
import { forwardRef, PropsWithChildren } from 'react';
import { Paper } from '../../atoms/Paper';
import CloseIcon from 'assets/common/icons/close.svg';
import styles from './styles.module.scss';
import commonStyles from '../SettingsCards/styles.module.scss';

interface PopUpProps {
  isOpen: boolean;
  close: () => void;
  title: string;
}

export const PopUp = forwardRef<HTMLDivElement, PropsWithChildren<PopUpProps>>(
  ({ children, isOpen, close, title }) => {
    const contentStyle = { width: '100%', marginLeft: 20, marginRight: 20 };
    const overlayStyle = { background: 'rgba(0, 0, 0, 0.4)' };
    return (
      <Popup open={isOpen} onClose={close} {...{ overlayStyle, contentStyle }}>
        <Paper className={styles['wrap-content']}>
          <span onClick={close} className={styles['close']}>
            <img src={CloseIcon} />
          </span>
          <h3 className={commonStyles['primary-title']}>{title}</h3>
          {children}
        </Paper>
      </Popup>
    );
  }
);
