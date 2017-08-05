$(window).on('load', function() {
  $('.load').delay(3000).slideUp(1000).fadeOut(1000);
});
$(function() {
    // All Variable
    var slider = $(".slider"),
        sliderUl = slider.find("ul"),
        sliderUlLi = sliderUl.find("li"),
        sliderOl = slider.find("ol"),
        sliderOlLi = sliderOl.find("li"),
        controlFa = $(".control .fa"),
        sliderTime = 1000,
        autoPlay;

    sliderUl.append("<li>" + sliderUlLi.first().html() + "</li>");
    sliderUl.prepend("<li>" + sliderUlLi.last().html() + "</li>");

    // All Functions
    function runSlider() {
        if (sliderOlLi.hasClass("active")) {
            sliderUl.animate(
                {
                    marginLeft:
                        -sliderUlLi.width() * ($(".slider .active").index() + 1)
                },
                sliderTime
            );
        }
    }
    function addActive(param) {
        param.addClass("active").siblings("li").removeClass("active");
    }

    // Click Point
    sliderOlLi.on("click", function() {
        addActive($(this));
        runSlider();
    });

    // Click Arrow
    controlFa.on("click", function() {
        if ($(this).hasClass("fa-angle-left")) {
            if ($(".slider .active").is(":first-of-type")) {
                addActive(sliderOlLi.last());
                sliderUl.animate(
                    {
                        marginLeft: "+=" + sliderUlLi.first().width()
                    },
                    sliderTime,
                    function() {
                        sliderUl.css(
                            "margin-left",
                            -sliderUlLi.width() *
                                ($(".slider .active").index() + 1)
                        );
                    }
                );
            } else {
                addActive($(".slider .active").prev("li"));
                runSlider();
            }
        }
        if ($(this).hasClass("fa-angle-right")) {
            if ($(".slider .active").is(":last-of-type")) {
                addActive(sliderOlLi.first());
                sliderUl.animate(
                    {
                        marginLeft: "-=" + sliderUlLi.first().width()
                    },
                    sliderTime,
                    function() {
                        sliderUl.css(
                            "margin-left",
                            -sliderUlLi.width() *
                                ($(".slider .active").index() + 1)
                        );
                    }
                );
            } else {
                addActive($(".slider .active").next("li"));
                runSlider();
            }
        }
    });

    // Keyboard
    $("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
    controlFa.first().click();
  }
  else if(e.keyCode == 39) { // right
    controlFa.last().click();
  }
});
    
    // Start Set
    sliderOlLi.first().click();

    $(".view").each(function() {
        $(this).css("background-image", "url(" + $(this).data("image") + ")");
    });
    
    // Transition
    $('.project .screen, .project .tablet, .project .mobile').hover(function () {
        $(this).find('.view').css('transition', 'all ' + $(this).find('.view').data('second') + 's ease-in-out');
    }, function () {
        $(this).find('.view').css('transition', 'all 1s ease-in-out');
    });
});
