FROM node:alpine3.11

WORKDIR /app

COPY package.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY . .

EXPOSE 7258

CMD ["npm","start"]


