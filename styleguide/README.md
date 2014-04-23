* Greenpeace Greenwire Styleguide *

The aim of this project is to create reusable and optimized front-
end code for Greenwire.

* Make sure you have Ruby, Bundler and RVM installed, we use RVM version 1.9.3
If you are on a Mac, you'll require a package manager like Homebrew and the latest version of XCode Development Tools, as well as the Xcode Command Line Tools. Although Mac comes with Ruby, it may not be the right version.
* Install RVM with Ruby with
`\curl -L https://get.rvm.io | bash -s stable --ruby`.

* After installing RVM, run `rvm requirements` in your terminal to see if anything else is required to install Ruby and Rails.

* Navigate to the theme folder in your terminal: public_html/sites/all/themes/ndp/, run `bundle install`.
It will read the Gems specified in the Gemfile and install them (and all their dependencies) one by one

* Use `compass watch` for compiling with Sass debug info (displays sass line numbers).
* Use `compass watch -e production --force` to compile clean code.
* You can also use guard or grunt for compiling, but make sure the settings are correct.
