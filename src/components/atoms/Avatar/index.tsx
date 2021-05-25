import styles from './styles.module.scss';

export interface AvatarProps {
  image: string;
  /// @default 32px
  size?: number;
}

export const Avatar = ({ image, size = 32 }: AvatarProps) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        minWidth: size,
      }}
      className={styles.wrapper}
    >
      <img src={image} />
    </div>
  );
};
