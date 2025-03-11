# Documentação do Frontend em Next.js 🚀

## About

**Next.js** é um framework que facilita a criação de aplicativos React "universais" - aplicativos que fazem renderização tanto no lado do cliente quanto no servidor.

Com o Next.js, as páginas React são renderizadas automaticamente no cliente e no servidor, sem a necessidade de configurar dependências como **webpack** ou **babel**, com roteamento automático e sem as limitações de projetos como **Create React App**.

Este é um projeto inicial que fornece um exemplo de como usar o Next.js com **Express**, **SASS/SCSS**, **Bootstrap**, **Reactstrap** (Bootstrap 4 para React), o conjunto de ícones **Ionicons**, exemplos de como incluir dados de APIs REST remotas e incorporar um sistema de autenticação que suporta **oAuth** e **Email** usando **Passport** (um framework de autenticação popular para Node.js).

Este projeto existe para facilitar o início da criação de um aplicativo de produção em React. Você está convidado a usá-lo como referência ou copiá-lo e usá-lo como base para seus próprios projetos. Contribuições para melhorar este projeto são bem-vindas.

---

## Como Executar Localmente em Modo de Desenvolvimento

Para começar, basta clonar o repositório e executar os seguintes comandos:

```bash
git clone https://github.com/joaobatista235/ADVLP.git
cd ADVLP
npm install
npm run dev
```

---

# Documentação da API Protheus Clientes 📚

## Visão Geral

Esta API fornece endpoints para gerenciar clientes no sistema **Protheus**. A classe **TAB_CLIENTES** implementa métodos para listar, recuperar, atualizar, deletar e incluir registros de clientes.

---

## Classe: TAB_CLIENTES

### Endpoints

#### 1. Listar Todos os Clientes
- **Método**: `GET`
- **Endpoint**: `/clientes/listar`
- **Descrição**: Recupera uma lista de todos os clientes.
- **Requisitos Funcionais**:
  - Retorna um array JSON de clientes.
  - Deve filtrar registros excluídos (`D_E_L_E_T_ = ' '`).
- **Requisitos Não Funcionais**:
  - O tempo de resposta deve ser inferior a 200ms.
  - Suporta paginação (tamanho da página padrão: 30).
  - O endpoint pode receber um parâmetro `limit`, que irá limitar o número de registros retornados na resposta.
  - O endpoint pode receber um parâmetro `offset`, que irá controlar a paginação, definindo a partir de qual registro os dados serão retornados, permitindo a navegação entre as páginas de resultados.

#### 2. Obter Informações do Cliente
- **Método**: `GET`
- **Endpoint**: `/clientes/lista_cliente?codigo={?}&loja={?}`
- **Descrição**: Recupera informações de um cliente específico com base no `codigo` e `loja` fornecidos.
- **Requisitos Funcionais**:
  - Retorna um objeto JSON contendo os detalhes do cliente.
  - Deve retornar uma mensagem de erro se o cliente não for encontrado.
- **Requisitos Não Funcionais**:
  - O tempo de resposta deve ser inferior a 200ms.
  - Acesso seguro para prevenir a recuperação não autorizada de informações.

#### 3. Atualizar Cliente
- **Método**: `PUT`
- **Endpoint**: `/clientes/atualizar?codigo={?}&loja={?}`
- **Descrição**: Atualiza as informações de um cliente específico.
- **Requisitos Funcionais**:
  - Aceita um corpo JSON com os detalhes do cliente a serem atualizados.
  - Deve validar a existência do cliente antes da atualização.
- **Requisitos Não Funcionais**:
  - O tempo de resposta deve ser inferior a 200ms.
  - O tratamento de erros deve fornecer mensagens de erro significativas.

#### 4. Deletar Cliente
- **Método**: `DELETE`
- **Endpoint**: `/clientes/deletar?codigo={?}&loja={?}`
- **Descrição**: Deleta um cliente específico com base no `codigo` e `loja` fornecidos.
- **Requisitos Funcionais**:
  - Marca o registro do cliente como excluído, sem removê-lo fisicamente do banco de dados.
  - Deve retornar uma mensagem de sucesso após a exclusão bem-sucedida.
- **Requisitos Não Funcionais**:
  - O tempo de resposta deve ser inferior a 200ms.
  - Garantir a integridade dos dados durante as operações de exclusão.

#### 5. Incluir Cliente
- **Método**: `POST`
- **Endpoint**: `/clientes/incluir`
- **Descrição**: Adiciona um novo cliente ao sistema.
- **Requisitos Funcionais**:
  - Aceita um corpo JSON com todos os campos obrigatórios para criar um novo cliente.
  - Deve validar os dados de entrada antes da inclusão.
  - **Codificação**: O corpo da requisição deve ser tratado com codificação **WIN1252**, ao invés de UTF-8.
- **Requisitos Não Funcionais**:
  - O tempo de resposta deve ser inferior a 200ms.
  - O tratamento de erros deve fornecer mensagens de erro significativas.

- **Exemplo de Requisição**:
  ```json
  POST /clientes/incluir
  Content-Type: application/json; charset=WIN1254
  {
    "codigo": "B1",
    "loja": "01",
    "nome": "JOAO",
    "pessoa": "F",
    "endereco": "Rua das Flores, 123",
    "cep": "12345-678",
    "bairro": "Centro",
    "cidade": "ITAPETININGA",
    "estado": "SP",
    "cnpj": "37872595893",
    "status": "1",
    "tipo": "F",
    "email": "joaobatista@gmail.com",
    "ddd": "15",
    "telefone": "998394854",
    "pais": "023",
    "contato": "contato"
  }
  ```

- **Referência de Códigos de Países**:
  - [Lista de Códigos de Países](https://www.bcb.gov.br/acessoinformacao/legado?url=https:%2F%2Fwww.bcb.gov.br%2Frex%2FCenso2000%2Fport%2Fmanual%2Fpais.asp%3Fidpai%3DCENSOCE)

---

## Tratamento de Erros

Todos os métodos devem capturar exceções e retornar mensagens de erro apropriadas em formato JSON. As respostas de erro padrão incluem:

- **Código de Status**: `500`
- **Corpo**:
  ```json
  {
    "error": "Descrição do erro aqui"
  }
  ```

---

## Licença 📜

Este projeto está licenciado sob a **MIT License** - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ por [João Batista](https://github.com/joaobatista235).

  <br>
 <hr>
<div align="center">
    <picture>
      <img alt="Diagrama 1" src="/backend/assets/caso_e_uso.svg" height="128">
    </picture>
</div>


 <br>
 <hr>


<div align="center">
    <picture>
      <img alt="Diagrama 2" src="/backend/assets/diagrama_de_classes.svg" >
    </picture>
</div>
