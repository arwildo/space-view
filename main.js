// scroll
$('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 3000);
    }
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

// nasa APIs
var url = "https://api.nasa.gov/planetary/apod?api_key=DrZ0rvpXxkznekZtUtea1GbO2e6chwGx6aC0h6wN";

$.ajax({
    url: url,
    success: function (result) {
        if ("copyright" in result) {
            $("#copyright").text("Image Credits: " + result.copyright);
        }
        else {
            $("#copyright").text("Image Credits: " + "Public Domain");
        }

        if (result.media_type == "video") {
            $("#apod_img_id").css("display", "none");
            $("#apod_vid_id").attr("src", result.url);
        }
        else {
            $("#apod_vid_id").css("display", "none");
            $("#apod_img_id").attr("src", result.url);
        }
        $("#returnObject").text(JSON.stringify(result, null, 4));
        $("#apod_explaination").text(result.explanation);
        $("#apod_title").text(result.title);
    }
});
window.onerror = function () {
    return true;
}


// GOOGLE ANALYTICS
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-51659765-2');