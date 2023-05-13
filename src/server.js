const express = require('express')
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes.js');

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(require('./swagger_output.json')));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Aplicação sendo executada na porta: ${port}`)
})

module.exports = app;