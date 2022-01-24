FROM nginx:1.21.4

#WORKDIR /app

COPY ./entrypoint.sh /entrypoint.sh
COPY ./main.js main.js
COPY ./app-version.json ./assets/app-version.json

RUN chmod +x /entrypoint.sh

EXPOSE 8000
ENTRYPOINT ["/entrypoint.sh"]
#CMD ["node", "--version"]
#CMD ["sed", "-e", 's|local-development|${VERSION}|', "./assets/app-version.json"]
