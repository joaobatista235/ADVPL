const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middleware padrão
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Rota GET (clientes)
server.get('/clientes', (req, res) => {
  res.status(200).json(router.db.get('clientes').value());
});

// Rota GET (pegar um cliente específico)
server.get('/lista_cliente', (req, res) => {
  const { loja, codigo } = req.query; // Pegando os parâmetros da query string

  // Busca o cliente no banco de dados
  const cliente = router.db
    .get('clientes')
    .find({ loja, codigo })
    .value();

  if (cliente) {
    res.status(200).json(cliente); // Retorna o cliente encontrado
  } else {
    res.status(404).json({ message: 'Cliente não encontrado' }); // Retorna erro se não encontrar
  }
});

// Rota POST (incluir cliente)
server.post('/clientes/incluir', (req, res) => {
  const newCliente = req.body;
  const clientes = router.db.get('clientes');

  // Simula a inclusão do cliente
  clientes.push(newCliente).write();
  res.status(201).json(newCliente);
});

// Rota PUT (atualizar cliente)
server.put('/clientes/atualizar', (req, res) => {
  const { loja, codigo } = req.query;
  const updatedData = req.body;

  const cliente = router.db
    .get('clientes')
    .find({ loja, codigo })
    .value();

  if (cliente) {
    // Atualiza os dados do cliente
    Object.assign(cliente, updatedData);
    router.db.write();
    res.status(200).json(cliente);
  } else {
    res.status(404).json({ message: "Cliente não encontrado" });
  }
});

// Rota DELETE (deletar cliente)
server.delete('/clientes/deletar', (req, res) => {
  const { loja, codigo } = req.query;

  // Encontra o índice do cliente a ser removido
  const clienteIndex = router.db
    .get('clientes')
    .findIndex({ loja, codigo })
    .value();

  if (clienteIndex !== -1) {
    // Remove o cliente do banco de dados
    router.db.get('clientes').splice(clienteIndex, 1).write();
    res.status(200).json({ message: 'Cliente removido com sucesso' });
  } else {
    res.status(404).json({ message: 'Cliente não encontrado' });
  }
});

// Inicia o servidor
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server está rodando na porta 5000');
});
