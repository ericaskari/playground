CLOUDFLARE_API_KEY="oFzgmvXMHCv2m-1jo1kjdZqLqNJ534GvkNJ49-mw" &&
docker run -d --network=host --restart=always --name=essentials-cloudflare-ddns-watch -e API_KEY=${CLOUDFLARE_API_KEY} -e ZONE=ericaskari.com oznu/cloudflare-ddns
