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
    let data = res.AvailabilitySummary.AvailabilitySummaryCarrier,
        parser = new DOMParser(),
        // tableBase = '<table><thead></thead><tbody></tbody></table>',
        table = '',
        lines = '';
        // rows = '';

    // table = parser.parseFromString(tableBase, 'text/xml');

    // for (let i = 0; i <= data.length; i++) {
    //     if(i < data.length) {
    //         lines += `<tr><td>${data[i].ValidatingCarrier}</td></tr>`;
    //         // console.log(lines, i);

    //     } else {
    //         rows = parser.parseFromString(lines, 'text/xml');
    //         // console.log('chegou no fim', rows);
            
    //         let x = table.getElementsByTagName('tbody')[0],
    //             y = table.getElementsByTagName('thead')[0];

    //         x.insertAdjacentHTML('afterbegin', y);

    //         console.log(rows);
    //         console.log(x);
    //     }
    // }

    for (let i = 0; i <= data.length; i++) {
        if (i == 0) {
            lines += '<table><thead><th><td>teste</th></td></thead><tbody>';
        } else if (i < data.length) {
            lines += `<tr><td>${data[i].ValidatingCarrier}</td></tr>`;
            // console.log(lines, i);

        } else {
            lines += '</tbody></table>';

            table = parser.parseFromString(lines, 'text/html');
            console.log(lines);
            console.log(table);

            let tableEl = table.getElementsByTagName('table')[0];
            console.log(tableEl);

            secEl.insertAdjacentElement('afterbegin', tableEl);
        }
    }

    // data.forEach((row, i = index) => {
    //     if (i < data.length) {
    //         lines += `<tr><td>${row.ValidatingCarrier}</td></tr>`;
    //         console.log(lines, i);
    //     }
    // })

    // console.log(table);
    // console.log(rows);
}