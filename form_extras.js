/*
 * This form has a special extra conditional text field.
 * Because this is bespoke behaviour this is in a separate module.
 *
 */
(function () {
    // Function to add/remove 'required' in validation string for submission.
    var changeValidationSring = function(element, command, add) {
        var validation = $(element).attr('validation');

        if (!validation) {
            validation = "";
        }

        if (add) {
            if (validation.indexOf(command) == -1) {
                $(element).attr('validation', validation + " " + command);
            }
        } else {
            // Remove command and check for duplicate spaces.
            validation = validation.replace(command, '').replace ('  ', ' ');
            $(element).attr('validation', validation);

        }
    };

    // Change handler
    var tigerExtraField = function () {
        var checkbox = $('#tiger')[0];
        var textbox = $('#tiger_type')[0];
        var label = $("label[for='" + $(textbox).attr('id') + "']");
        if (checkbox.checked) {
            $(textbox).show();
            $(label).show();
            changeValidationSring(textbox, 'required', true);
        } else {
            $(textbox).hide();
            $(label).hide();
            changeValidationSring(textbox, 'required', false);
        }
    };

    // Subscribe to change event
    $('#tiger').change(tigerExtraField);
    // Set initial conditions
    tigerExtraField();
}
)();