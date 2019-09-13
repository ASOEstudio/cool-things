var input;
var label;
var copyInput;
init();

function init() {
    this.input = document.getElementById('data');
    this.label = document.getElementById('label');
    this.copyInput = document.getElementById('copyBox');
    console.log('iniciado');
}

function replace() {
    // para o primeiro termo que corresponde ao parâmetro
    // this.label.innerHTML = this.input.value.replace('palavão', '***');
    
    // para todos os termos que correspondam "g" para buscar de forma global 
    this.label.innerHTML = this.input.value.replace(/palavão/g, '***');

    this.input.value = '';
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