window.onload = () => {
    inptEmail.oninput = () => {
        if ('!#$%ˆ&*()'.indexOf(inptEmail.value.charAt(inptEmail.value.length - 1)) >= 0) {
            console.log('Removendo ' + inptEmail.value.charAt(inptEmail.value.length - 1));
            inptEmail.value = inptEmail.value.substr(0, inptEmail.value.length - 1);
        }
        inptEmail.value = inptEmail.value.toLowerCase();
    }
}

const botaoCadastrar = document.getElementById("btnCadastrar");
botaoCadastrar.addEventListener("click", main);

function main() {
    const dadosCadastro = resgataDados();
    salvaCadastro(dadosCadastro);
}

function resgataDados() {
    var teste = localStorage.getItem('email');
    var teste2 = document.getElementById('inptEmail').value;
    if (teste == teste2) {
        return {
            email: document.getElementById("inptEmail").value,
            senha: document.getElementById("inptSenha").value
        }
    }
    else {
        window.alert("Email não consta no banco de dados.");
    };
}

function salvaCadastro(dados) {
    try {
        localStorage.setItem("email", dados.email);
        localStorage.setItem("senha", dados.senha);
    } catch (erro) {
        window.alert("Erro: " + erro);
    }
}