FROM node:latest

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm install cors

COPY . .

EXPOSE 3000

CMD ["npm", "start"]