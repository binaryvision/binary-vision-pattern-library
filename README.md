# Testing out KSS-node

http://binary-vision-pattern-library.s3-website-eu-west-1.amazonaws.com/section-components.html

Context here is evaluating KSS-node for use with drupal projects

After playing around a bit I think it is, and this repository is an example of my current impression on the way to do this

To understand where things would fit together, the idea would be that within a drupal theme you would have a styleguide folder alongside your less folder (so you can imagine that this repository is a drupal theme), then as part of your  build/release process you can generate and deploy the styleguide somewhere

## What's in this repository

In the styleguide folder is a quick example of how you might set your styleguide up for an actual project, if you browse to it there's a README with details of the commands you can run to do stuff like build it and deploy it. Commands are in the scripts section of package.json, for the `watch` command you'll need to install entr (http://entrproject.org/) and for the `deploy` command you'll need to install s3_website (https://github.com/laurilehmijoki/s3_website) and also provide the env config required in the s3_website.yml file - to deploy from your local machine I recommend sticking the required vars in a .env (https://github.com/bkeepers/dotenv) file in the styleguide directory

## How node-kss works

The basic concept with node-kss is just to annotate your css with structured comments that node-kss can parse and use to build your styleguide

In the annotations you include examples of the expected html and node-kss allows you to use handlebars templates for this html to avoid code duplication within your examples, because some examples will be composites of other examples 

##  Extended to support twig templates

To keep things even more in sync, it would be useful if you got the html for the styleguide and the html for drupal from the same place as well, but drupal doesn't use handlebars templates it uses twig (as of drupal 8)

So to get around this I created a handlebars helper for the styleguide that lets it render twig templates using twig.js (https://github.com/justjohn/twig.js)

To give an example of how this would look, I have created a components folder with a button.twig template in it - with the idea being that both the styleguide and drupal would use this template to render this type of button. To see an example of how the css for this looks check out https://github.com/binaryvision/binary-vision-pattern-library/blob/master/less/components/buttons.less

The twig helper is located at https://github.com/binaryvision/binary-vision-pattern-library/blob/master/styleguide/helpers/twig.js

And then the output you get is http://binary-vision-pattern-library.s3-website-eu-west-1.amazonaws.com/section-components.html#kssref-components-buttons

## Keeping styleguide styles separate from your project styles

One other small thing I did was inside styleguide/styleguide.less which imports the project styles and includes customisations for the styles in the styleguide template was to scope the @import rule to inside the selector `.kss-modifier__example` so the styles only apply to the code examples allowing you to keep your styleguides a bit more consistent, see https://github.com/binaryvision/binary-vision-pattern-library/blob/master/styleguide/styleguide.less#L3-L5
