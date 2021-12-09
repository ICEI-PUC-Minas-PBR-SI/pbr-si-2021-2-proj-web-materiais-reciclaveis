var botaoCadastro = document.getElementById("btnCadastrar");
botaoCadastro.addEventListener("click", main);

function main() {
    const dadosCadastro = resgataDados();
    salvaCadastro(dadosCadastro);
}

function resgataDados() {
    return {
        nomeCompleto: document.getElementById("inptNome").value,
        email: document.getElementById("inptEmail").value,
        senha: document.getElementById("inptSenha").value,
    };
}

function salvaCadastro(dados) {
    try {
        localStorage.setItem("nomeCompleto", dados.nomeCompleto);
        localStorage.setItem("email", dados.email);
        localStorage.setItem("senha", dados.senha);
    } catch (erro) {
        window.alert("Erro: " + erro);
    }
}
