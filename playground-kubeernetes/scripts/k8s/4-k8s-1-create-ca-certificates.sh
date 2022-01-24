# Run on yours
scp ./tool-create-ca-certificate.sh eric@home-server:~/tool-create-ca-certificate.sh

# Run on Server
chmod +x ~/tool-create-ca-certificate.sh
./tool-create-ca-certificate.sh 10.10.10.50 root
./tool-create-ca-certificate.sh 10.10.10.50 front-proxy
./tool-create-ca-certificate.sh 10.10.10.50 etcd-ca
