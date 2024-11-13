# Use an official Ubuntu base image
# FROM ubuntu:latest

# # Update package list and install required packages
# RUN apt-get update -y && \
#     apt-get install -y apache2

# # Run the command to create the index.html file
# RUN echo "Hell22o from $(hostname -i)" > /var/www/html/index.html

# # Create a script to start Apache
# RUN echo '#!/bin/bash' > /root/run_apache.sh && \
#     echo 'mkdir -p /var/run/httpd' >> /root/run_apache.sh && \
#     echo 'mkdir -p /var/lock/httpd' >> /root/run_apache.sh && \
#     echo '/usr/sbin/apache2ctl -D FOREGROUND' >> /root/run_apache.sh && \
#     chmod +x /root/run_apache.sh

# # Expose port 80
# EXPOSE 80

# # Start Apache using the script
# CMD ["/root/run_apache.sh"]

FROM python
WORKDIR /app
COPY . /app
CMD ["python","rng.py"]
