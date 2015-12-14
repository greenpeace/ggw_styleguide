#!/usr/bin/env bash
# Stop original docker container to make sure middleman is not running.
echo "Stopping and removing running docker containers."
docker-compose stop middleman

# Do a build of middleman in a new container.
cd styleguide/build/

# Fetch git repository for the first time.
if [ ! -d ".git" ]; then
  echo "Initial git repository for styleguide/build to publish to gh-pages."
  cd ../
  rm -rf build
  mkdir build
  cd build/
  git init .
  git remote add origin git@github.com:greenpeace/ggw_styleguide.git
  git fetch origin gh-pages
fi

git checkout gh-pages

echo "Starting a new middleman build."

# Go back to the project root.
cd ../../

# Run the middleman build command inside the docker container.
docker-compose run --service-ports middleman bash /ggw_styleguide/middleman_build.sh

# Publish the new build on the local device.
cd styleguide/build/

# Add the changes.
git add -A

DATE=`date +%Y-%m-%d:%H:%M:%S`

git commit -m " Automated commit at $DATE by deploy script using middleman build"

git push origin gh-pages


