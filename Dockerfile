FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN yarn

COPY . .

RUN yarn build

# CMD ["node", "dist/server.js"]
CMD ["yarn", "dev"]

