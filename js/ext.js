function clearForm(f) {
    f[0].reset();
    f.find(".error").removeClass("error");
}

function showPopup(p) {

    if ($("div." + p + " form").length > 0) {
        clearForm($("div." + p + " form"));
    }

    $.magnificPopup.open({
        items: {
            src: "div." + p,
        },
        type: 'inline'
    });
}

function hidePopups() {
    $.magnificPopup.close();
}

function message(text) {

    if (text.indexOf('|||') > -1) {
        var t = text.split('|||');
        $(".system-message .password-updated__title").html(t[0]);
        $(".system-message .password-updated__text").html(t[1]);
    } else {
        $(".system-message .password-updated__text").html(text);
    }

    showPopup("system-message");
}

function toLogin() {
    showPopup("entrance");
}

function toRecover() {
    showPopup("recovery");
}

$(document).ready(function() {

    if ($(".message-error").length) {
        message($(".message-error").html());
        $(".message-error").remove();
    }

    if ($(".message-success").length) {
        message($(".message-success").html());
        $(".message-success").remove();
    }

    var hash = location.hash;


    $(".to-about").click(function() {
        $("html,body").stop().animate({ scrollTop: $("section.application").offset().top }, 400);
        return false;
    });

    $(".to-catechism").click(function() {
        $("html,body").stop().animate({ scrollTop: $("section.steps").offset().top }, 400);
        return false;
    });

    if (hash == '#about') {
        $(".to-about:eq(0)").click();
    } else if (hash == '#catechism') {
        $(".to-catechism:eq(0)").click();
    } else if (hash == '#newpassword') {
        location.hash = '';
        message("Пароль обновлён!|||Пароль от аккаунта <span class='password-updated__text-email'>e-mail пользователя</span> успешно обновлён! Вы всегда можете поменять пароль в настройках аккаунта через мобильное приожение Катехизис.");
    }

    $(".to-login").click(function() {
        toLogin();
        return false;
    });

    $(".to-recover").click(function() {
        toRecover();
        return false;
    });

    $(".cabinet-course__item--active").click(function() {
        showPopup("registration");
        return false;
    });

    $(".password-eye").click(function() {
        var inp = $(this).parent().find("input");
        if (inp.attr('type') == 'password')
            inp.attr('type', 'text');
        else
            inp.attr('type', 'password');
        return false;
    });

    $(".project-form .form-sibmit-button").click(function() {
        $(this).parents(".project-form").submit();
        return false;
    });

    $(".donations__filter-item").click(function() {
        var ac = parseInt($(this).attr('data-ac')) || 0;
        var that = $(this);

        $(".donations__filter-item").removeClass("donations__filter-item--active");
        that.addClass("donations__filter-item--active");

        $(".donations-item").hide();
        $(".donations-item[data-ac=" + ac + "]").show();

        return false;
    });
});

$(document).ready(function() {
    $(".menuToggle").click(function() {
        $('.header-main__h1').toggleClass("removepos");
        $('.header-main__img').toggleClass("removepos");
        $(this).toggleClass("active");
        $('.menu').slideToggle(300, function() {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });
    });
    $('.menu__list-langText').click(function() {
        $('.menu__list-lang').toggleClass('activeLanguage')

    })

});