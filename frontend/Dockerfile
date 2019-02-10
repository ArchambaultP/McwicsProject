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

# start app
#RUN npm show ajv version
#CMD ["npm", "show", "ajv", "version"]
#CMD ["cat", "/usr/src/app/node_modules/ajv/lib/keyword.js"] 
CMD ["npm", "start"]
