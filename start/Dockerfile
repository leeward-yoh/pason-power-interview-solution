FROM node:carbon
MAINTAINER Power Rangers

RUN mkdir -p /usr/src/webapp
WORKDIR /usr/src/webapp

RUN npm install --global yarn@^1.3.2 http-server

ADD webapp/package.json /usr/src/webapp/
ADD webapp/yarn.lock /usr/src/webapp/
RUN yarn --pure-lockfile

# Add full webapp directory
ADD webapp /usr/src/webapp

# Build production version of webapp
RUN npm run build

# Expose port to listen on
EXPOSE 8888

# Expose node simple http server (directory defaults to ./public)
CMD [ "http-server", "-p", "8888", "--cors" ]
