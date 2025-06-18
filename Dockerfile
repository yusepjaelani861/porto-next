FROM node:22.15.0

WORKDIR /app

COPY . .

RUN rm -rf node_modules
RUN rm -rf .next

RUN yarn

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]