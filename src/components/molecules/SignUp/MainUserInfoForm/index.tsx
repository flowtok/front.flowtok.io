import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import { Input } from '../../../atoms/Input';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Button } from '../../../atoms/Button';
import Select from 'react-select';
import { Option } from 'react-select/src/filters';
import chroma from 'chroma-js';
import { Link } from 'react-router-dom';

type FormPropsT = any;
type FormDataT = {
  name: string;
  sex: 'man' | 'woman';
};

const options = [
  { value: 'music', label: 'Music', data: 'Music', color: '#00B8D9' },
  { value: 'dancing', label: 'Dancing', data: 'Dancing', color: '#0052CC' },
  { value: 'art', label: 'Art', data: 'Art', color: '#5243AA' },
  { value: 'art1', label: 'Art1', data: 'Art1', color: '#253858' },
  { value: 'art2', label: 'Art2', data: 'Art2', color: '#36B37E' },
];

const countries = [
  { value: 'uk', label: 'Ukraine', data: 'Ukraine' },
  { value: 'ru', label: 'Russia', data: 'Russia' },
  { value: 'us', label: 'United State', data: 'United State' },
];

export const MainUserInfoForm: FC<FormPropsT> = ({}) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataT>();

  const [themes, setThemes] = useState<Option[]>([]);
  const [country, setCountry] = useState<Option | null>(null);

  const onSubmit = (data: FormDataT) => console.log(data);

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'white',
    }),
    option: (
      styles: { [x: string]: any },
      { data, isDisabled, isFocused, isSelected }: any
    ) => {
      const color = chroma(data.color);
      return {
        ...styles,
        zIndex: 990,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor:
            !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
        },
      };
    },
    multiValue: (styles: any, data: any) => {
      const color = chroma(options[data.index].color.toString());
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
  };

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
        <div className={styles['select-group']}>
          <Select
            isMulti
            value={themes}
            options={options}
            onChange={(options, action) => {
              console.log(action);
              if (action.action === 'select-option' && themes.length > 2) {
                alert(`${t('pages.signup.notifications.maxTopics')}`);
              } else {
                setThemes(
                  options.map((o) => {
                    return {
                      data: o.value,
                      label: o.label,
                      value: o.value,
                    };
                  })
                );
              }
            }}
            styles={colourStyles}
          />
          <Select
            value={country}
            onChange={(option) => setCountry(option)}
            options={countries}
          />
        </div>
      </div>
      <div className={styles['btn-container']}>
        <Link to={'/profile'}>
          <Button preset={'black'} type={'submit'}>
            {t('pages.signup.buttons.flowtok')}
          </Button>
        </Link>
        <div className={styles['label']}>{t('pages.signup.agreement')}</div>
      </div>
    </form>
  );
};
