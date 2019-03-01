FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# EXPOSE 4000

# ENV mongodburi=mongodb://database/backend

# ENV mongodburi=mongodb://localhost:27017/backend

CMD [ "npm", "start" ]