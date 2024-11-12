// MaskedInputField.tsx
import React from 'react';
import { TextField } from '@mui/material';
import InputMask from 'react-input-mask';

const MaskedInputField = ({ name, label, register, mask, errors, disabled }: any) => (
  <InputMask
    mask={mask}
    {...register(name)}
    disabled={disabled}
  >
    {(inputProps: any) => (
      <TextField
        {...inputProps}
        label={label}
        error={!!errors[name]}
        helperText={errors[name]?.message}
        fullWidth
      />
    )}
  </InputMask>
);

export default MaskedInputField;
