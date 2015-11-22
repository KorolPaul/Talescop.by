$(function () {
    
    /*BXSLIDER*/
    $(".slider").bxSlider({
        slideWidth: 500,    //ширина слайда
        slideMargin: 0,     //расстояние между слайдами
        mode: 'horizontal', //'horizontal', 'vertical', 'fade' - переход
        speed: 500,         //ну понятно
        pager: false,       //пэйджинатор
        randomStart: false, //рандомный 1-й слайд
        auto: false,         //тоже понятно
        pause: 4000,        //ппауза между сменой слайдера
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 2      //сколько слайдов за раз двигать
    });

    /*TABS*/
    $(".tab-menu a").click(function () {
        var tab = $(this).parent().index() + 1;
        $(".tab-menu a").removeClass("active");
        $(this).addClass("active");
        $(".tabs>div").fadeOut(500, function () {
            $(".tabs div.tab-" + tab + "").fadeIn(500);
        })
    });

   
});