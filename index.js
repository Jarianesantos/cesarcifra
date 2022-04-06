// document.querySelector("main").addEventListener("radio", function(event){
//     event.preventDefault();
// })

//Funcionar os seletores
var selectCesar = document.querySelector("#selectCesar");

selectCesar.addEventListener("click", function(){
    var mostrarBotao = document.querySelector("#botoes");
    mostrarBotao.innerHTML = `
    <input id="incremento" type="number">
    <button id="codif">Codificar</button>
    <button id="decod">Decodificar</button>
    `
    console.log(texto);

    var selectCodif = document.querySelector("#codif");

    selectCodif.addEventListener("click", function(){
    texto = [];
    defTexto();
    console.log(defTexto());
    defIncrem();
    console.log(defIncrem());
    cesarCod = "";
    console.log(cifraDeCesar1());
    if (defIncrem() > 0 && defIncrem() < 7){
        var mostrarResult = document.querySelector("#resultado");
        mostrarResult.innerHTML = `<h1>Resultado: ${cesarCod}</h1>`
        cesarCod = aleat;
    } else {
        alert("Incremento limite de 0 até 6, coloque novamente")
        location.reload();
    }
    })

    var selectDecod = document.querySelector("#decod");

    selectDecod.addEventListener("click", function(){
        cesarCod = "";
        defTexto();
        defIncrem();
        console.log(cifraDeCesar3());
        if (defIncrem() > 0 && defIncrem() < 7){
            var mostrarResult = document.querySelector("#resultado");
            mostrarResult.innerText = `Resultado : ${cesarCod}`
        } else {
            alert("Incremento limite de 0 até 6, coloque novamente")
            location.reload();
        }
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
        mostrarResult.innerText = `Resultado : ${baseCodif}`
    })

    var selectDecod = document.querySelector("#decod");

    selectDecod.addEventListener("click", function(){
        defTexto();
        var baseDecod = atob(texto);
        var mostrarResult = document.querySelector("#resultado");
        mostrarResult.innerText = `<h1>Resultado: ${baseDecod}</h1>`;
    })
})
var aleat = " ";
var texto = [];
var incremento = 0;
function defTexto(){
    cesarCod = "";
    // texto = document.querySelector("#conteudo").value
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
    cesarCod = "";
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
    cesarCod = "";
    for( var i = 0; i < cesar.length; i++){
        cesarCod += String.fromCharCode(cesar[i]).toString();
    }
    return cesarCod;
}
