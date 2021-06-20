import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import { Input } from '../../../atoms/Input';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Button } from '../../../atoms/Button';
import Select from 'react-select';
import chroma from 'chroma-js';
import { MutationFinishJoinArgs, User } from '../../../../models/models';
import { useMutation } from '@apollo/client';
import { FINISH_JOIN } from '../../../../api/mutations';
import { options } from './options';
import { Option } from 'react-select/src/filters';
import { currentUserVar, isRegisteredVar } from '../../../../api/cache';

type FormPropsT = any;
type FormDataT = {
  name: string;
};

export const MainUserInfoForm: FC<FormPropsT> = ({}) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataT>();

  const [themes, setThemes] = useState<Option[]>([]);
  const [finishJoin, { data }] = useMutation<User, MutationFinishJoinArgs>(
    FINISH_JOIN
  );

  const onSubmit = (data: FormDataT) => {
    if (data && themes.length) {
      finishJoin({
        variables: {
          input: {
            name: data.name,
            subjects: themes.map((option) => option.data),
            telegramNotify: true,
            tagName: 'test',
          },
        },
      }).then((data: any) => {
        currentUserVar(data?.data?.finishJoin);
        isRegisteredVar(true);
      });
    }
  };

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
            placeholder={t('pages.signup.placeholders.theme')}
            onChange={(options, action) => {
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
        </div>
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
