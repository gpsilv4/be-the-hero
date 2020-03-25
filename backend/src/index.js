const express = require('express');//é um pacote
const cors = require('cors');
const routes = require('./routes');//passa o caminho relativo ./ pq é um ARQUIVO, não é um pacote

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * Rota / Recursos
 * 
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Eliminar uma informação no back-end
 * 
 * 
 * Tipos de parâmetros
 * Query Parems: Parâmetros momeados enviados na rota "?" (Filtros, paginação)
 * Route Parems: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoBD, CouchDB, etc
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
