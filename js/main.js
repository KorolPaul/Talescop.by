$(function () {
    
    /*BXSLIDER*/
    $(".slider").bxSlider({
        slideWidth: 500,    //������ ������
        slideMargin: 0,     //���������� ����� ��������
        mode: 'horizontal', //'horizontal', 'vertical', 'fade' - �������
        speed: 500,         //�� �������
        pager: false,       //�����������
        randomStart: false, //��������� 1-� �����
        auto: false,         //���� �������
        pause: 4000,        //������ ����� ������ ��������
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 2      //������� ������� �� ��� �������
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