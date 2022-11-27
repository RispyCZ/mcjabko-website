FROM node:current-alpine3.16 as builder

COPY . /app

WORKDIR /app

RUN  apk add --update --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main vips-dev && rm -rf /var/cache/apk/* && \
    npm install && \
    npm run build

FROM nginx:1.21.3-alpine

COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 80