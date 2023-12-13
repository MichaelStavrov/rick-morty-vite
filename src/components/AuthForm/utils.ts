import { FieldParams } from './types';

export const fieldPaparmsToFieldValues = (
  fields: FieldParams[]
): Record<string, string> => {
  return fields.reduce<Record<string, string>>(
    (acc, { name, initialValue = '' }) => {
      acc[name] = initialValue;

      return acc;
    },
    {}
  );
};

interface CheckErrorsProps {
  fieldValues: Record<string, string>;
  fields: FieldParams[];
  cb: (currentErrors: Record<string, string>) => void;
}

export const hasErrors = ({ fieldValues, fields, cb }: CheckErrorsProps) => {
  const currentErrors: Record<string, string> = {};

  const errors = Object.entries(fieldValues).filter(([key, value]) => {
    const currentField = fields.find((field) => field.name === key);

    if (currentField?.required && !value) {
      currentErrors[key] = currentField.errorMessage ?? '';
      return true;
    }
    return false;
  });

  cb(currentErrors);

  return errors.length > 0;
};
