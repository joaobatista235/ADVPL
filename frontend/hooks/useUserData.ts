// useUserData.ts
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FormData } from '@/validations';

const useUserData = (user: FormData | undefined, setValue: any) => {
  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;
      try {
        const { data } = await axios.get(`http://127.0.0.7:8091/restapi/lista_cliente?loja=${user.loja}&codigo=${user.codigo}`, {
          headers: { Authorization: 'Basic YWRtaW46IA==' }
        });
        Object.entries(data).forEach(([key, value]) => setValue(key, value));
      } catch (error) {
        toast.error("Erro ao buscar o cliente", { position: "bottom-right" });
      }
    };
    fetchUserData();
  }, [user, setValue]);
};

export default useUserData;
