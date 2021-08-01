import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Input } from '../../../atoms/Input';
import { Button } from '../../../atoms/Button';
import {
  FindAccountTikTokMutation,
  useFindAccountTikTokMutation,
} from '../../../../types/graphql';
import styles from './styles.module.scss';

export type TikTokProfileData = Omit<FindAccountTikTokMutation, '__typename'>;

type EditTikTokProfilePropsT = {
  setTikTokIsFound: (isFound: boolean) => void;
  // setTikTokProfileData: (data: TikTokProfileData) => void;
};

type FormDataT = {
  link: string;
};

const TIKTOK_NAME_PATTERN = /@[A-Za-z0-9_.]+/g;

export const EditTikTokProfile: FC<EditTikTokProfilePropsT> = ({
  setTikTokIsFound,
}) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    watch,
  } = useForm<FormDataT>();

  const [findAccountTikTok, { data }] = useFindAccountTikTokMutation({
    onCompleted: (data) => {
      if (data?.findAccountTikTok) {
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
