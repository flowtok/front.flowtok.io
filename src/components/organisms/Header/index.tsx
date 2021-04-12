import { ReactNode, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import classNames from 'classnames';

import { Avatar } from 'components/atoms/Avatar';
import styles from './styles.module.scss';
import logo from 'assets/common/icons/logo.svg';
import chevronLeft from 'assets/common/icons/chevron_left.svg';
import avatarMock from 'assets/common/images/avatar_mock.png';

export interface HeaderProps {
  title?: string;
  // @default false
  withAvatar?: boolean;
  // @default false
  withBackArrow?: boolean;
  // @default false
  rounded?: boolean;
  // Placed below the default content
  additionalChild?: ReactNode;
}

export const Header = ({
  title,
  withAvatar,
  withBackArrow,
  rounded,
  additionalChild,
}: HeaderProps) => {
  const history = useHistory();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const goBack = () => history.goBack();

  useEffect(() => {
    const headerHeight = wrapperRef.current?.getBoundingClientRect().height;

    document.getElementsByTagName(
      'body'
    )[0].style.paddingTop = `${headerHeight}px`;
  }, [wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      className={classNames(styles.wrapper, {
        [styles['wrapper_rounded']]: rounded,
      })}
    >
      <div className={styles['default-content-wrapper']}>
        <div className={styles['left-element']}>
          {!withBackArrow ? (
            <img src={logo} />
          ) : (
            <img src={chevronLeft} onClick={goBack} />
          )}
        </div>
        {title && <p className={styles.title}>{title}</p>}
        <div className={styles['right-element']}>
          {withAvatar && <Avatar image={avatarMock} size={32} />}
        </div>
      </div>
      {additionalChild}
    </div>
  );
};
