#https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/


sudo mkdir -p /etc/kubernetes/pki/
sudo mkdir -p /etc/kubernetes/pki/etcd

# when ca is available in /etc/kubernetes/pki it will not create them.
sudo cp root-ca.crt /etc/kubernetes/pki/ca.crt
sudo cp root-ca.key /etc/kubernetes/pki/ca.key
sudo cp root-ca.crt /usr/local/share/ca-certificates/kube-ca.crt

# add ca to trusted ca
sudo update-ca-certificates


sudo cp front-proxy-ca.crt /etc/kubernetes/pki/front-proxy-ca.crt
sudo cp front-proxy-ca.key /etc/kubernetes/pki/front-proxy-ca.key

sudo cp etcd-ca.crt /etc/kubernetes/pki/etcd/ca.crt
sudo cp etcd-ca.key /etc/kubernetes/pki/etcd/ca.key





# --dry-run fails when /etc/kubernetes/pki/ca.key or crt exist.
# Test without it and add them when needed.

sudo kubeadm init \
--pod-network-cidr 172.18.0.0/16 \
--service-cidr 172.19.0.0/16 \
--apiserver-advertise-address 10.10.10.50 \
--apiserver-bind-port 6443 \
--node-name home-server \
--service-dns-domain primary-cluster.lcoal \
--token-ttl 0 \
--upload-certs

#--upload-certs \
#--dry-run
#--token XWoL2y82cJGdViL7LZrQvRGQo7zdVgbXhjorhZvvyjdfbXTt \


mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

#Install networking model
kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml

#Everything should be running fine.
kubectl get all -A

#It should not give ssl error. just forbidden for now.
curl https://10.10.10.50:6443
