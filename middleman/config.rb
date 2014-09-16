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

helpers do
  def nav_link(name, url, options={})
    options = {
      class: "",
      active_if: url,
      page: current_page.url,
    }.update options
    active_url = options.delete(:active_if)
    active = Regexp === active_url ? current_page.url =~ active_url : current_page.url == active_url
    options[:class] += " active" if active

    link_to name, url, options
  end
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
  activate :relative_assets
  set :relative_links, true

  set :url_root, 'http://greenpeace.github.io/ggw_styleguide/'

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

activate :deploy do |deploy|
  deploy.method = :git
  deploy.build_before = true # default: false
  deploy.branch = "gh-pages"
  # Optional Settings
  # deploy.remote   = 'custom-remote' # remote name or git url, default: origin
  # deploy.branch   = 'custom-branch' # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end