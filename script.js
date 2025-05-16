let Pizzaria = [];
// let pizzaParaAlterar = null;

function mostrarSecao(secao) {
    // esconde todas as secoes
    document.getElementById("cadastro").classList.add("hidden");

    //mostrar a seçao selecionada 
    document.getElementById(secao).classList.remove("hidden");
}
function criarCadastro() {
    const nome = document.getElementById("nome").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const descricao = document.getElementById("descricao").value;

    if (nome && preco && descricao) {
      Pizzaria.push({ nome, preco, descricao });
      document.getElementById("nome").value = "";
      document.getElementById("preco").value = "";
      document.getElementById("descricao").value = "";
    //   atualizarLista();
      document.getElementById("cadastro").innerHTML = ("Pizza adicionada com sucesso!");

}
}