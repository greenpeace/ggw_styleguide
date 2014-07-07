* Greenpeace Greenwire Styleguide *

The aim of this project is to create reusable and optimized front-
end code for Greenwire.

# Ruby #

* Make sure you have Ruby, Bundler and RVM installed, we use RVM version 1.9.3
If you are on a Mac, you'll require a package manager like Homebrew and the latest version of XCode Development Tools, as well as the Xcode Command Line Tools. Although Mac comes with Ruby, it may not be the right version.
* Install RVM with Ruby with
`\curl -L https://get.rvm.io | bash -s stable --ruby`.

* After installing RVM, run `rvm requirements` in your terminal to see if anything else is required to install Ruby and Rails.

## Ruby Gems ##

* Navigate to the theme folder in your terminal and run `bundle install` or `bundle update`.
It will read the Gems specified in the Gemfile and install them (and all their dependencies) one by one

## Gulp ##

### Installing gulp ###

We use gulp for many tasks which you can find in gulpfile.js. You need to install gulp on your local environment and in the project:

* `npm install gulp -g // global install`
* `npm install gulp --save-dev // local install`

### Installing gulp plugins ###

Install the plugins we use:

* Compass, with sass dependencies (gulp-compass)
* Autoprefixer (gulp-autoprefixer)
* Minify CSS (gulp-minify-css)
* Concatenation (gulp-concat)
* JSHint (gulp-jshint)
* Uglify (gulp-uglify)
* Compress images (gulp-imagemin)
* Clean files for a clean build (gulp-clean)
* Rename (gulp-rename)
* Changed, only pass through changed files (gulp-changed)
* Caching of images so only changed images are compressed (gulp-cache)
* Size (gulp-size)
* Combine media queries (gulp-combine-media-queries)
* Gulp Plumber, make sure gulp doesn't stop on errors (gulp-plumber)
* Notify of changes (gulp-notify)

Command for single install

* `npm install gulp-compass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-clean gulp-rename gulp-changed gulp-cache gulp-size gulp-plumber gulp-notify --save-dev`

This will install all necessary plugins and save them to devDependencies in package.json.

### Use Gulp ###

Just run one of the tasks in the gulpfile
 * `gulp watch` to start watching files for changes
 * `gulp compass` to compile scss to css
 * `gulp images` to optimize images


