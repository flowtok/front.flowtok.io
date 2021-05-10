import { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';
import vkIcon from '../../../assets/login/vk.svg';
import gmIcon from '../../../assets/login/google.svg';
import vkLight from '../../../assets/common/icons/vk.svg';
import telegramLight from '../../../assets/common/icons/telegram.svg';
import instagramLight from '../../../assets/common/icons/instagram.svg';

import styles from './styles.module.scss';

export type ButtonNetworkPresetUnionType = 'light';

export type NetworkButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'ref'
> & { network: NetworkT; preset?: ButtonNetworkPresetUnionType };

export type NetworkT = 'vk' | 'fb' | 'gm' | 'vk-light' | 't-light' | 'i-light';

export const NetworkButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<NetworkButtonProps>
>(({ children, className, network, preset, ...rest }, ref) => {
  const getImageSrcByNetwork = (network: NetworkT) => {
    switch (network) {
      case 'vk':
        return vkIcon;
      case 'fb':
        return vkIcon;
      case 'gm':
        return gmIcon;
      case 'vk-light':
        return vkLight;
      case 't-light':
        return telegramLight;
      case 'i-light':
        return instagramLight;
      default:
        return '';
    }
  };

  const finalClassName = classNames(
    styles['network-button'],
    styles[`network-button_${preset}`]
  );

  return (
    <button ref={ref} {...rest} className={classNames(finalClassName)}>
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
