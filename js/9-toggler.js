var toggler = document.querySelector('.toggler');
var list = document.querySelector('.list');
var vertialList = document.querySelector('.main-nav');

toggler.addEventListener('click', (e) => {
    vertialList.classList.toggle('main-nav__expanded');
    list.classList.toggle('main-nav__expanded');
});
