#!/usr/bin/env bash
#stop original docker contianer to make sure middleman is not running.
#echo "Stopping and removing running docker containers."
#docker-compose stop middleman
#docker-compose rm
#
## Do a build of middleman in a new container.
#rm -rf styleguide/build
#echo "Removed the styleguide/build directory."
#
#echo "Starting a new middleman build."
#
## Run the middleman build command inside the docker container.
#docker-compose run --service-ports middleman bash /ggw_styleguide/middleman_build.sh
#
## Publish the new build on the local device.
#cd styleguide/build/
#
#git init .

git remote add https://github.com/greenpeace/ggw_styleguide.git

# Checkout ot the gh-pages branch.
git checkout gh-pages

git add -A

git commit -m "Automatic new build of the gh-pages"

git push origin gh-pages

# Now remove the git repository.
rm -rf ./.git/


