**Please write a little bit about the technology you chose and why, including any limitations or possibilities of this approach.**

- For this problem, I chose to complete it using vanilla JavaScript. It's light and easy to quickly come up with validation that can work with the existing form; as opposed to something like jQuery where it would be a bit of an overkill for this small form. I could have also used an existing JS validation library, but again it wasn't necessary for this problem. 

- Some of the limitations that JS poses are that it cannot be trusted to fully sanitize the inputs as it can be easily disabled. It would be a good idea to also implement validations in the backend for proper security. Another limitation would be when looking to scale up; vanilla JS probably would't be the best approach as it could become very messy quickly.

- In terms of possibilities, they are endless with JS. It provides ways to manipulate how your form behaves and looks, and even alter nodes in the DOM tree as you like.

##The cherry on the cake

Beyond the problem statement, show us the consideration you have given to some or all of the following:

**Documentation**

Documentation is essential, not only for others to be able to see what's going on in your code, but also for your future self. Many times we find ourselves coming back to a project after a long time and not knowing what is going. This leads to unnecessary time spending, something that could potentially be avoided with just a comment in the code or a readme file.

**Accessibility**

There are many things you can do to create accessible forms for your users. Small things such as including labels for a particular field, or including most values like alt or name go a long way to providing accessibility.

**Progressive enhancement**

The only consideration I made for this was the way I layed out the code. I guess I just made it easier for someone else to come in and add more functionality

**Browser support**

I checked the form to see how it worked on Chrome, Firefox, Safari and mobile. I made sure tp add a breakpoint for a seamless transition into smaller screens. In addition, I also included the viewport meta so that the form would scale on mobile. Although they are small changes and additions they do make a difference even if it's just for a small form. 

**Testing**

I did not consider testing for this problem, but a library like jest would do just the trick. I am able to implement a set of test cases by leveraging Mocha or Jest.

**Tooling**

Tooling is a topic that encompasses various aspects of development. You could be referring to tooling as in tools available for developers to debug and make code work like Chrome Dev tools or the console. You could also be referring to established architecture structures and scaffolding guidelines for developers. For example, in order to scale and maintain CSS in a project, it would be a better approach to follow a CSS architecture such as the Inverted Triangle CSS.

