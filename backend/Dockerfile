FROM ruby:2.6.3
RUN apt-get update -qq \
    &&  apt-get install -y \
        build-essential \
        libpq-dev \
        nodejs \
        postgresql-client
RUN mkdir -p /myapp/backend
WORKDIR /myapp/backend
COPY Gemfile /myapp/backend/Gemfile
COPY Gemfile.lock /myapp/backend/Gemfile.lock
RUN bundle install
COPY . /myapp/backend

CMD ["rails", "server", "-b", "0.0.0.0"]