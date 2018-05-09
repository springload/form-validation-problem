/*
 * This function is for performing field validation before form submission using the input element validation strings
 * Creating the strings:
 * 	- command:value
 * 	or when specifying to validate against parent's total input group:
 * 	- parent::command:value
 *
 * 	or if the field is just required:
 * 	- required
 * Multiple commands can be used by separating these with a single space character.
 *
 * Otherwise all you need to do is subscribe this function to the forms submit event, and it will cancel the process if
 * validation doesn't succeed.
 */
var validateForm = function (event) {
    var form = $(this);

    // Function to add or remove error state.
    // Note: will try for the parent and otherwise fail to the element.
    var ChangeErrorState = function (element, inError) {
        var parentElement = element.parent();
        if (parentElement) {
            if (inError) {
                parentElement.addClass("error");
            }
            else {
                parentElement.removeClass("error");
            }
        }
        else {
            if (inError) {
                element.addClass("error");
            }
            else {
                element.removeClass("error");
            }
        }
    };

    // Function for validating when command is against parent (i.e. group of checkboxes)
    var validateParent = function (parent, commands) {
        var valid = true;

        if (commands.length < 2 || !parent) {
            return valid;
        } else {
            switch (commands[0]) {
                case 'checked':
                    var checked = 0;
                    var inputs = $(parent).find('input');
                    for (var i = 0; i < inputs.length; i++) {
                        var value = getRealVal($(inputs[i]));
                        if (typeof(getRealVal($(inputs[i]))) == typeof(true)) {
                            if (value === true) {
                                checked += 1;
                            }
                        } else {
                            if (value.length > 0) {
                                checked += 1;
                            }
                        }
                    }
            }

            if (checked < commands[1]) {
                valid = false;
            }
        }

        return valid;
    };

    // Normalises value so that we can have one function to get values from different input types.
	var getRealVal = function (element) {
		switch (element.attr('type')) {
			case 'radio':
			case 'checkbox':
				return $(element).is(':checked');
				break;
		}

		//Default
		return $(element).val();
	};

	// Actual main function.
	// From the form we need to find all child inputs and from these validate.
	var allValid = true;
 	form.find('input, select').each(function(){
		var validationStrings = $(this).attr('validation');
		var currentValid = true;
		if (validationStrings) {
			validationStrings = validationStrings.toLowerCase().split(' ').filter(n => n);
			for( var i =0; i < validationStrings.length; i++) {
				var validationCommands = validationStrings[i].split(':');

				// If the validation is 'parent::' this is special, so process separately
				if (validationCommands && validationCommands[0] === 'parent') {
					// This is a special case where the command needs to be run against the result of aggregating a group
					// of elements. The index jump is due to another function handling this command.
					j = validationCommands.length;

					if (validateParent($(this).parent()[0], validationCommands.splice(2)) && currentValid) {
						ChangeErrorState($(this), false);
					} else {
						ChangeErrorState($(this), true);
						allValid = false;
						currentValid = false;
					}
					continue;
				}
				else if (validationCommands) {
					switch (validationCommands[0]) {
						case 'required':
							if (getRealVal($(this)) && getRealVal($(this)).length > 0 && currentValid ) {
								ChangeErrorState($(this), false);
							} else {
								ChangeErrorState($(this), true);
								allValid = false;
								currentValid = false;
							}
							break;
						case 'min_length':
							if (getRealVal($(this)) && validationCommands[1] && getRealVal($(this)).length >= validationCommands[1] && currentValid) {
								ChangeErrorState($(this), false);
							} else {
								ChangeErrorState($(this), true);
								allValid = false;
								currentValid = false;
							}
							break;
						case 'special':
							if (validationCommands.length >= 2) {
                                if (validationCommands[1] === 'email') {
                                    // Validate as email.
                                    // I'd prefer not to use custom regex, so lets make use of HTML5 validation for now.
                                    var originalType = $(this).attr('type')
									$(this).attr('type', 'email');
                                    if ($(this)[0].checkValidity() && currentValid) {
                                        ChangeErrorState($(this), false);
                                    } else {
                                        ChangeErrorState($(this), true);
                                        allValid = false;
                                        currentValid = false;
                                    }
                                    // Remove type as we don't want the default invalid behavior effecting custom errors.
                                    $(this).attr('type', originalType);
                                }
                                break;
                            }
					}
				}
			}
		} else {
			// No validation string means this field is always valid.
			ChangeErrorState($(this), false);
		}
	});

	// If any validations aren't met then abort submit.
	if (!allValid) {
		event.preventDefault();
	}

}
