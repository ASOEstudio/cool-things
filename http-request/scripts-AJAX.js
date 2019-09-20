'use strict'

// capturando elemento do DOM
var secEl = document.getElementsByTagName('section')[0];

function loadAjax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    };
    xhttp.open('GET', 'cd_catalog.xml', true);
    xhttp.send();
}

function callback(response) {
    var i,
        parser = new DOMParser(),
        xmlDoc = parser.parseFromString(response, 'text/xml'),
        table = `<table><thead>
            <tr><th>Artist</th><th>Title</th></tr>
        </thead><tbody>`,
        x = xmlDoc.getElementsByTagName('CD');

    for (i = 0; i < x.length; i++) {
        // table += '<tr><td>' +
        //     x[i].getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue +
        //     '</td><td>' +
        //     x[i].getElementsByTagName('TITLE')[0].childNodes[0].nodeValue +
        //     '</td></tr>';

        // criando e populando a tabela
        if (i + 1 == x.length) {
            table += '</tbody></table>'
        } else {
            table += `
            <tr><td>${x[i].getElementsByTagName('ARTIST')[0].innerHTML}</td>
            <td>${x[i].getElementsByTagName('TITLE')[0].innerHTML}</td></tr>`;
        }
    }

    // colocando a tabela dentro da section
    secEl.innerHTML = table;
}