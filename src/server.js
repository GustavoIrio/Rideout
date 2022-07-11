const express = require('express');
const routes = require('./routes');

require('./database'); // importando a base de dados

const app = express();

app.use(express.json()); // saber lidar com requisições JSON
app.use(routes); // utilizando as rotas declaradas

const port = 3333
app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
    console.log(`CTRL + Clique em http://localhost:${port}`);
  });