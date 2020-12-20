FROM node:12-alpine AS build-stage

RUN apk add git

COPY ./.git /app/.git
COPY ./package.json  /app/package.json
COPY ./package-lock.json  /app/package-lock.json
COPY ./blog /app/blog
COPY ./docs /app/docs
COPY ./src /app/src
COPY ./static /app/static
COPY ./sidebars.js /app/sidebars.js
COPY ./docusaurus.config.js /app/docusaurus.config.js
COPY ./build-search-data.js /app/build-search-data.js

WORKDIR /app

RUN npm ci --no-optional
RUN touch /app/src/theme/SearchBar/search-data.js
# Build initial static pages
RUN npm run build
# Run search indexing on the built pages
RUN node build-search-data.js
# Build the final static version including search index
RUN npm run build

FROM docker-hub-proxy.support.aurora.svt.se/library/nginx:mainline-alpine AS deploy-stage


# Configure nginx to run as nginx user, and bind on 8080 which doesnt require privileges
RUN rm /etc/nginx/conf.d/*
COPY ./default.conf /etc/nginx/conf.d/
COPY ./nginx.conf /etc/nginx/
EXPOSE 8080
USER nginx

COPY --from=build-stage /app/build /usr/share/nginx/html