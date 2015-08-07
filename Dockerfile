FROM iojs:3.0.0
MAINTAINER hycner@gmail.com

COPY . /demo

WORKDIR /demo

RUN npm i -g gulp pm2 \
    && npm i \
    && gulp all

ENTRYPOINT pm2 start app/server.js --no-daemon

EXPOSE 3001