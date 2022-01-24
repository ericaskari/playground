FROM atlassian/default-image:3
#FROM atlassian/pipelines-kubectl

RUN mkdir -p /opt/atlassian/pipelines/agent/build

WORKDIR /opt/atlassian/pipelines/agent/build

COPY run.sh run.sh
COPY yq_linux_amd64 yq_linux_amd64
COPY node-v16.13.2-linux-x64.tar.xz node-v16.13.2-linux-x64.tar.xz
RUN chmod +x run.sh

ENTRYPOINT /bin/bash
CMD /opt/atlassian/pipelines/agent/build/run.sh
#CMD /opt/atlassian/pipelines/agent/build/run.sh
#cp yq_linux_amd64 /usr/bin/yq && chmod +x /usr/bin/yq


#mkdir -p /usr/local/lib/nodejs
#tar -xJvf node-v16.13.2-linux-x64.tar.xz -C /usr/local/lib/nodejs
