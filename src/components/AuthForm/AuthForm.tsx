import React, { FC, useState, useCallback } from 'react';

import Button from '../Button';
import TextField from '../TextField';
import { HandleChangeProps } from '../TextField/types';
import { hasErrors, fieldPaparmsToFieldValues } from './utils';
import { AuthFormType, FieldParams } from './types';
import styles from './AuthForm.module.scss';

interface AuthFormProps {
  type: AuthFormType;
  fields: FieldParams[];
  onSubmit: (values: Record<string, string>) => void;
}

const AuthForm: FC<AuthFormProps> = ({ onSubmit, fields, type }) => {
  const [fieldValues, setFieldValues] = useState(() =>
    fieldPaparmsToFieldValues(fields)
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = useCallback(({ name, value }: HandleChangeProps) => {
    setFieldValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isInvalid = hasErrors({
      fieldValues,
      fields,
      cb: (currentErrors) => setErrors(currentErrors),
    });

    if (isInvalid) return;

    onSubmit(fieldValues);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {fields.map((fieldProps) => (
        <TextField
          key={fieldProps.name}
          handleChange={handleChange}
          setErrors={({ name, value }: HandleChangeProps) =>
            setErrors((prev) => ({
              ...prev,
              [name]: value,
            }))
          }
          {...fieldProps}
          errorMessage={errors[fieldProps.name]}
        />
      ))}
      <div className={styles.submitBtn}>
        <Button type='submit'>
          {type === 'signIn' ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
