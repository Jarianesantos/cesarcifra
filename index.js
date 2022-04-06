// document.querySelector("main").addEventListener("radio", function(event){
//     event.preventDefault();
// })

//Funcionar os seletores
var selectCesar = document.querySelector("#selectCesar");

selectCesar.addEventListener("click", function(){
    var mostrarBotao = document.querySelector("#botoes");
    mostrarBotao.innerHTML = `
    <section class="baseBotoes">
    <input id="incremento" class="estIncrem" type="number">
    <button id="codif" class="estBotao">Codificar</button>
    <button id="decod" class="estBotao">Decodificar</button>
    </section>
    `
    var selectCodif = document.querySelector("#codif");

    selectCodif.addEventListener("click", function(){
        defTexto();
        defIncrem();
        cesarCod = "";
        console.log(cifraDeCesar1());
        var mostrarResult = document.querySelector("#resultado");
        mostrarResult.innerHTML = `<textarea class="caixa2" type="text">${cesarCod}</textarea>`
        console.log(mostrarResult);
    })

    var selectDecod = document.querySelector("#decod");

    selectDecod.addEventListener("click", function(){
        cesarCod = "";
        defTexto();
        defIncrem();
        var mostrarResult = document.querySelector("#resultado");
        mostrarResult.innerHTML = `<textarea class="caixa2" type="text" >${cifraDeCesar3()}</textarea>`
    })


})

var selectBase = document.querySelector("#selectBase");

selectBase.addEventListener("click", function(){
    var mostrarBotao = document.querySelector("div");
    mostrarBotao.innerHTML = `
    <section class="baseBotoes">
    <button id="codif" class="estBotao">Codificar</button>
    <button id="decod" class="estBotao">Decodificar</button>
    </section>
    `
    var selectCodif = document.querySelector("#codif");

    selectCodif.addEventListener("click", function(){
        defTexto();
        var baseCodif = btoa(texto);
        var mostrarResult = document.querySelector("#resultado");
        mostrarResult.innerHTML = `<textarea type="text" class="caixa2" >${baseCodif}</textarea>`
    })

    var selectDecod = document.querySelector("#decod");

    selectDecod.addEventListener("click", function(){
        defTexto();
        var baseDecod = atob(texto);
        var mostrarResult = document.querySelector("#resultado");
        mostrarResult.innerHTML = `<textarea type="text" class="caixa2" >${baseDecod}</textarea>`;
    })
})
var aleat = " ";
var texto = [];
var incremento = 0;
function defTexto(){
    cesarCod = "";

    texto = document.getElementById("conteudo").value;
    return texto;
}
function defIncrem(){
    incremento = 0;
    incremento = document.querySelector("#incremento").value
    return incremento;
}

//Cifra de Cesar - Codificar
var cesar = [];
var cesarCod = "";
var novoInc = 0;
function cifraDeCesar1(){
    if (parseInt(incremento) > 25 && parseInt(incremento)!= 26){
        novoInc = parseInt(incremento) % 26;
    } else {
        novoInc = parseInt(incremento);
    }
    cesar = [];
    for(var i = 0; i < texto.length; i++){
        if (texto.charCodeAt(i) == 32){
            cesar.push(texto.charCodeAt(i));
        } else {
            if (texto.charCodeAt(i) > 96 && texto.charCodeAt(i) < 123){
                if (texto.charCodeAt(i) + novoInc <= 96 || texto.charCodeAt(i) + novoInc >= 123){
                    cesar.push(texto.charCodeAt(i) - (26-novoInc))
                } else {
                cesar.push(texto.charCodeAt(i) + novoInc);
                }
            } else if (texto.charCodeAt(i) > 64 && texto.charCodeAt(i) < 91){
                if (texto.charCodeAt(i) + novoInc >= 91 || texto.charCodeAt(i) + novoInc <= 64){
                    cesar.push(texto.charCodeAt(i) - (26-novoInc))
                } else {
                cesar.push(texto.charCodeAt(i) + novoInc);
                }
            }
        }
    }

    cesarCod = "";
    for( var i = 0; i < cesar.length; i++){
        cesarCod += String.fromCharCode(cesar[i]).toString();
    }
    return cesarCod;
}
//Cifra de Cesar - Decodificar
var cesarDecod = "";
function cifraDeCesar3(){
    if (parseInt(incremento) > 25 && parseInt(incremento)!= 26){
        novoInc = parseInt(incremento) % 26;
    } else {
        novoInc = parseInt(incremento);
    }
    cesar = [];
    for(var i = 0; i < texto.length; i++){
        if (texto.charCodeAt(i) == 32){
            cesar.push(texto.charCodeAt(i));
        } else {
            if (texto.charCodeAt(i) > 96 && texto.charCodeAt(i) < 123){
                if (texto.charCodeAt(i) - novoInc <= 96 || texto.charCodeAt(i) - novoInc >= 123){
                    cesar.push(texto.charCodeAt(i) + (26-novoInc))
                } else {
                cesar.push(texto.charCodeAt(i) - novoInc);
                }
            } else if (texto.charCodeAt(i) > 64 && texto.charCodeAt(i) < 91){
                if (texto.charCodeAt(i) - novoInc >= 91 || texto.charCodeAt(i) - novoInc <= 64){
                    cesar.push(texto.charCodeAt(i) + (26-novoInc))
                } else {
                cesar.push(texto.charCodeAt(i) - novoInc);
                }
            }
        }
    }
    cesarDecod = "";
    for( var i = 0; i < cesar.length; i++){
        cesarDecod += String.fromCharCode(cesar[i]).toString();
    }
    return cesarDecod;
}
