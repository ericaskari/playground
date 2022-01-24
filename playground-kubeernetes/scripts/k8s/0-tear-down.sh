NODE_NAME=home-server

sudo kubectl drain ${NODE_NAME} --delete-emptydir-data --force --ignore-daemonsets
sudo kubeadm reset
sudo iptables -F
sudo iptables -t nat -F
sudo iptables -t mangle -F
sudo iptables -X

