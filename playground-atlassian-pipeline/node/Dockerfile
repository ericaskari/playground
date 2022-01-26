FROM atlassian/default-image:3

WORKDIR /opt/atlassian/bitbucketci/agent/build

COPY ./entrypoint.sh /entrypoint.sh

COPY ./node-v16.13.2-linux-x64.tar.xz ./node-v16.13.2-linux-x64.tar.xz

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
