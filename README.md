# if not, **Store Bought** is fine!
    This site is an encyclopedia of cocktail recipes, designed to be easily made at home.
    There is an increasing trend of consumers drinking at home because of factors such as the global pandemic, and now inflation.
    This site aims to make cocktail making accessible and simplified for the sitting room sipper.

## UX/UI
### Site Goals
- To be an visually attractive site
- To be plainly navigable
- To be able to communicate information in a clear and intelligible way
- To allow for interaction from the user in the form of photo submissions and reviews

### Design Choices
- Color
- Typography
- Imagery
### User Stories
#### As a first time visitor
- I want to be able to navigate to the cocktails easily as that is my reason for visiting the site
- I want the information to be clear and concise
- I want to feel like the recipes easily replicated
- I want to learn more detailed information about the drinks I like
- I want help problem solving with swapping ingredients or utensils for what I have available to me
#### As a recurring visitor
- I want to have access to a broader selection of recipes
- I might want to be able to contact the site owner to request certain recipes be posted
- I would like to be able to submit photos of my own finished cocktails
- I would like to be able to review the recipes and give feedback after trying them
### Wireframes

## Testing
    1. -Windows screen minimised no further than approx 400px, leaving mobile media screen untested/
       -Downloaded chrome extension for screen testing from mobilefirst.com
       -Discovered lack of responsivity and fixed problem, specifically the banner at width:400px;
    2. -Lighthouse noted lack of title in head of pages
       -Added meta title and icon
    3. -Validator noted <em> not allowed in a ul 
       -Forgot to write content into a list item
       -Error resolved after wrapping content in a li
    4. -Recipes page on large screens pushes beyond background on right
       -CSS code doesn't seem to be the issue, will delete and add html to problem solve
       -Issue is with section element, adjusting width to a % is helping

## Deployment

## Citiations
    -TextboxFroggy https://flexboxfroggy.com/
    -W3Schools https://www.w3schools.com/css
    -Sitepoint https://www.sitepoint.com/understanding-and-using-rem-units-in-css/
    -Delftstack https://www.delftstack.com/howto/css/css-font-border/
    -GeeksforGeeks https://www.geeksforgeeks.org/set-the-opacity-only-to-background-color-not-on-the-text-in-css/
    -Digitalocean https://www.digitalocean.com/community/tutorials/css-prevent-line-break
    -Favicon https://favicon.io/tutorials/how-to-add-a-favicon-to-a-website-ico-format/
    -Laura Jones https://laurajones9-portfoliop1-hodfbgh5vsu.ws-eu53.gitpod.io/
      _for explaining the solution she found to a white space issue on the right of screen_
      _as a guide for how to document and arrange my readme and screenshots_
      _for providing a template of a footer with icon links_