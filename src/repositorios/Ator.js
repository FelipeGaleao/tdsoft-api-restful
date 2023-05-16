const Atores = require('../entitidades/Atores.js');
const fs = require('fs');
const data_atores = JSON.parse(fs.readFileSync('src/data/actors_202305081744.json', 'utf8'))

function getActorById(idAtor){
    let atores_list = data_atores.actors;
    let ator = atores_list.find(actor => actor.id === idAtor);
    if (ator) {
        let atores = new Atores(
            ator.id,
            ator.type,
            ator.login,
            ator.avatar_url
        )
        return atores;
    }
    return null;
}

module.exports = { getActorById };