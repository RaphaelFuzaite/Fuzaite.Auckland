'use strict';

var initVendors = (function () {

	return {
		Form: {
			Element: function() {
				$('.ui.checkbox').checkbox();
			},
			Validation: function(model) {
				return $('.ui.form').form(model, { on: 'blur', inline: 'true' });
			}
		},
		Layout: {
			Element: function() {
				$('.ui.dropdown').dropdown();
				$('.popup').popup({
		          transition: 'scale'
		        });
				$('.message .close').on('click', function() {
  					$(this).closest('.message').fadeOut();
				});
				$('.ui.modal').modal({
				    blurring: true,
					closeable: false,
		  		}).modal('attach events', '.modal-open.button', 'show');
			}
		}
	};

});