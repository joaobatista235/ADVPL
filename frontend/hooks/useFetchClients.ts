// hooks/useFetchClients.ts
import { FormData } from '@/validations';
import axios from 'axios';
import { useQuery } from 'react-query';

export const useFetchClients = (currentPage: number, itemsPerPage: number) => {
  const offset = (currentPage - 1) * itemsPerPage;

  return useQuery(['list-users', currentPage], async () => {
    const { data } = await axios.get('http://127.0.0.7:8091/restapi/clientes', {
      headers: { Authorization: 'Basic YWRtaW46IA==' },
      params: { limit: itemsPerPage, offset },
    });
    return data as FormData[];
  });
};
