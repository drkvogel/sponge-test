
Submitting your test
If you have experience with, or are able to use Git, create your repository now, initialise this folder and push up your first commit.

Submitting your test via a GitHub or Bitbucket repository is preferred, but if you are unsure then simply ZIP up this folder once you are done and send it by email.

Try to make a commit after each task.

Basic tasks
Your name
After familiarising yourself with the code used in this test, add your name to the header of this page using the app/data/content.json file.

Edit content
Change the title in the header to:

Sponge UK Developer Test

Pay close attention to the italicised text.

Replace content
Replace the main content of this page (the "content" property of app/data/content.json) with the text found in resources/text-from-client.docx.

Pay close attention to any formatting and structure and try to normalise the styles. Correct any mistakes as you see fit.

Add content
Before the #content block, add either an accordion or tabs element without using a pre-written plugin or library and add the sections:

About me: A short paragraph about yourself
Photo: A photo or avatar of yourself
Links: Links to any sites that you have worked on or are particularly proud of with a small description of the role you played in their creation
Modify your new content
Update your element from the previous task to use a Handlebars template be populated from content that you add to the app/data/content.json file.

Advanced tasks
Simplify JavaScript
Simplify the JS in app/js/spongetest.js, making reusable functions. If you feel confident that the code is reusable enough, you can try moving the necessary content population code to the ContentInstance object in the app/js/lib/content.js file instead.

Include error handling to ensure the functions run even when passed invalid parameters.

Convert the CSS to LESS or SASS
Take the CSS in the file app/css/spongetest.css and convert it to LESS or SASS.

Use variables for any colours so that they may be changed easily.

Don't forget to submit your raw .sass or .less file(s).

CSS boxes
Without changing the HTML, use CSS to style the #boxes element to match the reference images as closely as possible.

In Chrome's Developer Tools, you can change your viewport to match exact screen widths given in the reference images.

The specifications for the boxes are as follows:

Don't change the padding on the #boxes element
Don't overwrite the background colours
The right (pink) box should always remain square and be 50% of the remaining width of the #boxes element
The left (yellow) box should be 50px high and 210px wide (but no wider than 50% of the remaining width of the #boxes element)
The font size for the text is 1.5em
The solution should work in all modern browsers and as far back as IE9
Tip: Use pseudo elements…

Task runner
Install and configure a Node task runner such as Gulp or Grunt and configure it to build your SASS or LESS files into .css files. Make a module with a package.json file and include your dependencies in there.

Please submit your package.json file so that we can install your environment but don't submit the node_modules folder — because it will be huge! Add the node_modules folder to the .gitignore list.

Extra credit
Rewrite JavaScript
Rewrite app/js/lib/content.js, making it into an ES6 class.

Use the import statement to include the ContentInstance class from app/js/lib/content.js into app/js/spongetest.js

This will currently only work in the latest Chrome, Firefox, Edge, Safari and Opera — this is fine.

Responsive font size
Using the least amount of CSS possible and leveraging the existing font-size inheritance, increase the size of the font throughout the entire page to 125% of its current size when viewing the page in a window smaller than 500px wide.

Transpile JavaScript
Using a compiler such as Babel and your task runner from earlier on, make a task that transpiles the ES6 code from the "Rewrite JavaScript" task into ES5/ES2015.

Remember to submit your gulpfile.js or gruntfile.js as well as your package.json.
