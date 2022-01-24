helm install \
  cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --version v1.6.1 \
  --set installCRDs=true \
  --set 'extraArgs={--dns01-recursive-nameservers=1.1.1.1:53}' \
  --set 'extraArgs={--dns01-recursive-nameservers-only}'


helm upgrade --install \
  reflector emberstack/reflector \
  --namespace kube-system


$ helm repo add emberstack https://emberstack.github.io/helm-charts
$ helm repo update
$ helm upgrade --install reflector emberstack/reflector
