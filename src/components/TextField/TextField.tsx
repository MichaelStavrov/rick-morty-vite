import React, {
  FC,
  InputHTMLAttributes,
  useState,
  useEffect,
  memo,
  CSSProperties,
  ReactNode,
} from 'react';
import cn from 'classnames';

import { HandleChangeProps } from './types';
import styles from './TextField.module.scss';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  id?: string;
  initialValue?: string;
  fieldSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  br?: CSSProperties['borderRadius'];
  errorMessage?: string;
  icon?: ReactNode;
  handleChange?: ({ name, value }: HandleChangeProps) => void;
  setErrors?: ({ name, value }: HandleChangeProps) => void;
}

const TextField: FC<TextFieldProps> = ({
  type = 'text',
  name,
  label,
  id,
  initialValue = '',
  autoFocus,
  fieldSize,
  br,
  errorMessage,
  required,
  handleChange,
  setErrors,
  disabled,
  icon,
  ...rest
}) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;

    if (inputValue) {
      setErrors?.({ name, value: '' });
    }

    setValue(inputValue);
  };

  useEffect(() => {
    handleChange?.({ name, value });
  }, [name, value, handleChange]);

  const fieldSizeVariants = {
    [styles.xs]: fieldSize === 'xs',
    [styles.sm]: fieldSize === 'sm',
    [styles.lg]: fieldSize === 'lg',
    [styles.xl]: fieldSize === 'xl',
    [styles.disabled]: disabled,
  };

  const isError = !disabled && errorMessage;

  return (
    <div className={cn(styles.textFieldContainer, fieldSizeVariants)}>
      {label && (
        <label className={styles.label} htmlFor={id ?? name}>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <div className={styles.inputContainer}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <input
          style={{ borderRadius: br, paddingLeft: icon ? 40 : undefined }}
          className={cn(styles.input, {
            [styles.inputError]: isError,
          })}
          id={id ?? name}
          type={type}
          value={value}
          onChange={handleValueChange}
          autoFocus={autoFocus}
          disabled={disabled}
          {...rest}
        />
      </div>
      {isError && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default memo(TextField);
