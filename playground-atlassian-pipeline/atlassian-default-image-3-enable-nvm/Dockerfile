FROM atlassian/default-image:3

WORKDIR /opt/atlassian/bitbucketci/agent/build

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
