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

    // 200 - Buscar um único repositório
    describe('GET /repos/find', function() {
        it('Buscar repo - Sem qtde de páginas, sem limite por paginas', function(done) {
            request(app).get('/repos/find')
            .query({ nome: 'new-pac' })
            .end(function(err, res) {
                assert.equal(res.statusCode, 200);
                assert.equal(res.body[0].name, "new-pac");
                done();
            });
        })});

   // 200 - Informar o nome do repositório
       describe('GET /repos/find', function() {
        it('Buscar repo - Buscar um único resultado', function(done) {
            request(app).get('/repos/find')
            .query({ nome: 'react'})
            .end(function(err, res) {
                assert.equal(res.statusCode, 200);
                assert.equal(res.body.length, 1);
                done();
            });
        })});

    // 200 - Buscar por 10 repositórios
    describe('GET /repos/find', function() {
        it('Buscar repo - Buscar por 10 repositórios', function(done) {
            request(app).get('/repos/find')
            .query({ nome: 'react', por_pagina: 10 })
            .end(function(err, res) {
                assert.equal(res.statusCode, 200);
                assert.equal(res.body.length, 10);
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