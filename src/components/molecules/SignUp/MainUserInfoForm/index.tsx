import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Input } from '../../../atoms/Input';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Button } from '../../../atoms/Button';

type FormPropsT = any;
type FormDataT = {
  name: string;
  age: number;
  country: string;
  sex: 'man' | 'woman';
};

export const MainUserInfoForm: FC<FormPropsT> = ({}) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataT>();

  const onSubmit = (data: FormDataT) => console.log(data);

  return (
    <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['row']}>
        <Input
          error={errors.name}
          {...register('name', {
            required: t('validation-messages.required').toString(),
          })}
          placeholder={t('pages.signup.placeholders.name')}
        />
      </div>
      <div className={styles['row']}>
        <Input
          error={errors.age}
          {...register('age', {
            required: t('validation-messages.required').toString(),
            min: {
              value: 1,
              message: t('validation-messages.incorrect').toString(),
            },
            max: {
              value: 150,
              message: t('validation-messages.incorrect').toString(),
            },
          })}
          type="number"
          placeholder={t('pages.signup.placeholders.age')}
        />
        <Input
          {...register('country')}
          placeholder={t('pages.signup.placeholders.country')}
        />
      </div>
      <div className={styles['row']}>
        <Button preset={'border-gradient'} size={'sm'} type={'button'}>
          <svg
            width="13"
            height="21"
            viewBox="0 0 13 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles['btn-icon']}
          >
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.52399 0C10.0949 0 13 2.84077 13 6.33259C13 9.56264 10.477 12.231 7.24354 12.5796V16.8093H9.40221C9.7996 16.8093 10.1218 17.122 10.1218 17.5078C10.1218 17.8935 9.7996 18.2062 9.40221 18.2062H7.24354V20.3016C7.24354 20.6873 6.92137 21 6.52399 21C6.1266 21 5.80443 20.6873 5.80443 20.3016V18.2062H3.64576C3.24837 18.2062 2.9262 17.8935 2.9262 17.5078C2.9262 17.122 3.24837 16.8093 3.64576 16.8093H5.80443V12.5802C2.54445 12.234 0 9.56441 0 6.33259C0 2.858 2.94342 0 6.52399 0ZM6.52376 1.44828C3.7458 1.44828 1.48571 3.65137 1.48571 6.35937C1.48571 9.0418 3.7458 11.2241 6.52376 11.2241C9.27554 11.2241 11.5143 9.0418 11.5143 6.35937C11.5143 3.65137 9.27554 1.44828 6.52376 1.44828Z"
              fill="#A4A4A4"
            />
          </svg>
          <img src="" alt="" />
          {t('pages.signup.buttons.sex.woman')}
        </Button>
        <Button preset={'white'} size={'sm'} type={'button'}>
          <svg
            className={styles['btn-icon']}
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.7302 7.25374L14.4627 11.5212C16.523 14.0712 16.4346 17.7581 14.1493 20.0433C11.6924 22.5002 7.5902 22.4398 5.05836 19.908C2.53337 17.383 2.48786 13.32 4.95694 10.8509C7.24092 8.56694 10.9118 8.4641 13.4447 10.504L17.7126 6.23613L15.4136 6.20191C15.022 6.19608 14.6998 5.8739 14.694 5.48236C14.6882 5.09078 15.0009 4.77809 15.3925 4.78392L19.4032 4.84362C19.7948 4.84945 20.1169 5.17163 20.1227 5.56317L20.1824 9.5739C20.1883 9.96548 19.8756 10.2782 19.484 10.2723C19.0924 10.2665 18.7703 9.94433 18.7645 9.55279L18.7302 7.25374ZM6.00591 11.895C4.11376 13.7872 4.14766 16.8998 6.08145 18.8336C8.03364 20.7858 11.1613 20.8347 13.0534 18.9425C14.9277 17.0682 14.8643 13.9551 12.9121 12.0029C10.9783 10.0692 7.8802 10.0207 6.00591 11.895Z"
              fill="#A4A4A4"
            />
          </svg>
          {t('pages.signup.buttons.sex.man')}
        </Button>
      </div>
      <div className={styles['btn-container']}>
        <Button preset={'black'} type={'submit'}>
          {t('pages.signup.buttons.flowtok')}
        </Button>
        <div className={styles['label']}>{t('pages.signup.agreement')}</div>
      </div>
    </form>
  );
};
