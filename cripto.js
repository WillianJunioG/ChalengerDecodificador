var textinput =document.querySelector("#input__texto");
var output = document.querySelector("#output");


function criptografar(){

    var texto = textinput.value;
    if (texto.match('[A-Z]')){
        alert('Apenas letras minúsculas e sem acento')
    } else {

    var resultCripto = texto.replace(/e/g , "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");


    document.getElementById("output").innerHTML = '<textarea readonly id="input__texto">' + resultCripto;
    
    }
}

function descriptografar(){

    var texto = textinput.value;

    if (texto.match('[A-Z]')){
        alert('Apenas letras minúsculas e sem acento')
    } else {

    var resultDescripto = texto.replace(/enter/g , "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");


    document.getElementById("output").innerHTML = '<textarea readonly id="input__texto">' + resultDescripto ;
    
    }
}

function copiar(){

    const output = document.getElementById("output");
    const texto = output.textContent;

    const textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999);

    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Texto copiado !');

    textinput.value = '';

}




