FROM php:8.1-apache

# Install mysqli extension for PHP
RUN docker-php-ext-install mysqli

# Enable Apache rewrite module
RUN a2enmod rewrite

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Create directories for the different applications
RUN mkdir -p /var/www/html/esport
RUN mkdir -p /var/www/html/biblio

RUN sed -i 's/80/82/g' /etc/apache2/ports.conf
RUN sed -i 's/80/82/g' /etc/apache2/sites-available/*.conf

# Copy the initial index.php to each directory
COPY esport/esport-front/index.php /var/www/html/esport/index.php
COPY biblio/index.php /var/www/html/biblio/index.php

# Copy the virtual host configuration
COPY vhosts.conf /etc/apache2/sites-available/000-default.conf

# Expose port 80 for HTTP
EXPOSE 82
