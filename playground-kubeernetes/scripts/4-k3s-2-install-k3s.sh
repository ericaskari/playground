#https://rancher.com/docs/k3s/latest/en/quick-start/



#/usr/local/bin/k3s-killall.sh
#/usr/local/bin/k3s-uninstall.sh
#Copy creds
sudo mkdir -p /var/lib/rancher/k3s/server/tls/
sudo cp ./certificates/client-ca.crt          /var/lib/rancher/k3s/server/tls/client-ca.crt
sudo cp ./certificates/client-ca.key          /var/lib/rancher/k3s/server/tls/client-ca.key
sudo cp ./certificates/request-header-ca.crt  /var/lib/rancher/k3s/server/tls/request-header-ca.crt
sudo cp ./certificates/request-header-ca.key  /var/lib/rancher/k3s/server/tls/request-header-ca.key
sudo cp ./certificates/server-ca.crt          /var/lib/rancher/k3s/server/tls/server-ca.crt
sudo cp ./certificates/server-ca.key          /var/lib/rancher/k3s/server/tls/server-ca.key

#curl -sfL https://get.k3s.io | sh -s - --docker --resolv-conf /etc/rancher/k3s/resolv.conf

mkdir .kube
sudo cp /etc/rancher/k3s/k3s.yaml ./.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

echo "export KUBECONFIG=/home/eric/.kube/config" >> .zshrc
echo "source <(kubectl completion zsh)" >> .zshrc
echo "alias ds='kubectl describe'" >> .zshrc

source .zshrc

sed -i='' -e "s|https://127.0.0.1:6443|https://10.10.10.50:6443|" $HOME/.kube/config

# Run on yours to remote kubectl
scp eric@home-server:~/.kube/config ~/.kube/config
