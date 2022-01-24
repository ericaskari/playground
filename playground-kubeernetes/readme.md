

    watch -n 1 kubectl get ing,svc,deployments,pods,secrets,challenge,order,ClusterIssuer,Issuer,CertificateRequest,Certificate



Give access to ports for minikube

    minikube tunnel

Create deployment

    kubectl create deployment --image nginx nginx-application-deployment

Delete deployment

    kubectl delete -n default deployment nginx-application-deployment

Get deployments

    kubectl get deployment

Get pods

    kubectl get pods

Exposing service

    kubectl expose deployment nginx-application --port=80 --type=LoadBalancer


Delete service

    kubectl delete service nginx-application

Delete deployment

    kubectl delete nginx-application


Enable minikube ingress 
    minikube addons enable ingress


Create Certificate

    kubectl create secret tls ssl-secret --key ./ssl.key --cert ./ssl.crt




```bash
# Print config and save it to kubeadm-config.yaml then replace cgroupDriver with cgroupfs

kubeadm config print init-defaults --component-configs KubeletConfiguration
sudo kubeadm reset
rm -rf $HOME/.kube
```


/etc/docker/daemon.json
```json
{
  "exec-opts": ["native.cgroupdriver=systemd"]
}
```

```
sudo kubeadm init --config kubeadm-config.yaml
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
kubectl taint nodes --all node-role.kubernetes.io/master-
```

```bash
eric@home-server ~ % nano /etc/docker/daemon.json
eric@home-server ~ % ip link
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: enp4s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DEFAULT group default qlen 1000
    link/ether 50:46:5d:45:59:7d brd ff:ff:ff:ff:ff:ff
3: wlp3s0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/ether 60:36:dd:93:1e:3f brd ff:ff:ff:ff:ff:ff
4: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default 
    link/ether 02:42:8d:1c:b7:6c brd ff:ff:ff:ff:ff:ff
eric@home-server ~ % sudo cat /sys/class/dmi/id/product_uuid
4e435451-384a-3034-4533-50465d45597d
eric@home-server ~ % sudo swapoff -a  

```

kubeadm init --pod-network-cidr=172.18.0.1/16
watch -n 1 kubectl get ing,svc,deployments,pods,secrets,ClusterIssuer,Issuer,CertificateRequest,Certificate -n=default
