Form validation problem
=======================
We've created this problem to evaluate how developers tackle a real-world problem. If you've been assigned this problem you should spend no more than **2 hours** working on it. The last thing we want you to do is toil away for days on end!

The problem is straight forward:
The form included in the `index.html` file must meet the following validatin rules before it's submitted.

## Validation conditions
The form is considered valid if all the following conditions are met:
* `Email` must be a valid email address.
* `Password` must be longer than 8 characters.
* `Colour` must be selected.
* At least two `Animal`s must be chosen.
* If `Tiger` is one of the chosen `Animal`s then `Type of tiger` is required to be a non-empty string.

## Other requirements
If the form is submitted and an error occurs, the error element's parent should have a CSS `error` class added to it.
```html
<p class='error'>
    <label for='field'></label>
    <input id='field' type='text' value='foo'>
</p>
```
