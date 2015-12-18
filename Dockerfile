FROM ruby:2.1
MAINTAINER maikelkoopman@goalgorilla.com

RUN gem install bundler

ADD ./Gemfile Gemfile
RUN bundle install

ADD . /ggw_styleguide

WORKDIR /ggw_styleguide/styleguide

EXPOSE 4567
EXPOSE 35729

CMD middleman