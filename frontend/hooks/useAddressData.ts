// useAddressData.ts
import { useEffect } from 'react';
import axios from 'axios';

const useAddressData = (cep: string, setValue: any, setShowAddressFields: (show: boolean) => void) => {
  useEffect(() => {
    const fetchAddressData = async () => {
      if (cep?.length === 8) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          const { logradouro, bairro, localidade, uf } = response.data;
          setValue('endereco', logradouro);
          setValue('bairro', bairro);
          setValue('cidade', localidade);
          setValue('estado', uf);
          setShowAddressFields(true);
        } catch (error) {
          console.error("Erro ao buscar dados do CEP:", error);
        }
      } else {
        setShowAddressFields(false);
      }
    };
    fetchAddressData();
  }, [cep, setValue, setShowAddressFields]);
};

export default useAddressData;
