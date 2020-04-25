FROM node:12.10-alpine

WORKDIR /backend

COPY package.json /backend/package.json

RUN npm i

COPY . .

EXPOSE 3000