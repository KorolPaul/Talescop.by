$(function () {

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

    /*Catalog*/
    $('.disabled').click(function (e) {
        e.preventDefault();
    });

    /*TABS*/
    $(".tabs_link").click(function (e) {
        e.preventDefault();
        var tab = $(this).index() + 1;
        $(".tabs_link").removeClass("tabs_link__active");
        $(this).addClass(".tabs_link__active");

        $(".tabs_content").fadeOut(500, function () {
            $(".tabs_content:nth("+tab+")").fadeIn(500);
        })
    });

    /*Product*/
    $('.slider').bxSlider({
        mode: 'vertical',
        pager: false,
        slideMargin: 5,
        minSlides: 4
    });

    $('.slider_link').click(function (e) {
        e.preventDefault();
        $('.gallery_image').attr('src', $(this).attr('href'));
    });

    $('.gallery_image').elevateZoom();

    $('.product_specs-all').click(function (e) {
        e.preventDefault();
        $(this).hide().next('.product_specs-hide').slideToggle(300);
    });

    $('.accessoirs_item').click(function () {
        $(this).toggleClass('accessoirs_item__active');
    });
});