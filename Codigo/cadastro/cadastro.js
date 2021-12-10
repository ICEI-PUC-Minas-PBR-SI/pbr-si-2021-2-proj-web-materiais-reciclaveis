var botaoCadastro = document.getElementById("btnCadastrar");
botaoCadastro.addEventListener("click", main);

function main() {
    if (!localStorage.getItem("cadastros")) {
        preencheLocalStorageVazio();
    }
    console.log(localStorage);
    const dadosCadastro = resgataDados();
    salvaCadastro(dadosCadastro);
}

function preencheLocalStorageVazio() {
    let arrayCadastros = [];
    localStorage.setItem("cadastros", JSON.stringify(arrayCadastros));
}

function resgataDados() {
    return {
        nomeCompleto: document.getElementById("inptNome").value,
        email: document.getElementById("inptEmail").value,
        senha: document.getElementById("inptSenha").value,
    };
}

function salvaCadastro(dados) {
    let cadastro = {
        nomeCompleto: dados.nomeCompleto,
        email: dados.email,
        senha: dados.senha,
    };
    let cadastros = JSON.parse(localStorage.getItem("cadastros"));
    cadastros.push(cadastro);
    localStorage.setItem("cadastros", JSON.stringify(cadastros));
    console.log(cadastros);
}
