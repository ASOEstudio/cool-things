var hour = new Date().getHours();
if (hour < 6 || hour >= 15) {
    nightMode();
    console.log('verificou o horário');

    /* caso o script estiver sendo executado antes do DOM ser montado
    
    setTimeout(() => {
        console.log('é mais de 15 horas')
        themeSchemeChange();
    }, 500);
    */
}

function themeSchemeChange() {
    console.log('chegou na função')
    var element = document.querySelector('body');
    element.classList.toggle('dark-mode');
}

function nightMode() {
    console.log('chegou na função')
    var element = document.querySelector('body');
    element.classList.toggle('night-mode');
}