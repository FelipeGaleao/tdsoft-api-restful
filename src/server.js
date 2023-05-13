const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const unique_repository = require('./data/unique_repository.json')

app.get('/repos/find', (req, res) => {
  let nomeRepositorio = req.query.nome;
  if (!nomeRepositorio) {
    body = {
      "mensagem": "Nome é obrigatório"
    }
    return res.status(400).send(body)
  }
  
  body =  {
    "id": "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
    "name": "facebook/react"
  }
  return res.status(200).send(body)
  
})

app.get('/repos/:repoId', (req, res) => {
  let idRepositorio = req.params.repoId;
  if(idRepositorio){
  body = unique_repository
   return res.status(200).send(body)
  }
  return res.status(400).send({})
})


app.listen(port, () => {
  console.log(`Aplicação sendo executada na porta: ${port}`)
})

module.exports = app;