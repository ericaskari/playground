#https://github.com/kurokobo/awx-on-k3s/blob/main/tips/expose-hosts.md

#Add --resolv-conf /etc/rancher/k3s/resolv.conf as an argument for k3s server command.

cat /etc/systemd/system/k3s.service
#```
#ExecStart=/usr/local/bin/k3s \
#    server \
#        '--docker' \
#        '--resolv-conf' \
#        '/etc/rancher/k3s/resolv.conf' \
#```


cat <<EOF | sudo tee /etc/rancher/k3s/resolv.conf
nameserver 1.1.1.1
EOF

cat /etc/rancher/k3s/resolv.conf
cat /etc/resolv.conf

sudo systemctl restart dnsmasq
sudo systemctl daemon-reload
sudo systemctl restart k3s
kubectl -n kube-system delete pod -l k8s-app=kube-dns

kubectl run -it --rm --restart=Never busybox --image=praqma/network-multitool:minimal -- nslookup google.com
kubectl run -it --rm --restart=Never busybox --image=praqma/network-multitool:minimal -- nslookup ericaskari.com
kubectl run -it --rm --restart=Never busybox --image=praqma/network-multitool:minimal -- nslookup www.ericaskari.com
kubectl run -it --rm --restart=Never busybox --image=praqma/network-multitool:minimal -- curl -L www.ericaskari.com
