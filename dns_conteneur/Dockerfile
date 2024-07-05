FROM  internetsystemsconsortium/bind9:9.19


RUN apt update \
    && apt install -y \
    bind9 \
    bind9utils \
    bind9-doc \
    geoip-bin \
    nano \
    dnsutils \
    net-tools \
    bash

# On copie les fichiers de configuration

COPY configuration/named.conf.local /etc/bind
COPY configuration/named.conf.options /etc/bind
COPY configuration/zone/db.esport.docker /etc/bind/zones/
COPY configuration/zone/db.biblio.docker /etc/bind/zones/

# Expose les ports
EXPOSE 53/tcp
EXPOSE 53/udp
EXPOSE 953/tcp

# Start the Name Service
CMD ["/usr/sbin/named", "-g", "-c", "/etc/bind/named.conf", "-u", "bind"]