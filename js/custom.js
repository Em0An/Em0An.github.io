/*global $, alert, console */
$(function () {
    'use strict';
    
    var userErrors = true, // SETTING ERRORS STATUS
        mailErrors = true,
        msgErrors = true;
    
    $('.username').blur(function () { // USERNAME
        if ($(this).val().length < 4) {
            $(this).css('border', '1px solid #f00').parent().find('.custom-alert').fadeIn(200).end().find('.asterisx').fadeIn(100);
            userErrors = true;
        } else {
            $(this).css('border', '1px solid #080').parent().find('.custom-alert').fadeOut(200).end().find('.asterisx').fadeOut(100);
            userErrors = false;
        }
    });
    
    $('.email').blur(function () { // EMAIL
        if ($(this).val().length < 1) {
            $(this).css('border', '1px solid #f00').parent().find('.custom-alert').fadeIn(200).end().find('.asterisx').fadeIn(100);
            mailErrors = true;
        } else {
            $(this).css('border', '1px solid #080').parent().find('.custom-alert').fadeOut(200).end().find('.asterisx').fadeOut(100);
            mailErrors = false;
        }
    });
    
    $('.message').blur(function () { // MESSAGE
        if ($(this).val().length < 10) {
            $(this).css('border', '1px solid #f00').parent().find('.custom-alert').fadeIn(200).end().find('.asterisx').fadeIn(100);
            msgErrors = true;
        } else {
            $(this).css('border', '1px solid #080').parent().find('.custom-alert').fadeOut(200).end().find('.asterisx').fadeOut(100);
            msgErrors = false;
        }
    });
    
    // SUBMIT FORM VALIDATE
    $('.contact-form').submit(function (e) {
        if (userErrors === true || mailErrors === true || msgErrors === true) {
            e.preventDefault();
            $('.username, email, .message').blur();
        }
    });
});
