import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Maybe } from 'graphql/jsutils/Maybe';
import {
  useFindAccountTikTokMutation,
  useGetTikTokProfileDataQuery,
} from '@root/types/graphql';
import { Button } from '@components/atoms/Button';
import { Input } from '@components/atoms/Input';
import { ProfileInfo } from '../../ProfileInfo';
import styles from './styles.module.scss';

type TikTokProfilePropsT = {
  setTikTokIsFound?: (isFound: boolean) => void;
};

type FormDataT = {
  link: string;
};

export type ProfileDataT = {
  name?: Maybe<string>;
  tagName?: Maybe<string>;
  userImage?: Maybe<string>;
};

const TIKTOK_NAME_PATTERN = /@[A-Za-z0-9_.]+/g;

export const TikTokProfile: FC<TikTokProfilePropsT> = ({
  setTikTokIsFound,
}) => {
  const { t } = useTranslation();

  const [profileData, setProfileData] = useState<null | ProfileDataT>(null);
  useGetTikTokProfileDataQuery({
    onCompleted: (data) => {
      if (data?.me?.tagName) {
        const { userImage, name, tagName } = data.me;
        setProfileData({ userImage, name, tagName });
      }
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    setError,
    reset,
  } = useForm<FormDataT>();

  const [findAccountTikTok] = useFindAccountTikTokMutation({
    onCompleted: (data) => {
      if (data?.findAccountTikTok?.find) {
        const { name, tagName, avatar } = data.findAccountTikTok;
        setProfileData({
          name,
          tagName,
          userImage: avatar,
        });
        if (setTikTokIsFound) {
          setTikTokIsFound(true);
        }
        reset();
      } else {
        setError('link', {
          message: t('error-messages.tiktok-not-found'),
        });
        if (setTikTokIsFound) {
          setTikTokIsFound(false);
        }
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
    if (setTikTokIsFound) {
      setTikTokIsFound(false);
    }
    setProfileData(null);
  };

  if (profileData) {
    return (
      <ProfileInfo
        profileData={{
          userImage: String(profileData.userImage),
          name: String(profileData.name),
          tagName: String(profileData.tagName),
        }}
        onChangeAccount={onChangeAccount}
        withChangeLink={true}
      />
    );
  } else
    return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
        <Input
          error={errors.link}
          visited={touchedFields.link}
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
