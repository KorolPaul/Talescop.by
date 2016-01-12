$(function () {

    $('.footer_up').click(function (e) {
        e.preventDefault();

        $("html, body").animate({ scrollTop: 0 }, '400');
    });
    $('.catalog-menu_title').click(function () {
        $(this).next().slideToggle(300);
    });


    /*Popup*/
    $('#js-call, #js-city').click(function (e) {
        e.preventDefault();
        $('.fade').show();
        $('.' + $(this).attr('id')).show();
    });
    $('.fade, .popup_close').click(function (e) {
        e.preventDefault();
        $('.fade').fadeOut(200);
        $('.popup').fadeOut(200);
    });
    $('.price').click(function (e) {
        e.preventDefault();
        $('.fade').show();
        $('.js-cart').show();
    });

    /*Catalog*/
    $('.disabled').click(function (e) {
        e.preventDefault();
    });

    $('.filters_section-title').click(function () {
        $(this).next().stop().slideToggle(200);
    });

    /*TABS*/
    $(".tabs_link").click(function (e) {
        e.preventDefault();
        var tab = $(this).index();
        $(".tabs_link").removeClass("tabs_link__active");
        $(this).addClass("tabs_link__active");

        $(".tabs_content").stop().fadeOut(500, function () {
            $(".tabs_content:nth(" + tab + ")").stop().fadeIn(500);
        })
    });

    /*Product*/
    $('.slider').bxSlider({
        mode: 'vertical',
        pager: false,
        slideMargin: 5,
        minSlides: 4
    });

    $('.gallery_link').magnificPopup({
        type: 'image',
        titleSrc: 'title',
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }
    });
    $('.gallery__inline').magnificPopup({
        delegate: 'a',
        type: 'image',
        titleSrc: 'title',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }
    });

    $('.slider_link').click(function (e) {
        e.preventDefault();
        $('.gallery_link').attr('href', $(this).attr('href'));
        $('.gallery_image').attr('src', $(this).attr('href'));
    });

    $('.product_specs-all').click(function (e) {
        e.preventDefault();
        $(this).hide().next('.product_specs-hide').slideToggle(300);
    });

    $('.accessoirs_item').click(function () {
        $(this).toggleClass('accessoirs_item__active');
    });
});