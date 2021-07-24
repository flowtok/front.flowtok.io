import Popup from 'reactjs-popup';
import { CSSProperties, forwardRef, PropsWithChildren } from 'react';
import { Paper } from '../../atoms/Paper';
import CloseIcon from 'assets/common/icons/close.svg';
import styles from './styles.module.scss';
import commonStyles from '../SettingsCards/styles.module.scss';
import classNames from 'classnames';

type textPosition = 'left' | 'right' | 'center';

type size = 's' | 'sm' | 'm' | '';

interface PopUpProps {
  isOpen: boolean;
  close?: () => void;
  title?: string;
  closeOnDocumentClick?: boolean;
  isCross?: boolean;
  titlePosition?: textPosition;
  size?: size;
}

export const PopUp = forwardRef<HTMLDivElement, PropsWithChildren<PopUpProps>>(
  (
    {
      children,
      isOpen,
      close,
      title,
      closeOnDocumentClick = true,
      isCross = true,
      titlePosition = 'left',
      size,
    },
    ref
  ) => {
    const contentStyle = {
      width: 'fit-content',
      margin: 'auto',
    };
    const overlayStyle = { background: 'rgba(0, 0, 0, 0.4)' };
    let closeBtn = null;
    if (isCross) {
      closeBtn = (
        <span onClick={close} className={styles['close']}>
          <img src={CloseIcon} alt={''} />
        </span>
      );
    }

    const position: CSSProperties = { textAlign: titlePosition };

    const finalClassName = classNames(
      styles['wrap-content'],
      styles[`wrap-content_${size}`]
    );

    return (
      <Popup
        open={isOpen}
        nested={true}
        closeOnDocumentClick={closeOnDocumentClick}
        onClose={close}
        {...{ overlayStyle, contentStyle }}
      >
        <Paper className={finalClassName}>
          {closeBtn}
          {title && (
            <h3 style={position} className={commonStyles['primary-title']}>
              {title}
            </h3>
          )}
          {children}
        </Paper>
      </Popup>
    );
  }
);
