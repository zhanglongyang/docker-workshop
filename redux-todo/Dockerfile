FROM node:6.3
MAINTAINER Longyang Zhang

WORKDIR /app

COPY package.json .
RUN npm install --loglevel warn

COPY . /app/

CMD npm run start

EXPOSE 8080
