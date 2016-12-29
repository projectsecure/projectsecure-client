FROM node

ARG API_URL=http://localhost:8000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Install app dependencies
RUN npm config set loglevel warn
RUN npm install
RUN npm install webpack -g
RUN webpack -p /usr/src/app/

ENV NODE_ENV=production
ENV PORT=4000

CMD [ "node", "server.js" ]
EXPOSE 4000
