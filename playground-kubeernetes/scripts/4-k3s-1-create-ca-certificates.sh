# Run on yours
scp ./tool-create-ca-certificate.sh eric@home-server:~/tool-create-ca-certificate.sh

# Run on Server
chmod +x ~/tool-create-ca-certificate.sh
./tool-create-ca-certificate.sh 10.10.10.50 client
./tool-create-ca-certificate.sh 10.10.10.50 request-header
./tool-create-ca-certificate.sh 10.10.10.50 server

rm ~/tool-create-ca-certificate.sh

sudo mkdir -p /var/lib/rancher/k3s/server/tls/
sudo cp ./certificates/client-ca.crt          /var/lib/rancher/k3s/server/tls/client-ca.crt
sudo cp ./certificates/client-ca.key          /var/lib/rancher/k3s/server/tls/client-ca.key
sudo cp ./certificates/request-header-ca.crt  /var/lib/rancher/k3s/server/tls/request-header-ca.crt
sudo cp ./certificates/request-header-ca.key  /var/lib/rancher/k3s/server/tls/request-header-ca.key
sudo cp ./certificates/server-ca.crt          /var/lib/rancher/k3s/server/tls/server-ca.crt
sudo cp ./certificates/server-ca.key          /var/lib/rancher/k3s/server/tls/server-ca.key

sudo cp ./certificates/server-ca.crt          /usr/local/share/ca-certificates/server-ca.crt
sudo update-ca-certificates

# Run on yours to backup keys
scp -r eric@home-server:~/certificates ./certificates
