FROM node:16.13-alpine3.11

WORKDIR /app

RUN npm install nodemon -g

COPY package.json package-lock.json ./

RUN npm install

COPY . .

VOLUME [ "/app/src" ]

EXPOSE 3000

CMD ["npm", "run", "watch"]