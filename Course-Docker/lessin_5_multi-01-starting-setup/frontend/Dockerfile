FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . . 

EXPOSE 3000

# Ensure the React app listens on all interfaces (0.0.0.0)

CMD [ "npm", "start" ]
