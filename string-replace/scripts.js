var input;
var label;
var copyInput;
this.init();

function init() {
    this.input = document.getElementById('data');
    this.label = document.getElementById('label');
    this.copyInput = document.getElementById('copyBox');

    // adiciona um eventListener no input
    // this.eventInput();

    console.log('iniciado');
}

function replace() {
    // para o primeiro termo que corresponde ao parâmetro
    // this.label.innerHTML = this.input.value.replace('palavão', '***');
    
    // para todos os termos que correspondam "g" para buscar de forma global 
    // this.label.innerHTML = this.input.value.replace(/palavão/g, '***');

    this.input.value = '';
}

function replaceCPF() {
    // antes de executar o replace testa se ainda tem algum caracter que não seja números
    let text = this.input.value.match(/[./-]/g);
    if (text == null) {
        console.log('não tem caracter especial');

        // para sequencia de números "cria máscara de CPF"
        // "$num" captura grupo como um array
        // "?" faz com que o grupo deja opcional
        this.label.innerHTML = this.input.value.replace(
            /(\d{3})?(\d{3})?(\d{3})?(\d{2})?/,
            "$1.$2.$3-$4"
        );
    
    } else {
        console.log('tem caracter especial', text);
        this.label.innerHTML = 'por favor use apenas números';
    }
}

function eventInput() {
    // quando o input perder o foco é limpo os ".", "-" e "/"
    this.input.addEventListener('focusout', (event) => {
        const data = event.target.value;
        this.input.value = data.replace(/[./-]/g, '');
    })
}

// function execute() {
//     this.label.innerHTML = this.input.value;
// }

function copyText() {
    // console.log(this.copyInput.value);
    // copiando o texto para o clipboard
    navigator.clipboard.writeText(this.copyInput.value);
}

function pasteText() {
    // colando o texto para do clipboard
    navigator.clipboard.readText()
        .then(text => this.input.value = text);
}

function clearAccents() {
    this.label.innerHTML = this.input.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}