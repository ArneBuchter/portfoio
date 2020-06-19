let info = document.querySelector('.info');
let navInfo = document.querySelector('.nav__info');
let close = document.querySelector('.info__close');
let mobil = document.querySelector('.header__info');
let wrapper = document.querySelector('.info__wrapper');

navInfo.addEventListener('click', (e) => {
    e.preventDefault();
    if(!info.classList.contains('info__open')){
        info.classList.add('info__open');
        wrapper.classList.add('info__wrapper-on')
    }else{
        info.classList.remove('info__open');
        wrapper.classList.remove('info__wrapper-on')
    }
})

close.addEventListener('click', () => {
    info.classList.remove('info__open');
    wrapper.classList.remove('info__wrapper-on')
})

mobil.addEventListener('click', (e) => {
    e.preventDefault();
    if(!info.classList.contains('info__open')){
        info.classList.add('info__open');
        wrapper.classList.add('info__wrapper-on')
    }else{
        info.classList.remove('info__open');
        wrapper.classList.remove('info__wrapper-on')
    }
})
