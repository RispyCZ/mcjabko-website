FROM node:current-alpine3.16 as builder

COPY . /app

WORKDIR /app

RUN npm install && \
    npm run build

FROM nginx:1.21.3-alpine

COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 80

