FROM node:14-alpine

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN npm install

COPY ./src /app/src

COPY ./entrypoint.sh /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]

