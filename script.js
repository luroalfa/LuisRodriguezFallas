$(document).ready(function () {
    // ?We play with the scroll of the windows
    $(window).scroll(function () {
        // ?We style the navigator bar with the scroll
        if (this.scrollY > 30) {
            $('.navbar').addClass("navbar__sticky");
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




    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Development.", "Design.", "Automation."],
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


}