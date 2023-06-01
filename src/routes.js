const express = require('express');
const fs = require('fs');
const router = express.Router();
const repositoryRepository = require('./repositorios/Repositorio.js');

router.get('/repos/find', (req, res) => {
    let nomeRepositorio = req.query.nome;
    let pagina = req.query.pagina ? req.query.pagina : 1;
    let resultadosPorPagina = req.query.por_pagina ? req.query.por_pagina : 1;

    if(pagina < 1 || pagina > 25){
      body = {
        "mensagem": "Ocorreu um erro na busca. A página deve ser um número entre 1 e 25"
      }
      return res.status(400).send(body)
    }

    if(nomeRepositorio.length < 3){
      body = {
        "mensagem": "Nome é obrigatório"
      }
      return res.status(400).send(body)
    }
    if(nomeRepositorio.length > 30){
      body = {
        "mensagem": "O nome do repositório deve ter no máximo 30 caracteres"
      }
      return res.status(400).send(body)
    }
    if (!nomeRepositorio) {
      body = {
        "mensagem": "Nome é obrigatório"
      }
      return res.status(400).send(body)
    }
    let repositoriosEncontrados = repositoryRepository.searchRepository(nomeRepositorio, pagina, resultadosPorPagina);
    if (repositoriosEncontrados) {
      body = repositoriosEncontrados
      return res.status(200).send(body)
    }    
    return res.status(404).send(null)
  })
  
  router.get('/repos/:repoId', (req, res) => {
    let idRepositorio = req.params.repoId;
    let repositorio_encontrado = repositoryRepository.getById(idRepositorio);
    if (repositorio_encontrado) {
      body = repositorio_encontrado
      return res.status(200).send(body)
    }
    return res.status(404).send(null)
  })

  
module.exports = router;