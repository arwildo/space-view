// scroll

$(function () {
    $('a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(e.target).attr("href")).offset().top
        }, 2000);
    });
});

// typing

document.addEventListener('DOMContentLoaded', function (event) {
    var dataText = ["SPACE VIEW",
        "Map to view space objects",
        "Click on the Moon or Mars to begin..."
    ];

    function typeWriter(text, i, fnCallback) {

        if (i < (text.length)) {
            document.getElementById("typing").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }

        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 3000);
        }
    }

    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 20000);
        }
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function () {
                StartTextAnimation(i + 1);
            });
        }
    }
    StartTextAnimation(0);
});