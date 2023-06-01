const Repositorios = require('../entitidades/Repositorios.js');
const atorRepository = require('../repositorios/Ator.js');
const fs = require('fs');
const data_repositories = JSON.parse(fs.readFileSync('src/data/repositories_202305081745.json', 'utf8'))

function searchRepository(nomeRepositorio, porPagina, quantidadeRepositorios ){
    porPagina = porPagina ? porPagina : 1;
    quantidadeRepositorios = quantidadeRepositorios ? quantidadeRepositorios : 1;
    nomeRepositorio = nomeRepositorio.toLowerCase();

    let repositorios_list = data_repositories.repositories;
    
    // buscar por nome 
    let repositorios = repositorios_list.filter(repo => repo.name.includes(nomeRepositorio))

    // paginar resultados
    if(porPagina || quantidadeRepositorios){
        let paginaAtual = porPagina;
        let resultadosPorPaginaAtual = quantidadeRepositorios;
        let totalResultados = repositorios.length;
        let totalPaginas = Math.ceil(totalResultados / resultadosPorPaginaAtual);
        repositorios = repositorios.slice((paginaAtual - 1) * resultadosPorPaginaAtual, paginaAtual * resultadosPorPaginaAtual);
    }

    repositorios = repositorios.map(repo => {
        let ator = atorRepository.getActorById(repo.owner.id);
        return new Repositorios(
            repo.id,
            repo.assignable_users,
            repo.code_of_conduct,
            repo.created_at,
            repo.database_id,
            repo.default_branch,
            repo.delete_branch_on_merge,
            repo.description,
            repo.disk_usage,
            repo.forks,
            repo.has_issues_enabled,
            repo.has_projects_enabled,
            repo.has_wiki_enabled,
            repo.homepage_url,
            repo.is_archived,
            repo.is_blank_issues_enabled,
            repo.is_disabled,
            repo.is_empty,
            repo.is_fork,
            repo.is_in_organization,
            repo.is_locked,
            repo.is_mirror,
            repo.is_private,
            repo.is_security_policy_enabled,
            repo.is_template,
            repo.is_user_configuration_repository,
            repo.issues,
            repo.labels,
            repo.languages,
            repo.license_info,
            repo.mentionable_users,
            repo.merge_commit_allowed,
            repo.milestones,
            repo.name,
            repo.name_with_owner,
            repo.open_graph_image_url,
            ator,
            repo.primary_language,
            repo.pushed_at,
            repo.pull_requests,
            repo.rebase_merge_allowed,
            repo.releases,
            repo.repository_topics,
            repo.squash_merge_allowed,
            repo.stargazers,
            repo.tags,
            repo.updated_at,
            repo.url,
            repo.uses_custom_open_graph_image,
            repo.vulnerability_alerts,
            repo.watchers)
    });

    return repositorios;
}

function getById(idRepositorio){
    let repositorios_list = data_repositories.repositories;
    let repositorio = repositorios_list.find(repo => repo.id === idRepositorio)
    if (repositorio) {
    let ator = atorRepository.getActorById(repositorio.owner.id);
    let repositorios = new Repositorios(
        repositorio.id,
        repositorio.assignable_users,
        repositorio.code_of_conduct,
        repositorio.created_at,
        repositorio.database_id,
        repositorio.default_branch,
        repositorio.delete_branch_on_merge,
        repositorio.description,
        repositorio.disk_usage,
        repositorio.forks,
        repositorio.has_issues_enabled,
        repositorio.has_projects_enabled,
        repositorio.has_wiki_enabled,
        repositorio.homepage_url,
        repositorio.is_archived,
        repositorio.is_blank_issues_enabled,
        repositorio.is_disabled,
        repositorio.is_empty,
        repositorio.is_fork,
        repositorio.is_in_organization,
        repositorio.is_locked,
        repositorio.is_mirror,
        repositorio.is_private,
        repositorio.is_security_policy_enabled,
        repositorio.is_template,
        repositorio.is_user_configuration_repository,
        repositorio.issues,
        repositorio.labels,
        repositorio.languages,
        repositorio.license_info,
        repositorio.mentionable_users,
        repositorio.merge_commit_allowed,
        repositorio.milestones,
        repositorio.name,
        repositorio.name_with_owner,
        repositorio.open_graph_image_url,
        ator,
        repositorio.primary_language,
        repositorio.pushed_at,
        repositorio.pull_requests,
        repositorio.rebase_merge_allowed,
        repositorio.releases,
        repositorio.repository_topics,
        repositorio.squash_merge_allowed,
        repositorio.stargazers,
        repositorio.tags,
        repositorio.updated_at,
        repositorio.url,
        repositorio.uses_custom_open_graph_image,
        repositorio.vulnerability_alerts,
        repositorio.watchers)

        return repositorios;
    }
}

module.exports = {
    getById,
    searchRepository
}