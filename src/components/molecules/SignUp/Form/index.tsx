import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Input } from '../../../atoms/Input';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

type FormPropsT = any;
type FormDataT = {
  name: string;
  age: number;
  country: string;
  sex: 'man' | 'woman';
};

export const Form: FC<FormPropsT> = ({}) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataT>();

  const onSubmit = (data: FormDataT) => console.log(data);

  return (
    <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('name')}
        placeholder={t('pages.signup.placeholders.name')}
      />
      <div className={styles['row']}>
        <Input
          {...register('age')}
          type="number"
          placeholder={t('pages.signup.placeholders.age')}
        />
        <Input
          {...register('country')}
          placeholder={t('pages.signup.placeholders.country')}
        />
      </div>
    </form>
  );
};
