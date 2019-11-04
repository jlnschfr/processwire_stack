# Processwire Twig Frontend Stack

Author: Julian Schäfer, info@julian-schaefer.net

This is a processwire twig-based stack with focus on frontend workflow. It provides a boilerplate project with a bulletproof structure for templating and theming. The idea is to have a pattern based workflow. This requieres basic knowledge of processwire.

# Install

 1. Download and install Processwire. https://processwire.com/
 2. Use unziped `site-processwire_stack.zip` as installation profile.
 3. Move dev folder to `site` and navigate into it.
 4. Do a `yarn install` to install all dependencies
 5. Do a `yarn start` to start the gulp watch task.
 This task copies all your patterns from `site/dev/source/patterns/` to the proper processwire destination.
 6. Do a `yarn start:neutrino` to start the neutrino based webpack task. 
 This task is taking care of linting and bundling. I'm using the factorial frontend stack here: https://www.npmjs.com/package/@factorial/frontend-stack-core

# Usage
Everything what you need to develop is inside of site/dev/source. 

## Patterns 
In `side/dev/source/patterns` you'll find your patterns. The setup is using the atomic design principles. You'll have atoms, components and template-components. Each component represents a template within processwire.

There is one site template called `default.twig` what is the default template and corresponds to `default.php` in `site/templates`. The home template doesn't need a twig file here because it's just redirecting to the first child. When you want to have no redirect, just create a `home.twig` and remove the redirect from the php file.

When you want to have another site template please add a php file to `site/templates` and a appropriate twig file to `site/dev/source/patterns`.
