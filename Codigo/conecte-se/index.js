/* CADASTRO RECEBER MATERIAL */

const botaoCadastrarReceber = document.getElementById("btnCadastrarReceber");
botaoCadastrarReceber.addEventListener("click", cadastroReceber);


function cadastroReceber(){
    const dadosCadastro = resgataDados();
    salvaCadastro(dadosCadastro);
}

function resgataDados(){
    return {
        nomeCompletoReceber: document.getElementById("inptNome").value,
        emailReceber: document.getElementById("inptEmail").value,
        enderecoReceber: document.getElementById("inptEndereco").value,
        cepReceber: document.getElementById("inptCep").value,
        cidadeReceber: document.getElementById("inptCidade").value,
        telefoneReceber: document.getElementById("inptTelefone").value,
    }
}

function salvaCadastro(dadosReceber){
    if (dadosReceber.nomeCompletoReceber == "") {
        
    }

    else if (dadosReceber.emailReceber == "") {
        
    }

    else if (dadosReceber.enderecoReceber == "") {
        
    }

    else if (dadosReceber.cepReceber.length < 8) {
        
    }

    else if (dadosReceber.cidadeReceber == "") {
        
    }

    else if (dadosReceber.telefoneReceber.length < 11) {
        
    }

    else {

    try{
        localStorage.setItem("nomeCompletoReceber", dadosReceber.nomeCompletoReceber);
        localStorage.setItem("emailReceber", dadosReceber.emailReceber);
        localStorage.setItem("enderecoReceber", dadosReceber.enderecoReceber);
        localStorage.setItem("cepReceber", dadosReceber.cepReceber);
        localStorage.setItem("cidadeReceber", dadosReceber.cidadeReceber);
        localStorage.setItem("telefoneReceber", dadosReceber.telefoneReceber);
    }catch(erro){
        window.alert("Erro: " + erro);
    }
}
}




/* CADASTRO DOAR MATERIAL */


const botaoCadastrarDoar = document.getElementById("btnCadastrarDoar");
botaoCadastrarDoar.addEventListener("click", cadastroDoar);

function cadastroDoar(){
    const dadosCadastroDoar = resgataDadosDoar();
    salvaCadastroDoar(dadosCadastroDoar);
}

function resgataDadosDoar(){
    return {
        nomeCompletoDoar: document.getElementById("inptNomeDoar").value,
        emailDoar: document.getElementById("inptEmailDoar").value,
        cidadeDoar: document.getElementById("inptCidadeDoar").value,
        tipoMaterialDoar: document.getElementById("inptTipoMaterialDoar").value,
        telefoneDoar: document.getElementById("inptTelefoneDoar").value,
    }
}

function salvaCadastroDoar(dadosDoar){
    if (dadosDoar.nomeCompletoDoar == "") {
        
    }

    else if (dadosDoar.emailDoar == "") {
        
    }

    else if (dadosDoar.cidadeDoar == "") {
        
    }

    else if (dadosDoar.tipoMaterialDoar == "") {
        
    }

    else if (dadosDoar.telefoneDoar.length < 11) {
        
    }

    else {
    try{
        localStorage.setItem("nomeCompletoDoar", dadosDoar.nomeCompletoDoar);
        localStorage.setItem("emailDoar", dadosDoar.emailDoar);
        localStorage.setItem("cidadeDoar", dadosDoar.cidadeDoar);
        localStorage.setItem("tipoMaterialDoar", dadosDoar.telefoneDoar);
        localStorage.setItem("telefoneDoar", dadosDoar.tipoMaterialDoar);
    }catch(erro){
        window.alert("Erro: " + erro);
    }
}
}