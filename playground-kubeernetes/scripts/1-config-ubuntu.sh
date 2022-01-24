# IP ADDRESS IS IN DMZ MODE
# PORT FORWARDING IS OFF


#Change Lid Close Behavior in Ubuntu 20.04

sudo sed -i='' -e "s|#HandleLidSwitch=suspend|HandleLidSwitch=ignore|" /etc/systemd/logind.conf
sudo systemctl restart systemd-logind.service


#Change passwords

sudo passwd eric
sudo passwd root

#Make sure ~/.ssh/config is configured.

#Host    home-server
#        HostName                10.10.10.50
#        Port                    22
#        User                    eric
#        IdentityFile            ~/.ssh/home-server--eric
#        LogLevel                VERBOSE
#        IdentitiesOnly          yes
#        ForwardAgent            yes
#	       StrictHostKeyChecking   no
#        IgnoreUnknown           AddKeysToAgent,UseKeychain
#        UseKeychain             no
#        AddKeysToAgent          no

ssh-copy-id -i $HOME/.ssh/home-server--eric.pub eric@home-server

sudo apt install zsh
zsh --version
chsh -s $(which zsh)


#https://helm.sh/docs/intro/install/
curl https://baltocdn.com/helm/signing.asc | sudo apt-key add -
sudo apt-get install apt-transport-https --yes
echo "deb https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm

#https://computingforgeeks.com/install-and-configure-dnsmasq-on-ubuntu/

sudo systemctl disable systemd-resolved
sudo systemctl stop systemd-resolved

sudo rm /etc/resolv.conf
sudo touch /etc/resolv.conf

cat <<EOF | sudo tee /etc/resolv.conf
nameserver 127.0.0.1
nameserver 1.1.1.1
EOF


sudo apt-get install dnsmasq

# add followings to /etc/dnsmasq.conf
# address=/ericaskari.com/10.10.10.50

# uncomment from /etc/dnsmasq.conf
# strict-order

sudo systemctl restart dnsmasq

dig A www.ericaskari.com
dig A www.ericaskari.com
