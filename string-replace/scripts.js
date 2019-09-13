function execute() {
    const input = document.getElementById('data');
    const label = document.getElementById('label');
    
    label.innerHTML = input.value;
    console.log(input.value);
}