FROM node:14.18.2

WORKDIR /opt/atlassian/bitbucketci/agent/build

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
