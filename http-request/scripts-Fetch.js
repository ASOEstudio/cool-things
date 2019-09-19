'use strict'

var myHeaders = new Headers({
    "Content-Type": "text/plain",
    "Content-Length": content.length.toString(),
    "X-Custom-Header": "ProcessThisImmediately",
});

function loadFetch() {
    fetch('cd_catalog.xml',
        { method: 'GET', headers: myHeaders, mode: 'cors', cache: 'default' })
    .then(res => {
        // verifica se o retorno está OK
        if (res.ok) {
            console.log('sem problema', res)
            res.text()
            .then(
                res => console.log(res),
                // nem chega aqui quando há erro
                // err => console.log('deu erro', err),
            );

        } else console.log('com problema, erro', res.status.toString());
    })
}