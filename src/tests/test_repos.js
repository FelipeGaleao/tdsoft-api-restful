var assert = require('assert');
var request = require('supertest');
var app = require('../server.js');

// Teste de integração para o endpoint /repos/find 
    // 400 - Não informar o nome do repositório 
    describe('GET /repos/find', function() {
        it('Buscar repo - Nome não informado', function(done) {
            request(app).get('/repos/find')
            .end(function(err, res) {
                assert.equal(res.statusCode, 400);
                assert.equal(res.body.mensagem, "Nome é obrigatório");
                done();
            });
        })});

    // 200 - Informar o nome do repositório
    describe('GET /repos/find', function() {
        it('Buscar repo - Nome informado', function(done) {
            request(app).get('/repos/find')
            .query({ nome: 'new-pac' })
            .end(function(err, res) {
                assert.equal(res.statusCode, 200);
                assert.equal(res.body.name, "new-pac");
                done();
            });
        })});

// Teste de integração para o endpoint /repos/:repoId
    // 200 - Informar o id do repositório
    describe('GET /repos/:repoId', function() {
        it('Buscar repo - Id informado', function(done) {
            request(app).get('/repos/MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==')
            .end(function(err, res) {
                assert.equal(res.statusCode, 200);
                assert.equal(res.body.id, "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==");
                done();
            });
        })});