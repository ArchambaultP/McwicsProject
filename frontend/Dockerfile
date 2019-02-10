# base image
FROM node:8-slim

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm uninstall ajv
RUN npm install ajv@6.8.1
RUN npm install --silent
RUN npm install react-scripts
RUN npm install materialize-css
RUN npm install axios
RUN npm install @material-ui/core
RUN npm install @material-ui/icons
 
#EXPOSE 80
CMD ["npm", "start"]
