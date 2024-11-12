// SelectField.tsx
import React from 'react';
import { Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';

const SelectField = ({ name, label, options, register, errors, disabled }: any) => (
  <FormControl fullWidth error={!!errors[name]}>
    <InputLabel>{label}</InputLabel>
    <Select
      disabled={disabled}
      {...register(name)}
      label={label}
    >
      {options.map((option: any) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
    <FormHelperText>{errors[name]?.message}</FormHelperText>
  </FormControl>
);

export default SelectField;
