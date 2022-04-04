
//Funcionar os seletores
var selectCesar = document.querySelector("#selectCesar");

selectCesar.addEventListener("click", function(){
    var mostrarBotao = document.querySelector("#botoes");
    mostrarBotao.innerHTML = `
    <input id="incremento" type="number">
    <button id="codif">Codificar</button>
    <button id="decod">Decodificar</button>
    `
    defTexto();
    console.log(defTexto());

    var selectCodif = document.querySelector("#codif");

    selectCodif.addEventListener("click", function(){
    defIncrem();
    console.log(defIncrem());
    console.log(cifraDeCesar1());
    console.log(cifraDeCesar2());
    var mostrarResult = document.querySelector("#resultado");
    mostrarResult.innerText = `Resultado : ${cesarCod}`
    })

    var selectDecod = document.querySelector("#decod");

    selectDecod.addEventListener("click", function(){
        defIncrem();
        console.log(defIncrem());
        console.log(cifraDeCesar3());
        console.log(cifraDeCesar2());
        var mostrarResult = document.querySelector("#resultado");
        mostrarResult.innerText = `Resultado : ${cesarCod}`
    })


})

var selectBase = document.querySelector("#selectBase");

selectBase.addEventListener("click", function(){
    var mostrarBotao = document.querySelector("div");
    mostrarBotao.innerHTML = `
    <button id="codif">Codificar</button>
    <button id="decod">Decodificar</button>
    `
    var selectCodif = document.querySelector("#codif");

    selectCodif.addEventListener("click", function(){
        defTexto();
        var baseCodif = btoa(texto);
        var mostrarResult = document.querySelector("#resultado");
        mostrarResult.innerText = `Resultado : ${baseCodif}`
    })

    var selectDecod = document.querySelector("#decod");

    selectDecod.addEventListener("click", function(){
        defTexto();
        var baseDecod = atob(texto);
        var mostrarResult = document.querySelector("#resultado");
        mostrarResult.innerText = `Resultado: ${baseDecod}`;
    })
})
  
var texto = [];
var incremento = 0;
function defTexto(){
    texto = document.querySelector("#conteudo").value
    return texto;
}
function defIncrem(){
    incremento = document.querySelector("#incremento").value
    return incremento;
}

//Cifra de Cesar - Codificar
var cesar = [];
var cesarCod = [];
function cifraDeCesar1(){
    for(var i = 0; i < texto.length; i++){
        if (texto.charCodeAt(i) == 32){
            cesar.push(texto.charCodeAt(i));
        } else {
            if (texto.charCodeAt(i) + parseInt(incremento) >= 91 && texto.charCodeAt(i) + parseInt(incremento) <= 96){
                cesar.push(texto.charCodeAt(i) - (26-parseInt(incremento)))
            } else if (texto.charCodeAt(i) + parseInt(incremento) >= 123){
                cesar.push(texto.charCodeAt(i) - (26-parseInt(incremento)))
            } else
            cesar.push(texto.charCodeAt(i) + parseInt(incremento));
        }
    }
    return cesar; 
}
function cifraDeCesar2(){
    for( var i = 0; i < cesar.length; i++){
        cesarCod += String.fromCharCode(cesar[i]).toString();
    }
    return cesarCod;
}
//Cifra de Cesar - Decodificar
function cifraDeCesar3(){
    for(var i = 0; i < texto.length; i++){
        if (texto.charCodeAt(i) == 32){
            cesar.push(texto.charCodeAt(i));
        } else {
            if (texto.charCodeAt(i) - parseInt(incremento) >= 91 && texto.charCodeAt(i) - parseInt(incremento) <= 96){
                cesar.push(texto.charCodeAt(i) + (26-parseInt(incremento)))
            } else if (texto.charCodeAt(i) - parseInt(incremento) <= 64){
                cesar.push(texto.charCodeAt(i) + (26-parseInt(incremento)))
            } else
                cesar.push(texto.charCodeAt(i) - parseInt(incremento));
        }
    }
    return cesar; 
}
