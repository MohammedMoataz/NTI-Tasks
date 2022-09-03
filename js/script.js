$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        item: 2,
        loop: true,
        margin: 40,
        nav: true,
        navText: ['<i class="fa-solid fa-arrow-left-long text-primary custom-icon-class"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    })
})

floatingBtn = document.getElementById('floating-btn')
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500)
        floatingBtn.style.display = 'block'

    else
        floatingBtn.style.display = 'none'

})