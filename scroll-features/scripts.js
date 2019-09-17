'use strict';

(function() {

    // setando elementos no DOM
    var elHeader = document.querySelector('header'),
        elMain = document.querySelector('main'),
        elFooter = document.querySelector('footer'),
        elCopyFooter = document.querySelector('.footer__copy');

    // sai da função se o elemento não existir
    if(!elHeader && !elMain && !elFooter && !elCopyFooter) return true;

    // elMain.style.top = elHeader.clientHeight;
    elCopyFooter.innerHTML = `copyright &copy; ${new Date().getFullYear()}`;

    // setando variáveis para scroll
    var docHeight = 0,
        winHeight = 0,
        winScrollCurrent = 0,
        winScrollBefore = 0;

    window.addEventListener('scroll', function() {

        // setando elementos no DOM
        docHeight = document.body.scrollHeight;
        winHeight = window.innerHeight;
        winScrollCurrent = window.pageYOffset;
        
        // scroll movido para baixo
        if (winScrollCurrent > 0) {
            elHeader.classList.remove('header--page-top');
            elMain.classList.add('main--page-top');

            // verifica se o scroll continua indo para baixo
            if (winScrollBefore < winScrollCurrent) {
                winScrollBefore = winScrollCurrent;
                
                elHeader.classList.remove('header--show');
                elHeader.classList.add('header--hidden');

                elFooter.classList.remove('footer--hidden');
                elFooter.classList.add('footer--show');
            }
            // verifica se o scroll começou a ir para cima
            else {
                winScrollBefore = winScrollCurrent;

                elHeader.classList.remove('header--hidden');
                elHeader.classList.add('header--show');

                elFooter.classList.remove('footer--show');
                elFooter.classList.add('footer--hidden');
            }
        }
        // scroll '0' no topo da página
        else {
            elHeader.classList.remove('header--hidden');
            elHeader.classList.add('header--show', 'header--page-top');

            elMain.classList.remove('main--page-top');
        };

        // verifica se a página chegou ao final
        if (docHeight == winHeight + winScrollCurrent) {
            elCopyFooter.classList.remove('footer__copy--hidden');
            elCopyFooter.classList.add('footer__copy--show');

        } else {
            elCopyFooter.classList.remove('footer__copy--show');
            elCopyFooter.classList.add('footer__copy--hidden');
        }
    })
}());

function scrollToTop() {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
}