FROM atlassian/default-image:3

WORKDIR /opt/atlassian/bitbucketci/agent/build


COPY ./entrypoint.sh /entrypoint.sh
COPY ./node-v16.13.2-linux-x64.tar.xz ./_ci/.node/node-v16.13.2-linux-x64.tar.xz

RUN chmod +x /entrypoint.sh

EXPOSE 8000
ENTRYPOINT ["/entrypoint.sh"]
#CMD ["node", "--version"]
#CMD ["sed", "-e", 's|local-development|${VERSION}|', "./assets/app-version.json"]
