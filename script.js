$(document).ready(function () {
    // ?We play with the scroll of the windows
    $(window).scroll(function () {
        // ?We style the navigator bar with the scroll
        if (this.scrollY > 30) {
            $('.navbar').addClass("navbar__sticky");
            console.log(scrollY);
        } else {
            $('.navbar').removeClass("navbar__sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // ?typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Develoment", "Design", "Automation"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["proactive.", "with self-taught ability.", "with quick learning.", "adaptable to assigned jobs."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

});






// // ////////////////////////////
// MODAL

let cerrar = document.querySelectorAll(".close-p")[0];
let abrir = document.querySelectorAll(".openModal")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];


abrir.addEventListener('click', (e) => {
    e.preventDefault();
    modalC.style.opacity = '1';
    modalC.style.visibility = 'visible';
    modal.classList.toggle('modal-close');
});

cerrar.addEventListener('click', () => {
    modalC.style.opacity = '0';
    modalC.style.visibility = 'hidden';
    modal.classList.toggle('modal-close');
});

window.addEventListener('click', (e) => {
    if (e.target == modalC) {
        modalC.style.opacity = '0';
        modalC.style.visibility = 'hidden';
        modal.classList.toggle('modal-close');

    }
});