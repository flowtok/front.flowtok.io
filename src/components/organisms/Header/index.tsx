import { forwardRef, ReactNode } from 'react';
import { useHistory } from 'react-router';
import classNames from 'classnames';

import { Avatar } from 'components/atoms/Avatar';
import styles from './styles.module.scss';
import logo from 'assets/common/icons/logo.svg';
import chevronLeft from 'assets/common/icons/chevron_left.svg';
import { useAdaptiveCssValue } from '../../../hooks/useAdaptiveCssValue';

export interface HeaderProps {
  title?: string;
  // @default false
  avatar?: string | null;
  // @default false
  withBackArrow?: boolean;
  // @default false
  rounded?: boolean;
  // @default false
  withSeparator?: boolean;
  // Placed below the default content
  additionalChild?: ReactNode;
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  (
    { title, avatar, withBackArrow, withSeparator, rounded, additionalChild },
    ref
  ) => {
    const history = useHistory();

    const goBack = () => history.goBack();
    const sizes = {
      mobile: 32,
    };

    return (
      <div
        ref={ref}
        className={classNames(styles.wrapper, {
          [styles['wrapper_rounded']]: rounded,
        })}
      >
        <div className={styles['default-content-wrapper']}>
          <div className={styles['left-element']}>
            {!withBackArrow ? (
              <img src={logo} alt={''} />
            ) : (
              <img src={chevronLeft} onClick={goBack} alt={''} />
            )}
          </div>
          {title && <p className={styles.title}>{title}</p>}
          <div className={styles['right-element']}>
            {avatar && (
              <Avatar image={avatar} size={useAdaptiveCssValue(sizes)} />
            )}
          </div>
        </div>
        {additionalChild}
        {withSeparator && <div className={styles['separator']} />}
      </div>
    );
  }
);
