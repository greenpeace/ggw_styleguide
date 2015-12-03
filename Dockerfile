FROM ruby:2.1
MAINTAINER maikelkoopman@goalgorilla.com

RUN gem install bundler
RUN gem install compass

ADD ./Gemfile Gemfile
RUN bundle install

ADD ./styleguide styleguide

WORKDIR styleguide

EXPOSE 4567

CMD middleman --verbose