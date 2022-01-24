
#https://metallb.universe.tf/installation/
#https://kubernetes.github.io/ingress-nginx/deploy/baremetal/

kubectl edit configmap -n kube-system kube-proxy

# Apply following: mode: "ipvs" and strictARP: true
# TO Exist Vim press ctrl + C and then write :x to save and exit

#apiVersion: kubeproxy.config.k8s.io/v1alpha1
#kind: KubeProxyConfiguration
#mode: "ipvs"
#ipvs:
#  strictARP: true

kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.11.0/manifests/namespace.yaml
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.11.0/manifests/metallb.yaml


cat <<EOF > metallb-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: metallb-system
  name: config
data:
  config: |
    address-pools:
    - name: default
      protocol: layer2
      addresses:
      - 10.10.10.51-10.10.10.59

EOF

kubectl apply -f metallb-config.yaml


#https://krew.sigs.k8s.io/docs/user-guide/setup/install/

#https://krew.sigs.k8s.io/docs/user-guide/quickstart/

kubectl krew update
kubectl krew search
kubectl krew install ingress-nginx


kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.0/deploy/static/provider/cloud/deploy.yaml

kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=120s

kubectl get all -A
Make sure it has External ip 10.10.10.51


#NAMESPACE       NAME                                         TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
#ingress-nginx   service/ingress-nginx-controller             LoadBalancer   172.19.151.163   10.10.10.51   80:32625/TCP,443:31243/TCP   107s
