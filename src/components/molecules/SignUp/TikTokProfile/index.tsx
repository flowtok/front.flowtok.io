import React, { FC } from 'react';
import { Input } from '../../../atoms/Input';
import styles from './styles.module.scss';
import { Button } from '../../../atoms/Button';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { ProfileInfo } from '../../ProfileInfo';

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
  const isExtraSmallScreen = useMediaQuery({ query: '(max-width: 390px)' });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataT>();

  const onSubmit = (data: FormDataT) => console.log(data);

  if (profileData) {
    return (
      <div className={styles['row']}>
        <ProfileInfo profileData={profileData} />
        <div className={styles['link']}>
          {isExtraSmallScreen
            ? t('pages.signup.buttons.change-short')
            : t('pages.signup.buttons.change')}
        </div>
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
