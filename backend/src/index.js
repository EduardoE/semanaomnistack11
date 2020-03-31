const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());  // Ao colocar em produção, definir o link da aplicação front que irá acessar
app.use(express.json());
app.use(routes);

app.listen(3334);