#FROM node:14.18.1 as base
#
#WORKDIR /app
#
#COPY ./package.json ./package.json
#COPY ./package-lock.json ./package-lock.json
#
#RUN npm install
#
#COPY ./          ./
#
#
#FROM base as Frontend
#
#RUN rm -rf App.Frontend.Web/src
#
#CMD [ "npm", "run", "Start:App.Frontend.Web", "--prefix", "/app"]
#
#FROM base as Backend
#
#RUN rm -rf /app/App.Backend.Server/src
##HEALTHCHECK CMD curl --fail http://localhost:8001/api/healthcheck || exit 1
#
#CMD [ "npm", "run", "Start:App.Backend.Server", "--prefix", "/app"]

FROM nginx as Proxy

COPY ./assets/development/nginx.conf        /etc/nginx/nginx.conf
COPY ./assets/development/default.conf      /etc/nginx/conf.d/default.conf
