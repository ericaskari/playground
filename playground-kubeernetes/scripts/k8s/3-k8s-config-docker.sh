sudo mkdir /etc/docker
cat <<EOF | sudo tee /etc/docker/daemon.json
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF

sudo systemctl enable docker
sudo systemctl daemon-reload
sudo systemctl restart docker


CLOUDFLARE_API_KEY="oFzgmvXMHCv2m-1jo1kjdZqLqNJ534GvkNJ49-mw" &&
docker run -d --network=host --restart=always --name=essentials-cloudflare-ddns-watch -e API_KEY=${CLOUDFLARE_API_KEY} -e ZONE=ericaskari.com oznu/cloudflare-ddns
