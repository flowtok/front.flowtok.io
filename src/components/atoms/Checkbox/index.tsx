import React, { forwardRef, HTMLProps } from 'react';
import CheckIcon from 'assets/common/icons/check.svg';
import generateUniqueId from 'uniqid';
import styles from './styles.module.scss';

type CheckBoxPropsT = {
  inputProps?: Omit<HTMLProps<HTMLInputElement>, 'id'>;
} & Omit<HTMLProps<HTMLLabelElement>, 'htmlFor'>;

export const Checkbox = forwardRef<HTMLInputElement, CheckBoxPropsT>(
  ({ className, inputProps, ...rest }, ref) => {
    const id = generateUniqueId();

    return (
      <>
        <input
          type="checkbox"
          id={id}
          {...inputProps}
          className={`${styles.input} ${inputProps?.className}`}
          ref={ref}
        />
        <label
          htmlFor={id}
          className={`${styles.label} ${className}`}
          {...rest}
        >
          <img src={CheckIcon} alt="" className={styles.icon} />
        </label>
      </>
    );
  }
);
