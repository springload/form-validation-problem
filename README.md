Form validation
=======================
We've created this problem to evaluate how developers tackle a real-world problem. If you've been assigned this problem you should spend around **2 hours** working on it. The last thing we want you to do is toil away for days on end!

If you've stumbled across this and want to work at [springload.co.nz](http://springload.co.nz) feel free to submit it too. We might not have anything available but we're always on the lookout for skilled developers.

## Problem definition
Included in this repository is an [index.html](https://raw.githubusercontent.com/springload/form-validation-problem/master/index.html) file that contains a form. You must ensure all of the following rules are met before the form is posted to the (in this case imaginary) server:

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

## Submission
Please email us a zip or tar.gz of your solution to tama@springload.co.nz &amp; josh@springload.co.nz.
