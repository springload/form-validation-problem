Hi there Springload! I thought I would provide a quick run down of what I have done during this exercise.

The form is fully functional. It will only submit if all the conditions are satisfied. If a condition is not satisfied when submit is clicked, the class of the parent element will be changed to 'error' and the element's colour will change to red.

I also spent a bit of time making the form look a bit more visually appealling and user friendly with CSS. I figured the less words that were initially visible on screen, the easier it would be for the user to understand. 

Beyond the problem statement I paid attention to the following:

- Documentation

I commented on my JavaScript code while I was working on it. This made it easier for me to come back and immediately register what this code was for, and it also makes it easier for another developer to come along and be able to jump straight in without first having to figure out what everything does.
The CSS file is divided into catagories and the read-me has been re-written.

- Accessibility

In terms of accessibility, I thought it would be a cool idea a to have a button that visual impaired people could click on to make the font size much bigger. I think this is especially important on a mobile device. Given that a lot of older people are now beginning to use the internet, I think having a really simplified layout and the option to increase the text size is really important.

- Progressive enhancement

One area of progressive enhancement that I applied to this problem was making it work just as well on a mobile device. Given how many people use their phone to access the internet, it is prudent to apply a mobile-first approach when making any site, and media queries were used in this instance to acheive this.

- Browser support

I am aware that there are a portion of users still on really old browsers; the majority on older versions of IE which do not fully support particular elements of the code I have written. I have taken care to try and provide back-ups in case the site is accessed using an older browser by providing an alternative stylesheet with some of these elements removed. There are links, meta tags and scripts in the <head> tag that provide an alternative route to users on IE8 and earlier. If I was given more time, it would be something I would work on more to improve. 

- Testing

While writing this code, I wrote a number of tests that use Jest and Node.js to keep tabs on whether all my functions continued to work as I went along. I think this ultimately saved me a ton of time, and, given more time, I would triple the amount of tests to make my code bulletproof.

- Tooling

In terms of the tooling I used to make my coding process more straightforward, I used Github to make an off-master branch that I made regular commits to. Then I did a pull request to merge this into the master branch. I used node.js to make a package.json file, and installed Jest, a testing framework. I also included a .gitignore file so that hopefully no-one's time would be wasted downloading unnecessary node modules

## Submission

Please email us a link to your fork of this repository, or a zip of your solution to `1337h4x0r@springload.co.nz`.
