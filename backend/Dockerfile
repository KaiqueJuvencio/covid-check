FROM node:12.10-alpine

WORKDIR /backend

COPY package.json /backend/package.json

RUN npm i

COPY . .

RUN Is -a

EXPOSE 3000