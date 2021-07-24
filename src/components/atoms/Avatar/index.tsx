import styles from './styles.module.scss';
import {
  InitialAdaptiveValues,
  useAdaptiveCssValue,
} from '../../../hooks/useAdaptiveCssValue';

export interface AvatarProps {
  image: string;
  sizes: InitialAdaptiveValues;
}

export const Avatar = ({ image, sizes }: AvatarProps) => {
  const size = useAdaptiveCssValue(sizes);

  return (
    <img
      className={styles.img}
      src={image}
      alt={''}
      style={{
        width: size,
        height: size,
        minWidth: size,
        maxHeight: size,
      }}
    />
  );
};
