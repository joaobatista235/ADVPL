// InputField.tsx
import React, { Fragment } from 'react';
import { TextField } from '@mui/material';
import { AlertCircle } from 'lucide-react';

const InputField = ({ name, label, register, errors, disabled, hasLink = false }: any) => (
  <div className='flex flex-col w-full'>
    <label title='Acesse o site com os códigos dos países' className='flex items-center gap-2'>
    {label}
    {hasLink && (
      <a href="https://www.bcb.gov.br/acessoinformacao/legado?url=https:%2F%2Fwww.bcb.gov.br%2Frex%2FCenso2000%2Fport%2Fmanual%2Fpais.asp%3Fidpai%3DCENSOCE" target='_blank'>
        <AlertCircle className='w-3 h-3' />
      </a>
    )}
    </label>
    <TextField
    disabled={disabled}
    {...register(name)}
    error={!!errors[name]}
    helperText={errors[name]?.message}
    fullWidth
    variant='outlined'
  />
  </div>
);

export default InputField;
