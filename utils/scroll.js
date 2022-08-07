const scrollButtom = document.querySelector('#scroll-top');

scrollButtom.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})

document.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
        scrollButtom.style.visibility = 'visible';

    } else {
        scrollButtom.style.visibility = 'hidden';
    }
});