FROM node:22.12-alpine
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
CMD [ "npm", "run", "dev" ]