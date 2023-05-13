const express = require('express');
const fs = require('fs');
const router = express.Router();
const file_repositories = JSON.parse(fs.readFileSync('src/data/repositories_202305081745.json', 'utf8'))


router.get('/repos/find', (req, res) => {
    let repositorios = file_repositories.repositories;
    let nomeRepositorio = req.query.nome;
    if (!nomeRepositorio) {
      body = {
        "mensagem": "Nome é obrigatório"
      }
      return res.status(400).send(body)
    }
    let repositorio = repositorios.find(repo => repo.name === nomeRepositorio)
    if (repositorio) {
      body = repositorio
      return res.status(200).send(body)
    }
    return res.status(404).send({})
  })
  
  router.get('/repos/:repoId', (req, res) => {
    let repositorios = file_repositories.repositories;
    let idRepositorio = req.params.repoId;
    let repositorio = repositorios.find(repo => repo.id === idRepositorio)
    if (repositorio) {
      body = repositorio
      return res.status(200).send(body)
    }
    return res.status(404).send({})
  })

  
module.exports = router;