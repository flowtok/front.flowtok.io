import { forwardRef, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { Avatar } from '../../atoms/Avatar';
import AvatarMock from '../../../assets/common/images/avatar_mock.png';
import { Button } from '../../atoms/Button';
import { useTranslation } from 'react-i18next';

export interface Bloger {
  username: string;
  tagname: string;
}

interface BloggerInfoProps {
  blogger: Bloger;
  editText: string;
}

export const BloggerInfo = forwardRef<
  HTMLDivElement,
  PropsWithChildren<BloggerInfoProps>
>(({ blogger, editText }) => {
  return (
    <div className={styles['header']}>
      <div className={styles['user-main-info']}>
        <Avatar image={AvatarMock} size={42} />
        <div className={styles['user-main-info-names']}>
          <p className={styles['user-name']}>
            {blogger.username.slice(0, 9).concat('..')}
          </p>
          <p className={styles['user-tag']}>{blogger.tagname}</p>
        </div>
      </div>
      <Button preset="custom" size="s" className={styles['change-account']}>
        {editText}
      </Button>
    </div>
  );
});
