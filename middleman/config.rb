###
# Compass
###

# Susy grids in Compass
# First: gem install susy --pre
# require 'susy'

# Combine media queries at bottom of document
require 'sass-media_query_combiner'
require 'breakpoint'
require 'singularitygs'
require 'sass-globbing'

# Change Compass configuration
compass_config do |config|
  config.output_style = :expanded
end

activate :livereload

activate :syntax

activate :directory_indexes

activate :relative_assets

activate :asset_hash

#with_layout :example do
#  page "/examples/*"
#end

activate :blog do |blog|
  # set options on blog
end


#set :markdown_engine, :redcarpet


###
# Page options, layouts, aliases and proxies
###

#page "prototype/*", :layout => "sidebarsecond"
#page "/design-elements/*", :layout => "styleguide"

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###



# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'images'
set :fonts_dir, 'fonts'
set :partials_dir, 'partials'

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9']
  config.cascade  = false
  config.inline   = true
end



#activate :automatic_clowncar,
#  :sizes => {
#    :small => 200,
#    :medium => 400,
#    :large => 600
#  },
#  :namespace_directory => %w(photos),
#  :filetypes => [:jpg, :jpeg, :png]
#
#activate :asset_host
#set :asset_host, 'http://localhost:4567'



activate :title, site: 'GGW Style Guide', separator: ' — '


# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs


  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end
