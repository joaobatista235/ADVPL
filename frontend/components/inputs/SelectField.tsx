// SelectField.tsx
import React, { Fragment } from 'react';
import { Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';
import { AlertCircle } from 'lucide-react';

const SelectField = ({ name, label, options, register, errors, disabled, value }: any) => (
  <div className='flex flex-col w-full '>
    <label>{label}</label>
    <FormControl fullWidth error={!!errors[name]}>
      <Select
        disabled={disabled}
        {...register(name)} // React Hook Form
        value={value || ''} // Passa o valor do select (com o watch)
      >
        {options.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  </div>
);

export default SelectField;
