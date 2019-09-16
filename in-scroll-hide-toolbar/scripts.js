(function() {
    'use strict';

    // setando elementos no DOM
    var elHeader = document.querySelector('header'),
        elMain = document.querySelector('main');

    // sai da função se o elemento não existir
    if(!elHeader) return true;

    elMain.style.top = elHeader.clientHeight;
    
    console.log('altura do header', elHeader.clientHeight);
    console.log('top main', elMain.style.top);

    // setando variáveis para scroll
    var docHeight = 0,
        winHeight = 0,
        winScrollCurrent = 0;
        // winScrollDiff = 0,
        // winScrollBefore = 0;

    window.addEventListener('scroll', function() {

        // setando elementos no DOM
        docHeight = document.body.offsetHeight;
        winHeight = window.innerHeight;
        winScrollCurrent = window.pageYOffset;
        // winScrollDiff = winScrollBefore - winScrollCurrent;

        console.log('docHeight', docHeight, 'winHeight', winHeight,
            'winScrollCurrent', winScrollCurrent); //, 'winScrollDiff', winScrollDiff
    })

}());