FROM node:wheezy
MAINTAINER Sergio Behrends


# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm i nodemon -g

# Install app dependencies
# Will store in cache unless file chanes
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
EXPOSE 3000
CMD [ "npm", "start" ]