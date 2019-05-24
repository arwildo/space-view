$(function () {
    $('a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(e.target).attr("href")).offset().top
        }, 2000);
    });
});