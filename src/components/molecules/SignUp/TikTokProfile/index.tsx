import React, { FC } from 'react';
import { Input } from '../../../atoms/Input';
import styles from './styles.module.scss';
import { Button } from '../../../atoms/Button';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { ProfileInfo } from '../../ProfileInfo';
import { useMutation } from '@apollo/client';
import { FindTikTok, MutationFindTickTokArgs, MutationFinishJoinArgs } from '../../../../models/models';
import { FIND_ACCOUNT_TIKTOK } from '../../../../api/mutations';
import { currentUserVar, isRegisteredVar } from '../../../../api/cache';

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

  const [findAccountTikTok, { data }] = useMutation<
    { findAccountTikTok: FindTikTok },
    MutationFindTickTokArgs
  >(FIND_ACCOUNT_TIKTOK);

  const onSubmit = (data: FormDataT) => {
    if (data) {
      findAccountTikTok({
        variables: {
          input: {
            account: ''
          },
        },
      }).then((data) => {

      });
    }
  };

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
            pattern: {
              value: /@[a-zA-Z]+/g,
              message: t('validation-messages.incorrect').toString(),
            },
          })}
          placeholder={t('pages.signup.placeholders.link')}
        />
        <div className={styles['btn-row']}>
          <Button preset={'white'} size={'ssm'}>
            {t('pages.signup.buttons.tiktok')}
          </Button>
          <Button preset={'black'} size={'ssm'} type={'submit'}>
            {t('pages.signup.buttons.confirm')}
          </Button>
        </div>
      </form>
    );
};
