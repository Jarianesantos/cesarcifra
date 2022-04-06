document.querySelector("main").addEventListener("submit", function(event){
    event.preventDefault();
  })

function codBase64(){
    var valorCod = btoa(document.getElementById("conteudo").value);
    document.getElementById("resultado").value = valorCod;
}
function decodBase64(){
    var valorDecod = atob(document.getElementById("resultado").value);
    console.log(valorDecodificado);
    document.getElementById("conteudo").value = valorDecod;
}