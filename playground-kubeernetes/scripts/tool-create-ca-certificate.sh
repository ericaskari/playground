
MASTER_IP=$1
CA_NAME=$2

mkdir ./certificates
CA_DIR=./certificates/${CA_NAME}

openssl genrsa -out ${CA_DIR}-ca.key 2048
openssl req -x509 -new -nodes -key ${CA_DIR}-ca.key -subj "/CN=${MASTER_IP}" -days 10000 -out ${CA_DIR}-ca.crt
openssl genrsa -out ${CA_DIR}-server.key 2048
cat <<EOF > ${CA_DIR}-csr.conf
[ req ]
default_bits = 2048
prompt = no
default_md = sha256
req_extensions = req_ext
distinguished_name = dn

[ dn ]
C = FI
ST = FI
L = FI
O = FI
OU = FI
CN = ${MASTER_IP}

[ req_ext ]
subjectAltName = @alt_names

[ alt_names ]
DNS.1 = local.ericaskari.com
DNS.2 = localhost
IP.1 = ${MASTER_IP}
IP.2 = 127.0.0.1
IP.3 = 10.10.10.50

[ v3_ext ]
authorityKeyIdentifier=keyid,issuer:always
basicConstraints=CA:FALSE
keyUsage=keyEncipherment,dataEncipherment
extendedKeyUsage=serverAuth,clientAuth
subjectAltName=@alt_names
EOF

openssl req -new -key ${CA_DIR}-server.key -out ${CA_DIR}-server.csr -config ${CA_DIR}-csr.conf
openssl x509 -req -in ${CA_DIR}-server.csr -CA ${CA_DIR}-ca.crt -CAkey ${CA_DIR}-ca.key \
-CAcreateserial -out ${CA_DIR}-server.crt -days 10000 \
-extensions v3_ext -extfile ${CA_DIR}-csr.conf

