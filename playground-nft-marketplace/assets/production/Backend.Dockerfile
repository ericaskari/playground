FROM node:14.18.1

ARG BackendAssetDownloadUrl
ARG TagName

ENV BackendAssetDownloadUrl=$BackendAssetDownloadUrl
ENV TagName=$TagName

WORKDIR /app

RUN wget -c $BackendAssetDownloadUrl -O backend.tar.gz

RUN tar -xf backend.tar.gz

RUN rm -rf backend.tar.gz

RUN npm install

RUN sed -i='' -e "s|local-development|${TagName}|" ./assets/app-version.json

HEALTHCHECK CMD curl --fail http://localhost:8000/api/healthcheck || exit 1

CMD [ "node", "/app/main.js" ]

EXPOSE 8000
