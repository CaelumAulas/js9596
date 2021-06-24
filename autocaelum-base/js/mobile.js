const btnMobile = document.querySelector('.btn-mobile');
btnMobile.addEventListener('click', function() {
    btnMobile.nextElementSibling.classList.toggle('active');
});