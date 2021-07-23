FROM node:10.19-alpine3.11

WORKDIR /app

RUN apk add python make g++

COPY package.json package-lock.json ./

RUN npm install

COPY . .

VOLUME [ "/app/src" ]
VOLUME [ "/app/public" ]

EXPOSE 8080

CMD ["npm", "run", "serve"]