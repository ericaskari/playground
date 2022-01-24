FROM node:latest
RUN ls -la

WORKDIR /usr/src/app
RUN ls -la
COPY package.json               package.json
COPY package-lock.json          package-lock.json
RUN npm i
COPY nodemon.json               nodemon.json
COPY tsconfig.json              tsconfig.json
COPY tslint.json                tslint.json
COPY webpack.prod.js            webpack.prod.js

COPY src                        src
RUN ls -la
CMD npm run start
EXPOSE 8000
