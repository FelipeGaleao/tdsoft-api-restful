const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/server.js'];

swaggerAutogen(outputFile, endpointsFiles);