FROM node:16-alpine AS builder
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build
COPY . .

FROM node:16-alpine AS server
WORKDIR /app
COPY package* ./
RUN yarn install --production
COPY --from=builder ./app/dist ./
EXPOSE 3000
CMD ["node", "main.js"]

