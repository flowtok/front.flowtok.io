import styles from './styles.module.scss';

export interface AvatarProps {
  image: string;
  size: number;
}

export const Avatar = ({ image, size }: AvatarProps) => {
  return (
    <img
      className={styles.img}
      src={image}
      alt={'avatar'}
      style={{
        width: size,
        height: size,
        minWidth: size,
        maxHeight: size,
      }}
    />
  );
};
