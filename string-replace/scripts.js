var input;
var label;
init();

function init() {
    this.input = document.getElementById('data');
    this.label = document.getElementById('label');
    console.log('iniciado');
}

function replace() {
    this.label.innerHTML = this.input.value.replace('palavão', '***');
    this.input.value = '';
}

// function execute() {
//     this.label.innerHTML = this.input.value;
// }
