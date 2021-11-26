function executar(){

    var texto= document.getElementById('texto').value;
    var lista = document.getElementById('historico');
    var adicionar= true;

    var opt = document.createElement('option');

    for(i=0; i<lista.options.length; i++){
        if(texto==lista.options[i].value){
            adicionar=false
        }
        if(adicionar==true){
            opt.value=texto;
            lista.appendChild(opt);
        }
    }

}
function click(){
    var teste = $("id").val();
    console.log(teste);
    debugger;



}