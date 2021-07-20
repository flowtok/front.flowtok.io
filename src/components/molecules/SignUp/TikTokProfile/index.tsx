import React, { FC, useState } from 'react';
import { Input } from '../../../atoms/Input';
import styles from './styles.module.scss';
import { Button } from '../../../atoms/Button';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { ProfileInfo } from '../../ProfileInfo';
import {
  FindTikTok,
  useFindAccountTikTokMutation,
  useGetTikTokProfileDataQuery,
} from '../../../../types/graphql';

type TikTokProfilePropsT = {
  setTikTokIsFound: (isFound: boolean) => void;
};

type FormDataT = {
  link: string;
};

const TIKTOK_NAME_PATTERN = /@[A-Za-z0-9_.]+/g;

export const TikTokProfile: FC<TikTokProfilePropsT> = ({
  setTikTokIsFound,
}) => {
  const { t } = useTranslation();
  const isExtraSmallScreen = useMediaQuery({ query: '(max-width: 390px)' });
  const { data } = useGetTikTokProfileDataQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    watch,
  } = useForm<FormDataT>();

  watch('link');

  const [findAccountTikTok] = useFindAccountTikTokMutation({
    onCompleted: (data) => {
      if (data?.findAccountTikTok?.find) {
        // setProfileData(data.findAccountTikTok);
        setTikTokIsFound(true);
        reset();
      } else {
        setError('link', {
          message: t('error-messages.tiktok-not-found'),
        });
        setTikTokIsFound(false);
      }
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const onSubmit = async (data: FormDataT) => {
    if (data) {
      const preparedValue = data.link.match(TIKTOK_NAME_PATTERN);
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
    setTikTokIsFound(false);
    // setProfileData(null);
  };

  const profileData = data?.me;

  if (profileData) {
    return (
      <div className={styles['row']}>
        <ProfileInfo
          profileData={{
            userImage: String(profileData.userImage),
            name: String(profileData.name),
            tagName: String(profileData.tagName),
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
              value: TIKTOK_NAME_PATTERN,
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
