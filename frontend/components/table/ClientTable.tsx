// components/ClientTable.tsx
import { FormData } from '@/validations';
import axios from 'axios';
import React from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

interface ClientTableProps {
  clients: FormData[];
  onViewClient: (client: FormData) => void;
  refresh: () => void;
}

const getStatusStyle = (status: string) => {
  switch (status) {
    case '1': return 'bg-green-200 text-green-700';
    case '2': return 'bg-red-200 text-red-700';
    default: return '';
  }
};

const formatStatusName = (status: string) => {
  switch (status) {
    case '1': return 'Ativo';
    case '2': return 'Inativo';
    default: return '';
  }
}

const ClientTable: React.FC<ClientTableProps> = ({ clients, onViewClient, refresh }) => {
  const mutationOptions = {
    onError: () => {
      toast.error("Erro na operação!", { position: "bottom-right" });
    },
    onSuccess: () => {
      refresh();
      toast.success("Operação realizada com sucesso!", { position: "bottom-right" });
    }
  };

  const handleDelete = useMutation({
    mutationFn: async (data: FormData) => {
      const url = `http://127.0.0.7:8091/restapi/clientes/deletar?loja=${data.loja}&codigo=${data.codigo}`
      const method = 'delete';
      await axios[method](url, {
        headers: { Authorization: 'Basic YWRtaW46IA==' }
      });
    },
    ...mutationOptions
  });

  return (
    <div className="bg-white shadow-md rounded-lg overflow-x-auto max-w-full">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            {['Código', 'Bairro', 'CEP', 'Cidade', 'CNPJ', 'Contato', 'DDD', 'E-mail', 'Endereço', 'Estado', 'Loja', 'Nome', 'País', 'Pessoa', 'Telefone', 'Tipo', 'Status', 'View', 'Delete'].map((header) => (
              <th key={header} className="py-2 px-4 text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {clients.length > 0 ? (
            clients.map((client) => (
              <tr key={client.codigo} className="border-b">
                <td className="py-3 px-4">{client.codigo}</td>
                <td className="py-3 px-4">{client.bairro}</td>
                <td className="py-3 px-4">{client.cep}</td>
                <td className="py-3 px-4">{client.cidade}</td>
                <td className="py-3 px-4">{client.cnpj}</td>
                <td className="py-3 px-4">{client.contato}</td>
                <td className="py-3 px-4">{client.ddd}</td>
                <td className="py-3 px-4">{client.email}</td>
                <td className="py-3 px-4">{client.endereco}</td>
                <td className="py-3 px-4">{client.estado}</td>
                <td className="py-3 px-4">{client.loja}</td>
                <td className="py-3 px-4">{client.nome}</td>
                <td className="py-3 px-4">{client.pais}</td>
                <td className="py-3 px-4">{client.pessoa}</td>
                <td className="py-3 px-4">{client.telefone}</td>
                <td className="py-3 px-4">{client.tipo}</td>
                <td className="py-3 px-4">
                  <span className={`px-8 py-1 rounded-full text-xs font-medium ${getStatusStyle(client.status)}`}>
                    {formatStatusName(client.status)}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-400" onClick={() => onViewClient(client)}>
                    view
                  </button>
                </td>
                <td className="py-3 px-4">
                  <button className="text-red-400" onClick={() => handleDelete.mutate(client)}>
                    delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={17} className="py-3 px-4 text-center">Nenhum cliente encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ClientTable;
