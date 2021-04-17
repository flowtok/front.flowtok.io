import React, { FC } from 'react';
import { Input } from '../../../atoms/Input';
import styles from './styles.module.scss';
import { Button } from '../../../atoms/Button';
import { useTranslation } from 'react-i18next';
import { Avatar } from '../../../atoms/Avatar';
import { useForm } from 'react-hook-form';

type TikTokProfilePropsT = {
  profileData?: {
    fullName: string;
    shortName: string;
    avatar: string;
  };
};

type FormDataT = {
  link: string;
};

export const TikTokProfile: FC<TikTokProfilePropsT> = ({ profileData }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataT>();

  const onSubmit = (data: FormDataT) => console.log(data);

  if (profileData) {
    return (
      <div className={styles['row']}>
        <div className={styles['row']}>
          <Avatar image={profileData.avatar} size={48} />
          <div className={styles['column']}>
            <div className={styles['title']}>{profileData.fullName}</div>
            <div className={styles['subtitle']}>{profileData.shortName}</div>
          </div>
        </div>
        <div className={styles['link']}>{t('pages.signup.buttons.change')}</div>
      </div>
    );
  } else
    return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
        <Input
          error={errors.link}
          {...register('link', {
            required: t('validation.required').toString(),
          })}
          placeholder={t('pages.signup.placeholders.link')}
        />
        <div className={styles['btn-row']}>
          <Button preset={'white'} size={'ssm'} radius={21}>
            {t('pages.signup.buttons.tiktok')}
          </Button>
          <Button preset={'black'} size={'ssm'} radius={21} type={'submit'}>
            {t('pages.signup.buttons.confirm')}
          </Button>
        </div>
      </form>
    );
};
