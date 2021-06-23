import React, { FC, useState } from 'react';
import { Input } from '../../../atoms/Input';
import styles from './styles.module.scss';
import { Button } from '../../../atoms/Button';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { ProfileInfo } from '../../ProfileInfo';
import { useMutation } from '@apollo/client';
import { FindTikTok, MutationFindTickTokArgs } from '../../../../models/models';
import { FIND_ACCOUNT_TIKTOK } from '../../../../api/mutations';

type TikTokProfilePropsT = {
  handleVerify: (isFound: boolean) => void;
  profileData?: {
    fullName: string;
    shortName: string;
    avatar: string;
  };
};

type FormDataT = {
  link: string;
};

export const TikTokProfile: FC<TikTokProfilePropsT> = ({ handleVerify }) => {
  const { t } = useTranslation();
  const isExtraSmallScreen = useMediaQuery({ query: '(max-width: 390px)' });
  const [profileData, setProfileData] = useState<FindTikTok | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    watch,
  } = useForm<FormDataT>();

  watch('link');

  const [findAccountTikTok, { data }] = useMutation<
    { findAccountTikTok: FindTikTok },
    MutationFindTickTokArgs
  >(FIND_ACCOUNT_TIKTOK, {
    onCompleted: (data) => {
      if (data.findAccountTikTok.find) {
        setProfileData(data.findAccountTikTok);
        handleVerify(true);
        reset();
      } else {
        setError('link', {
          message: t('error-messages.tiktok-not-found'),
        });
        handleVerify(false);
      }
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const onSubmit = async (data: FormDataT) => {
    if (data) {
      const preparedValue = data.link.match(/@[A-Za-z0-9]+/g);
      if (preparedValue) {
        await findAccountTikTok({
          variables: {
            account: preparedValue[0].slice(1),
          },
        });
      }
    }
  };

  const onChangeAccount = () => {
    handleVerify(false);
    setProfileData(null);
  };

  if (profileData) {
    return (
      <div className={styles['row']}>
        <ProfileInfo
          profileData={{
            avatar: profileData.avatar,
            fullName: profileData.name,
            shortName: profileData.tagName,
          }}
        />
        <div className={styles['link']} onClick={onChangeAccount}>
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
            required: t('validation-messages.required').toString(),
            pattern: {
              value: /@[A-Za-z0-9]+/g,
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
