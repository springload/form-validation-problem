Form validation problem
=======================
The form included in the `index.html` file requires validation before it's submitted.

## Validation conditions
The form is considered valid if all the following conditions are met:
* `Email` must be a valid email address.
* `Password` must be longer than 8 characters.
* `Colour` must be chosen.
* At least two `Animal`'s must be chosen.
* If `Tiger` is one of the chosen `Animal`'s then `Type of tiger` is required to be a non-empty string.

## Other requirements
* If the form is submitted and an error occurs, the error element should have a CSS `error` class added to it.
