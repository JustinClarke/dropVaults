$(document).ready(function () {

    // jquery to open and close modal
    $(document).on('click', '[data-toggle=modal]', function () {
        $($(this).attr('data-target')).toggleClass('hidden');
    });
    $(document).on('click', '[data-dismiss=modal]', function () {
        $(this).closest('.modal').toggleClass('hidden');
    });
    
    // faq section
    $('.collapse-target').hide();
    $(document).on('click', '.collapse-trigger', function () {
        $(this).toggleClass('after-plus after-minus');
        $(this).next().slideToggle();
        return false;
    });

    // toggle mobile menu
    $('[data-toggle="toggle-nav"]').on('click', function () {
        $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
        return false;
    });

    // feather icons
    feather.replace();

    // smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]');

    // tiny slider
    $('#slider-1').slick({
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    $('#slider-2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        customPaging: function (slider, i) {
            return '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
        },
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, ]
    });
});