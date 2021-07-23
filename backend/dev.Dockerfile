FROM node:alpine

WORKDIR /app

RUN npm install nodemon -g

COPY package.json package-lock.json ./

RUN npm install

COPY . .

VOLUME [ "/app/src" ]

EXPOSE 3000

CMD ["npm", "run", "watch"]