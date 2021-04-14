import { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';
import vkIcon from '../../../assets/login/vk.svg';
import gmIcon from '../../../assets/login/google.svg';

import styles from './styles.module.scss';

export type NetworkButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'ref'
> & { network: NetworkT };

export type NetworkT = 'vk' | 'fb' | 'gm';

export const NetworkButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<NetworkButtonProps>
>(({ children, className, network, ...rest }, ref) => {
  const getImageSrcByNetwork = (network: NetworkT) => {
    switch (network) {
      case 'vk':
        return vkIcon;
      case 'fb':
        return vkIcon;
      case 'gm':
        return gmIcon;
      default:
        return '';
    }
  };

  return (
    <button
      ref={ref}
      {...rest}
      className={classNames(styles['network-button'], className)}
    >
      <div className={styles['icon-container']}>
        <img
          src={getImageSrcByNetwork(network)}
          alt=""
          className={styles['icon']}
        />
      </div>
      {children}
    </button>
  );
});
