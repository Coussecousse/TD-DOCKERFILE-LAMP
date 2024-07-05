FROM php:8.1-apache

WORKDIR /var/www/html

# RUN apt-get update && apt-get install -y nodejs npm

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

COPY . /var/www/html/

EXPOSE 80
