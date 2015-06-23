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
				$('.message .close').on('click', function() {
  					$(this).closest('.message').fadeOut();
				});
			}
		}
	};

});