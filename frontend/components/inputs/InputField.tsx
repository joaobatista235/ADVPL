// InputField.tsx
import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ name, label, register, errors, disabled }: any) => (
  <TextField
    disabled={disabled}
    {...register(name)}
    label={label}
    error={!!errors[name]}
    helperText={errors[name]?.message}
    fullWidth
  />
);

export default InputField;
