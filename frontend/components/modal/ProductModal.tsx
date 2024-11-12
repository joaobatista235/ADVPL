import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Fade, Modal, Box } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import schema, { FormData } from '@/validations';
import useUserData from '@/hooks/useUserData';
import useAddressData from '@/hooks/useAddressData';
import InputField from '@/components/inputs/InputField';
import SelectField from '@/components/inputs/SelectField';
import MaskedInputField from '@/components/inputs/MaskedInputField';

interface AddProductModalProps {
  open: boolean;
  handleClose: () => void;
  user?: FormData | null;
  refresh: () => void;
}

const AddProductModal = ({ open, handleClose, user, refresh }: AddProductModalProps) => {
  const [showAddressFields, setShowAddressFields] = useState(false);

  const { register, handleSubmit, setValue, watch, formState: { errors, isDirty, isValid }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const cep = watch('cep');
  const pessoa = watch('pessoa');

  useUserData(user ?? undefined, setValue);
  useAddressData(cep, setValue, setShowAddressFields);

  const handleCloseModal = () => {
    reset();
    setShowAddressFields(false);
    handleClose();
  };

  const mutationOptions = {
    onError: () => {
      toast.error("Erro na operação!", { position: "bottom-right" });
      handleCloseModal();
    },
    onSuccess: () => {
      refresh();
      toast.success("Operação realizada com sucesso!", { position: "bottom-right" });
      handleCloseModal();
    }
  };

  const onSubmit = useMutation({
    mutationFn: async (data: FormData) => {
      const url = user ? `http://127.0.0.7:8091/restapi/clientes/atualizar?loja=${data.loja}&codigo=${data.codigo}` : 'http://127.0.0.7:8091/restapi/clientes/incluir';
      const method = user ? 'put' : 'post';
      await axios[method](url, data, {
        headers: { Authorization: 'Basic YWRtaW46IA==' }
      });
    },
    ...mutationOptions
  });

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        borderRadius: '8px',
        width: '700px',
        padding: '20px'
      }}>
        <h2 className="text-xl font-semibold mb-4">{user ? "Editar Cliente" : "Cadastrar Novo Cliente"}</h2>
        <form onSubmit={handleSubmit((data) => onSubmit.mutate(data))} className="flex flex-col gap-3">
          <div className="flex gap-3">
            <InputField name="nome" label="Nome" register={register} errors={errors} disabled={false} />
            <InputField name="codigo" label="Código" register={register} errors={errors} disabled={false} />
            <InputField name="loja" label="Loja" register={register} errors={errors} disabled={false} />
          </div>

          {/* Adicione os outros campos de forma similar */}
          <div className="flex gap-3">
            <SelectField
              name="pessoa"
              label="Pessoa"
              options={[
                { value: 'F', label: 'Física' },
                { value: 'J', label: 'Jurídica' }
              ]}
              register={register}
              errors={errors}
              disabled={false}
            />
            <MaskedInputField
              name="cnpj"
              label={pessoa === 'F' ? 'CPF' : 'CNPJ'}
              register={register}
              mask={pessoa === 'F' ? '999.999.999-99' : '99.999.999/9999-99'}
              errors={errors}
              disabled={false}
            />
          </div>
          <div className="flex gap-3">
            <InputField name="contato" label="Contato" register={register} errors={errors} disabled={false} />
            <MaskedInputField
              name="ddd"
              label="DDD"
              register={register}
              mask="99"
              errors={errors}
              disabled={false}
            />
            <MaskedInputField
              name="telefone"
              label="Telefone"
              register={register}
              mask="999999999"
              errors={errors}
              disabled={false}
            />
          </div>

          <div className="flex gap-3">
            <SelectField
              name="status"
              label="Status"
              options={[
                { value: '1', label: 'Ativo' },
                { value: '2', label: 'Inativo' }
              ]}
              register={register}
              errors={errors}
              disabled={false}
            />
            <SelectField
              name="tipo"
              label="Tipo"
              options={[
                { value: 'F', label: 'Fornecedor' },
                { value: 'L', label: 'Loja' },
                { value: 'R', label: 'Representante' },
                { value: 'S', label: 'Sistema' },
                { value: 'X', label: 'Cliente' }
              ]}
              register={register}
              errors={errors}
              disabled={false}
            />
          </div>

          <div className="flex gap-3">
            <InputField name="email" label="E-mail" register={register} errors={errors} disabled={false} />
            <InputField name="pais" label="País" register={register} errors={errors} disabled={false} />
          </div>

          <div className="flex gap-3">
            <MaskedInputField
              name="cep"
              label="CEP"
              register={register}
              mask="99999999"
              errors={errors}
            />
          </div>

          {showAddressFields && (
            <Fade in={showAddressFields} timeout={500}>
              <div className="flex gap-3 flex-col">
                <div className="flex gap-3">
                  <InputField name="endereco" register={register} errors={errors} disabled={false} />
                  <InputField name="bairro" register={register} errors={errors} disabled={false} />
                </div>
                <div className="flex gap-3">
                  <InputField name="cidade" register={register} errors={errors} disabled={false} />
                  <InputField name="estado" register={register} errors={errors} disabled={false} />
                </div>
              </div>
            </Fade>
          )}

          <Button type="submit" variant="contained" disabled={!isDirty || !isValid}>
            {user ? "Editar Cliente" : "Cadastrar Cliente"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddProductModal;
