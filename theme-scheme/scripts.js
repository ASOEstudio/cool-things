const hour = new Date().getHours();
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
const isNotSpecified = window.matchMedia('(prefers-color-scheme: no-preference)').matches;
const hasNotSupport = !isDarkMode && !isLightMode && !isNotSpecified;

console.log('verificando a Media Query "prefers-color-scheme": é dark = ', isDarkMode, ' é light = ', isLightMode, ' não é definido ', isNotSpecified, ' não é suportado ', hasNotSupport);

if (hasNotSupport) {
    if (hour < 6 || hour >= 18) nightMode();
    // console.log('verificou o horário');

    /* caso o script estiver sendo executado antes do DOM ser montado

    setTimeout(() => {
        themeSchemeChange();
    }, 500);
    */
}

function themeSchemeButton() {
    console.log('função do botão')
    const element = document.querySelector('body');
    element.classList.toggle('dark-mode');
}

function nightMode() {
    console.log('função pelo horário')
    const element = document.querySelector('body');
    element.classList.toggle('night-mode');
}