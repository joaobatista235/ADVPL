import React, { useEffect, useState } from 'react';
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
  const [dataValue, setDataValue] = useState<FormData>({} as FormData)
  console.log(dataValue)

  const { register, handleSubmit, setValue, watch, formState: { errors, isDirty, isValid }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const cep = watch('cep');
  const pessoa = watch('pessoa');
  const watchType = watch('tipo')
  const watchStatus = watch('status')

  useUserData(user ?? undefined, setDataValue);
  useAddressData(cep, setValue, setShowAddressFields);

  const handleCloseModal = () => {
    reset();
    setShowAddressFields(false);
    handleClose();
    setDataValue({} as FormData)
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

  const limparCpfCnpj = (str: string) => {
    return str.replace(/[.\-/]/g, '');
  };
  
  const onSubmit = useMutation({
    mutationFn: async (data: FormData) => {
      // Limpar o CNPJ antes de enviar
      if (data.cnpj) {
        data.cnpj = limparCpfCnpj(data.cnpj);
      }
  
      const url = user 
        ? `http://127.0.0.7:8091/restapi/clientes/atualizar?loja=${data.loja}&codigo=${data.codigo}` 
        : 'http://127.0.0.7:8091/restapi/clientes/incluir';
      
      const method = user ? 'put' : 'post';
      console.log(data)
      await axios[method](url, data, {
        headers: { Authorization: 'Basic YWRtaW46IA==' }
      });
    },
    ...mutationOptions
  });

  useEffect(() => {
    if (dataValue) {
     setValue("bairro", dataValue?.bairro)
     setValue("cep", dataValue?.cep)
     setValue("cidade", dataValue?.cidade)
     setValue("cnpj", dataValue?.cnpj)
     setValue("codigo", dataValue?.codigo)
     setValue("contato", dataValue?.contato)
     setValue("ddd", dataValue?.ddd)
     setValue("email", dataValue?.email)
     setValue("endereco", dataValue?.endereco)
     setValue("estado", dataValue?.estado)
     setValue("loja", dataValue?.loja)
     //@ts-ignore
     setValue("nome", dataValue?.razao)
     setValue("pais", dataValue?.pais)
     setValue("pessoa", dataValue?.pessoa)
     setValue("status", dataValue?.status)
     setValue("telefone", dataValue?.telefone)
     setValue("tipo", dataValue?.tipo)
    }
   }, [dataValue])
  

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
              value={pessoa}
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
              value={watchStatus}
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
              value={watchType}
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
            <InputField name="pais" label="País" hasLink register={register} errors={errors} disabled={false} />
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

          {Object.entries(dataValue).length > 0 && (
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
