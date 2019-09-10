init();

function init() {
    const hour = new Date().getHours();
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    const isNotSpecified = window.matchMedia('(prefers-color-scheme: no-preference)').matches;
    const hasNotSupport = !isDarkMode && !isLightMode && !isNotSpecified;
    
    console.log('verificando a Media Query "prefers-color-scheme": é dark = ', isDarkMode, ' é light = ', isLightMode, ' não é definido ', isNotSpecified, ' não é suportado ', hasNotSupport);
    
    if (hasNotSupport || isNotSpecified) {
        if (hasNotSupport) {
            const element = document.getElementsByTagName('button')[0];
            element.setAttribute('disabled', 'true');
            console.log(element);
        }

        if (hour < 6 || hour >= 12) nightMode();
    }
}

function themeSchemeButton() {
    console.log('função do botão');
    const element = document.querySelector(':root');
    element.classList.toggle('dark-mode');
    console.log(element);
}

// navegadores que não suportam classList
function nightMode() {
    console.log('função pelo horário')
    const element = document.getElementsByTagName('body')[0];
    element.className += ' night-mode';
    console.log(element);
}