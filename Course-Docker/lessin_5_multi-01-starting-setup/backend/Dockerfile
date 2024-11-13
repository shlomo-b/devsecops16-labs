FROM node

WORKDIR /app

COPY package.json .

COPY . . 

RUN npm install

EXPOSE 80

# add env variables for mongo username and password
ENV MONGODB_USERNAME=shlomo
ENV MONGODB_PASSWORD=secret

# CMD [ "node", "app.js" ]
CMD [ "npm", "start" ]
