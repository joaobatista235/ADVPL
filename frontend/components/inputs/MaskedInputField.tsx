// MaskedInputField.tsx
import React, { Fragment } from 'react';
import { TextField } from '@mui/material';
import InputMask from 'react-input-mask';

const MaskedInputField = ({ name, label, register, mask, errors, disabled }: any) => (
  <div className='flex flex-col w-full'>
    <label>{label}</label>
    <InputMask
    mask={mask}
    {...register(name)}
    disabled={disabled}
  >
    {(inputProps: any) => (
      <TextField
        {...inputProps}
        error={!!errors[name]}
        helperText={errors[name]?.message}
        fullWidth
      />
    )}
  </InputMask>
  </div>
);

export default MaskedInputField;
