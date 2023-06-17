var btnToTop = document.createElement('button');
btnToTop.className = 'btn-to-top flex-center-center';

var btnArrowTop = document.createElement('i');
btnArrowTop.className = 'fi fi-rr-arrow-small-up';

btnToTop.appendChild(btnArrowTop);

btnToTop.addEventListener('click', function(){
    window.scroll(0,0);
});

document.addEventListener('scroll', function(){
    if (window.scrollY > 10) {
        btnToTop.style.display = 'flex'
    } else {
        btnToTop.style.display = 'none';
    }
})

document.body.appendChild(btnToTop);