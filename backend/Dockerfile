FROM node:14-alpine as base

WORKDIR /backend

COPY package.json package-lock.json ./
RUN npm install

FROM base as prod
CMD ["npm", "start"]

FROM base as test 
CMD ["npm", "test"]
