$(window).on('load', function() {
  $('.load').delay(3000).fadeOut(1000).fadeOut(1000);
});
$(function() {
    // All Variable =======================================================================
    var body        = $('body'),
        slider      = $(".slider"),
        sliderUl    = slider.find("ul"),
        sliderUlLi  = sliderUl.find("li"),
        sliderOl    = slider.find("ol"),
        sliderOlLi  = sliderOl.find("li"),
        controlFa   = $(".control .fa"),
        sliderTime  = 900,
        sliderWait  = 4000,
        clickHere   = "yes click",
        autoPlay;

    // All Functions =====================================================================
    sliderUl.append("<li>" + sliderUlLi.first().html() + "</li>");
    sliderUl.prepend("<li>" + sliderUlLi.last().html() + "</li>");
    
    function runSlider() {
        if (clickHere === "yes click") {
            clickHere = "no click";
            sliderUl.animate({
                marginLeft: -sliderUlLi.width() * ($(".slider .active").index() + 1)
            }, sliderTime, function () { clickHere = "yes click"; });
        }
    }
    function addActive(param) {
        if (clickHere === "yes click") {
            param.addClass("active").siblings("li").removeClass("active");
        }
    }

    // Click Point =======================================================================
    sliderOlLi.on("click", function() {
        addActive($(this));
        runSlider();
    });

    // Click Arrow Left
    controlFa.first().on("click", function() {
        if ($(".slider .active").is(":first-of-type")) {
            addActive(sliderOlLi.last());
            if (clickHere === "yes click") {
                clickHere = "no click";
                sliderUl.animate({
                    marginLeft: "+=" + sliderUlLi.first().width()
                }, sliderTime, function() {
                    sliderUl.css( "margin-left", -sliderUlLi.width() * ($(".slider .active").index() + 1));
                    clickHere = "yes click";
                });
            }
        } else {
            addActive($(".slider .active").prev("li"));
            runSlider();
        }
    });

    // Click Arrow Right
    controlFa.last().on("click", function() {
        if ($(".slider .active").is(":last-of-type")) {
            addActive(sliderOlLi.first());
            if (clickHere === "yes click") {
                clickHere = "no click";
                sliderUl.animate({
                    marginLeft: "-=" + sliderUlLi.first().width()
                }, sliderTime, function() { 
                    sliderUl.css("margin-left", -sliderUlLi.width() * ($(".slider .active").index() + 1));
                    clickHere = "yes click";
                });
            }
        } else {
            addActive($(".slider .active").next("li"));
            runSlider();
        }
    });
                
    // Start Set =======================================================================
    sliderOlLi.first().click();
    
    // Keyboard ========================================================================
    $("body").keydown(function(e) {
        if (e.keyCode == 37) { // left
            controlFa.first().click();
        } else if (e.keyCode == 39) { // right
            controlFa.last().click();
        }
    });
    
    // When Hover fa ==============================================================
    slider.find('.fa').on('mouseenter', function() { clearInterval(autoPlay); });
    slider.find('.fa').on('mouseleave', function() { autoRunSlider(); });
  
  // veiw =============================================================================
  $('.project .view').each(function() {
        $(this).css("background-image", "url(" + $(this).data("image") + ")");
    });
  $('.project .screen, .project .tablet, .project .mobile').hover(function () {
    $(this).find('.view').css('transition', 'all ' + $(this).find('.view').data('second') + 's ease-in-out');
  }, function () {
    $(this).find('.view').css('transition', 'all 2s ease-in-out');
  });
});
