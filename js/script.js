/*burger menu for header*/
let header__button = document.querySelector('.header__button');
let header__list = document.querySelector('.header__list');
header__button.addEventListener('click', function(){
    header__button.classList.toggle('active');
    header__list.classList.toggle('active');
})

/*course-outline*/
$(document).ready(function(){
    $('.course-outline__list').slick({
        arrows:         false,
        slidesToShow:   3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        responsive:[
            {
                breakpoint: 850,
                settings: {
                    dots:true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})

/* testimonials*/
$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true
    });
});

/* mentors */
$(document).ready(function(){
    $('.mentors__list').slick({
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true
    });
});
