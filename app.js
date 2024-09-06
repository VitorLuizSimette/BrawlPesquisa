function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
    
let campoPesquisa = document.getElementById
("campo-pesquisa").value

// se campoPesquisa for um strig sem nada
if (!campoPesquisa) {
  section.innerHTML = "<p>Nenhum brawler foi encontrado. Digite o nome do brawler ou alguma coisa relacionada diretamente a ele.</p>"
  return
}

campoPesquisa = campoPesquisa.toLowerCase()

// Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
<div class="item-resultado">
  <h2>
    <a href="#" target="_blank">${dado.titulo}</a>
  </h2>
  <p class="descricao-meta">${dado.descricao}</p>
  <a href=${dado.link} target="_blank">Mais informações</a>
</div>
`;
            }
      }
  
if (!resultados) {
  resultados = "<p><p>Nenhum brawler foi encontrado. Digite o nome do brawler ou alguma coisa relacionada diretamente a ele.</p>"
}


    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
  }