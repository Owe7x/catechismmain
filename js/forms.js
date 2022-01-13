
$(document).ready(function(){
	$.optionsValidForm = {
		ignore: [],
        focusInvalid: false,
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 4,
            },
            password2: {
                required: true,
                minlength: 4,
                equalTo: "[name='password']",
            },
		},
		messages: {
	        password2: {
	        	equalTo: "Повторите пароль в точности",
			}
		},
		errorPlacement: function(error, element) {
			if (element.is(':checkbox')) {
				element.parent().addClass('cb-error');
			} else if (element.is(':radio')) {
				element.parent().parent().addClass('cb-error');
			} else {
				element.parent().find('.error-text').html(error.html());
				return true;
			}
		},

		highlight: function (element, errorClass, validClass) {
			var elem = $(element);
			elem.parent().addClass(errorClass);
		},

		unhighlight: function (element, errorClass, validClass) {
			var elem = $(element);
			elem.removeClass(errorClass);

			elem.parent().removeClass(errorClass);
			elem.parent().parent().removeClass(errorClass);

			elem.parent().removeClass("cb-error");
			elem.parent().parent().removeClass("cb-error");
		},
    };

    $.validator.addMethod("cyrillicvalidation",
        function(value, element) {
            var regex = /^([а-яА-ЯЁё ])*$/;
            return regex.test(value);
        },
        "Введите русские символы"
    );

    $(".project-form").each(function(index, elem){
    	$(elem).validate($.optionsValidForm);
	});

	$("#login-form").submit(function(){
		
		var frm = $(this);

		if (frm.valid()) {

			if (frm.hasClass("disabled"))
    			return false;

			frm.addClass("disabled");

			var fields = {
				email: $.trim($("#login-form input[name='email']").val()),
				password: $.trim($("#login-form input[name='password']").val()),
			};

			$.post('/profile/login', {fields: fields}, function(data){

				frm.removeClass("disabled");

				if (data.status == 'error') {

					if (data.errors) {
						if (data.errors.email) {
							frm.find("input[name='email']").parent().addClass('error');
							frm.find("input[name='email']").parent().find('.error-text').html(data.errors.email);
						} else {
							frm.find("input[name='email']").parent().removeClass('error');
						}

						if (data.errors.password) {
							frm.find("input[name='password']").parent().addClass('error');
							frm.find("input[name='password']").parent().find('.error-text').html(data.errors.password);
						} else {
							frm.find("input[name='password']").parent().removeClass('error');
						}
					} else {
						message("Ошибка!|||"+data.message);
					}
				} else {
					location.href = '/profile';
				}
			}, 'json');
		}

		return false;
	});

	$("#recover-form").submit(function(){
		
		var frm = $(this);

		if (frm.valid()) {

			if (frm.hasClass("disabled"))
    			return false;

			frm.addClass("disabled");

			var fields = {
				email: $.trim($("#recover-form input[name='email']").val()),
			};

			$.post('/profile/recover', {fields: fields}, function(data){

				frm.removeClass("disabled");

				if (data.status == 'error') {

					if (data.errors) {
						if (data.errors.email) {
							frm.find("input[name='email']").parent().addClass('error');
							frm.find("input[name='email']").parent().find('.error-text').html(data.errors.email);
						} else {
							frm.find("input[name='email']").parent().removeClass('error');
						}
					} else {
						message("Ошибка!|||"+data.message);
					}
				} else {
					message(data.message);
				}
			}, 'json');
		}

		return false;
	});

	$("#password-form").submit(function(){
		
		var frm = $(this);

		const urlParams = new URLSearchParams(window.location.search);
		const activationKey = urlParams.get('activation_key') || '';

		if (frm.valid()) {

			if (frm.hasClass("disabled"))
    			return false;

			frm.addClass("disabled");

			var fields = {
				password: $.trim($("#password-form input[name='password']").val()),
				password2: $.trim($("#password-form input[name='password2']").val()),
			};

			$.post('/profile/password?activation_key='+activationKey, {fields: fields}, function(data){

				frm.removeClass("disabled");

				if (data.status == 'error') {

					if (data.errors) {
						if (data.errors.password) {
							frm.find("input[name='password']").parent().addClass('error');
							frm.find("input[name='password']").parent().find('.error-text').html(data.errors.password);
						} else {
							frm.find("input[name='password']").parent().removeClass('error');
						}

						if (data.errors.password2) {
							frm.find("input[name='password2']").parent().addClass('error');
							frm.find("input[name='password2']").parent().find('.error-text').html(data.errors.password2);
						} else {
							frm.find("input[name='password2']").parent().removeClass('error');
						}
					} else {
						message("Ошибка!|||"+data.message);
					}
				} else {
					location.href = 'https://catechism.ru/#newpassword';
					return false;
				}
			}, 'json');
		}

		return false;
	});
});