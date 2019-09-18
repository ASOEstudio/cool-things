'use strict'

// capturando elemento do DOM
var secEl = document.getElementsByTagName('section')[0];

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            handleResponse(this.responseText);
            XMLParser(this.responseText);
        }
    };
    xhttp.open('GET', 'xmlhttp_info.txt', true);
    xhttp.send();
}

// método de parser para DOM
function XMLParser(response) {
    var parser = new DOMParser(),
        xmlDoc = parser.parseFromString(response, 'text/xml');
    
    // newElement(xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue);
    newElement(xmlDoc.getElementsByTagName("title")[0].innerHTML);
}

function handleResponse(response) {
    // colocando a resposta da requisição dentro da section 
    secEl.innerHTML = response;
    // criando novo elemento no DOM
    textDescription();
    newElement();
}

function textDescription() {
    let divEl;

    divEl = document.createElement('div');
    divEl.innerHTML = `
        <p>With the XMLHttpRequest object you can update parts of a web page,
            without reloading the whole page.</p>
        <p>The XMLHttpRequest object is used to exchange data
            with a server behind the scenes.</p>
    `;
    divEl.setAttribute('class', 'criado criado--desc');

    // document.body.insertBefore(divEl, secEl);
    secEl.insertAdjacentHTML('afterbegin', divEl.outerHTML);
}

function newElement(item) {
    let parag;

    // criando Element <p>
    parag = document.createElement('p');
    // colocando texto no elemento contatenando com o atributo do elemento pai

    if (item) parag.innerHTML = item
    else parag.innerHTML = `
            novo Element p com "${secEl.getAttribute('name')}" atributo do pai
        `;
    // colocando atributo classe e seus valores
    parag.setAttribute('class', 'criado criado--destaque');

    console.log(parag.outerHTML);

    // posicionando elemento antes do elemento pai
    // document.body.insertBefore(parag, secEl);
    // document.body.append(parag);

    // posicionando elemento dentro do pai no início
    secEl.insertAdjacentHTML('beforeend', parag.outerHTML);
}