'use strict'

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           handleResponse(this.responseText);
        }
    };
    xhttp.open('GET', 'xmlhttp_info.txt', true);
    xhttp.send();
}

function handleResponse(response) {
    // capturando elemento do DOM
    let el = document.getElementsByTagName('section')[0];
    // colocando a resposta da requisição dentro da section 
    el.innerHTML = response;
    // criando novo elemento no DOM passando como parâmetro 
    newElement(el);
}

function newElement(el) {
    let parag;

    // criando Element <p>
    parag = document.createElement('p');
    // colocando texto no elemento contatenando com o atributo do elemento pai
    parag.innerHTML = `
        novo Element p com "${el.getAttribute('name')}" atributo do pai
    `;
    // colocando atributo classe e seu valor
    parag.setAttribute('class', 'criado');

    // posicionando elemento antes do elemento pai
    document.body.insertBefore(parag, el);
    // document.body.append(parag);
}