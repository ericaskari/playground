FROM nginx:1.21.4

RUN apt update

RUN apt install wget

WORKDIR /usr/share/nginx/html

ARG FrontendAssetDownloadUrl
ARG TagName

ENV FrontendAssetDownloadUrl=$FrontendAssetDownloadUrl
ENV TagName=$TagName
ENV AppName=$AppName

# Copy the build output to replace the default nginx contents.

RUN wget -c $FrontendAssetDownloadUrl -O frontend.tar.gz

RUN tar -xf frontend.tar.gz

RUN rm -rf frontend.tar.gz

RUN sed -i='' -e "s|local-development|${TagName}|" ./assets/app-version.json

COPY assets/production/Frontend.Dockerfile.Assets/default.conf.template /etc/nginx/templates/default.conf.template

# Expose port 80
EXPOSE 80
