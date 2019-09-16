(function() {
    var elHeader = document.querySelector('header'),
        elMain = document.querySelector('main');

    elMain.style.top = elHeader.clientHeight;
    
    console.log('altura do header', elHeader.clientHeight);
    console.log('top main', elMain.style.top);

}());