$(document).ready(function () {
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }

    // $("#portfolio .row .item").each(function () {
    //     if (isScrolledIntoView(this) === true) {
    //         if (!$(this).hasClass("animate__animated animate__fadeInUp")) {
    //             $(this).removeClass("hidden")
    //             $(this).addClass("animate__animated animate__fadeInUp");
    //         }
    //     }
    // });

    $("#portfolio .row .item").each(function () {
        if (isScrolledIntoView($("#portfolio")) === true) {
            if (!$(this).hasClass("animate__animated animate__fadeInUp")) {
                $(this).removeClass("hidden")
                $(this).addClass("animate__animated animate__fadeInUp");
            }
        }
    });
    
    // If element is scrolled into view, fade it in
    $(window).scroll(function () {
        $("#portfolio .row .item").each(function () {
            if (isScrolledIntoView($("#portfolio")) === true) {
                if (!$(this).hasClass("animate__animated animate__fadeInUp")) {
                    $(this).removeClass("hidden")
                    $(this).addClass("animate__animated animate__fadeInUp");
                }
            }
        });
    });
});