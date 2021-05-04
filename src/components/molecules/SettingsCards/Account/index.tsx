import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Divider } from 'components/atoms/Divider';
import { Avatar } from 'components/atoms/Avatar';
import { Paper } from 'components/atoms/Paper';
import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import commonStyles from '../styles.module.scss';
import styles from './styles.module.scss';
import AvatarMock from 'assets/common/images/avatar_mock.png';
import { useForm } from 'react-hook-form';

export interface AccountCardProps {
  username: string;
  tagname: string;
  name: string;
  age: number;
  country: string;
}

type FormDataT = {
  name: string;
  age: number;
  country: string;
};
export const AccountCard = ({
  username,
  tagname,
  name,
  age,
  country,
}: AccountCardProps) => {
  const { t } = useTranslation();
  const isExtraSmallScreen = useMediaQuery({ query: '(max-width: 350px)' });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataT>();

  const onSubmit = (data: FormDataT) => console.log(data);

  return (
    <Paper className={styles['account-card']}>
      <h3 className={commonStyles['primary-title']}>
        {t('pages.settings.cards.account.title')}
      </h3>
      <div className={styles['header']}>
        <div className={styles['user-main-info']}>
          <Avatar image={AvatarMock} size={42} />
          <div className={styles['user-main-info-names']}>
            <p className={styles['user-name']}>{username}</p>
            <p className={styles['user-tag']}>{tagname}</p>
          </div>
        </div>
        <Button preset="custom" size="s" className={styles['change-account']}>
          {isExtraSmallScreen
            ? t('pages.settings.cards.account.change-account-button-text-short')
            : t('pages.settings.cards.account.change-account-button-text')}
        </Button>
      </div>
      <Divider />
      <div className={styles['user-secondary-info']}>
        <div className={styles['text-block']}>
          <h5 className={commonStyles['secondary-title']}>
            {t('pages.settings.cards.account.about-you')}
          </h5>
          <p className={commonStyles['description']}>
            {t('pages.settings.cards.account.helper-text')}
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles['info-block']}
        >
          <Input visited={true} value={name} {...register('name')} />
          <Input visited={true} value={age} {...register('age')} />
          <Input visited={true} value={country} {...register('country')} />
        </form>
      </div>
      <Divider />
      <div className={styles['exit-block']}>
        <h5 className={commonStyles['secondary-title']}>
          {t('pages.settings.cards.account.exit')}
        </h5>
        <Button preset="custom" className={styles['exit-button']}>
          {t('pages.settings.cards.account.exit-button-text')}
        </Button>
      </div>
    </Paper>
  );
};