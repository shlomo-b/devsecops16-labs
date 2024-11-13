FROM ubuntu 

# RUN apt update & install ncal -y 

# ADD test.txt text.txt /

# RUN rm Dockerfile 
WORKDIR /config
COPY . . 
# ENV PORT $DEFAULT_PORT=80

# EXPOSE $PORT
# USER shlomo

RUN chmod  +x env_exporter.sh
CMD [ "./env_exporter.sh" ]
