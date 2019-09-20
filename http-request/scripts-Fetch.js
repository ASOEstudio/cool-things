'use strict'

var secEl = document.getElementsByTagName('section')[0],
    myHeaders = new Headers({
    'Content-Type': 'text/xml',
    'Content-Length': content.length.toString(),
    'X-Custom-Header': 'ProcessThisImmediately',
});

function loadFetch() {
    fetch('cd_catalog.xml',
        { method: 'GET', headers: myHeaders, mode: 'cors', cache: 'default' }
    )
    .then(res => {
        // verifica se o retorno está OK
        if (res.ok) {
            res.text()
            .then(
                res => console.log(res),
                // nem chega aqui quando há erro
                // err => console.log('deu erro', err),
            );

        } else console.log('com problema, erro', res.status.toString());
    })
    .catch(err => {
        console.log('Fetch Error :-S', err);
    });
}

function loadFetchJson() {
    fetch('json_mock.json',
        { method: 'GET', headers: myHeaders, mode: 'cors', cache: 'default' }
    )
    .then(res => {
        // verifica se o retorno está OK
        if (res.ok) res.json().then(data => handler(data))
        else console.log('com problema, erro', res.status.toString());
    })
    .catch(err => {
        console.log('Fetch Error :-S', err);
    });
}

function handler(res) {
    let data = res.AvailabilitySummary.AvailabilitySummaryCarrier;

    console.log(data);
}