import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import chroma from 'chroma-js';
import { gql } from '@apollo/client';
import { Option } from 'react-select/src/filters';
import {
  useFinishJoinMutation,
  useGetSocialMediaDataQuery,
} from '../../../../types/graphql';
import { Button } from '../../../atoms/Button';
import { Input } from '../../../atoms/Input';
import { isRegisteredVar } from '../../../../graphql/local-state';
import { options } from './options';
import styles from './styles.module.scss';

type SelectErrorT = {
  message: string;
  type: 'empty' | 'max-topics';
} | null;
type FormPropsT = {
  tikTokIsFound: boolean;
};
type FormDataT = {
  name: string;
};

export const MainUserInfoForm: FC<FormPropsT> = ({ tikTokIsFound }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
  } = useForm<FormDataT>();
  const [themes, setThemes] = useState<Option[]>([]);
  const [selectError, setSelectError] = useState<SelectErrorT>(null);
  const {} = useGetSocialMediaDataQuery({
    onCompleted: (data) => {
      if (data?.me?.social?.nickname) {
        setValue('name', data.me.social.nickname);
      }
    },
  });
  const [finishJoin] = useFinishJoinMutation({
    update(cache, { data }) {
      cache.writeQuery({
        query: gql`
          query writeUser {
            me {
              ...UserData
            }
          }
        `,
        data: data?.finishJoin,
      });
    },
    onCompleted: () => {
      localStorage.setItem('registered', 'true');
      isRegisteredVar(true);
    },
  });

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
      });
    }
  };

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'white',
    }),
    menuList: (styles: any) => ({
      ...styles,
      height: 150,
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

  useEffect(() => {
    if (selectError?.type === 'max-topics') {
      const timer = setTimeout(() => {
        setSelectError(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [selectError]);

  const isSubmitEnabled = useMemo<boolean>(
    () => tikTokIsFound && !!themes.length && !errors.name,
    [tikTokIsFound, themes, errors.name]
  );

  return (
    <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['row']}>
        <Input
          visited={touchedFields.name}
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
              if (action.action === 'select-option') {
                if (selectError?.type === 'empty') {
                  setSelectError(null);
                }
                if (themes.length > 2 && !selectError) {
                  return setSelectError({
                    message: t(
                      'pages.signup.notifications.maxTopics'
                    ).toString(),
                    type: 'max-topics',
                  });
                }
              } else if (action.action === 'remove-value') {
                if (themes.length === 1) {
                  setSelectError({
                    message: t('error-messages.select-empty'),
                    type: 'empty',
                  });
                }
              }
              setThemes(
                options.map((o) => {
                  return {
                    data: o.value,
                    label: o.label,
                    value: o.value,
                  };
                })
              );
            }}
            styles={colourStyles}
          />
          {selectError && (
            <p className={styles['select-error']}>{selectError.message}</p>
          )}
        </div>
      </div>
      <div className={styles['btn-container']}>
        <Button
          preset={isSubmitEnabled ? 'black' : 'success_gray'}
          type={'submit'}
          disabled={!isSubmitEnabled}
        >
          {t('pages.signup.buttons.flowtok')}
        </Button>
        <div className={styles['label']}>{t('pages.signup.agreement')}</div>
      </div>
    </form>
  );
};
