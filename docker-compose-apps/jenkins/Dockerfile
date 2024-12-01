# Use the official Jenkins image with Java 17
FROM jenkins/jenkins:lts-jdk11

# Switch to root user to perform administrative tasks
USER root

# Install Docker and required tools
RUN apt-get update && \
    apt-get install -y docker.io && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* \
    apt-get install -y curl &&  \
    apt-get install -y iputils-ping \
    apt install net-tools -y

# Add the Jenkins user to the Docker group
RUN groupadd -f docker && usermod -aG docker jenkins

# Grant permissions for the Docker socket
# RUN chmod 777 /var/run/docker.sock

# Switch back to the Jenkins user
USER jenkins
