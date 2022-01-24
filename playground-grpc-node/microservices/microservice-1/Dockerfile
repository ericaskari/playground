FROM node:latest
RUN npm install grpc-tools -g
RUN ls -la

WORKDIR /usr/src/app
ENV PB_REL="https://github.com/protocolbuffers/protobuf/releases"
RUN curl -LO "$PB_REL/download/v3.13.0/protoc-3.13.0-linux-x86_64.zip"
RUN unzip protoc-3.13.0-linux-x86_64.zip -d $HOME/.local
RUN export PATH="$PATH:$HOME/.local/bin"

WORKDIR /usr/src/app
COPY package.json package-lock.json                             ./
RUN  npm install --verbose=silly
COPY nodemon.json tsconfig.json tslint.json webpack.prod.js     ./
COPY protos                         protos
RUN npm run build:proto

COPY src                            src
COPY models                         models
COPY typings                        typings
CMD ls -la && npm run start
EXPOSE 8000
