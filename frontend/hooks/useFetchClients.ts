// hooks/useFetchClients.ts
import { FormData } from '@/validations';
import axios from 'axios';
import { useQuery } from 'react-query';

interface ResponseClients {
  hasNext: number;
  items: FormData[];
  remainingRecords: number;
}

export const useFetchClients = (currentPage: number, itemsPerPage: number) => {
  const offset = currentPage

  return useQuery(['list-users', currentPage], async () => {
    const { data } = await axios.get('http://127.0.0.7:8091/restapi/clientes/listar', {
      headers: { Authorization: 'Basic YWRtaW46IA==' },
      params: { limit: itemsPerPage, offset: offset === 0 ? 1 : offset },
    });
    return data as ResponseClients
  });
};
