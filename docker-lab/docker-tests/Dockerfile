# # Use the official nginx image as the base image
FROM nginx:alpine

# # Set the working directory in the container
WORKDIR /usr/share/nginx/html

# # Copy the blackjack.html file to the working directory
COPY /test.html  /usr/share/nginx/html

# # Copy all other files in the current directory to the working directory
COPY . .

# Remove existing content in /var/www/html
## this is important 
RUN rm -rf /usr/share/nginx/html

# # Expose port 80
EXPOSE 80

# # Start nginx
CMD ["nginx", "-g", "daemon off;"]








