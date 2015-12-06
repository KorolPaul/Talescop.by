$(function () {

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

    $('.slider').bxSlider({
        mode: 'vertical',
        pager: false,
        slideMargin: 5
    });
});