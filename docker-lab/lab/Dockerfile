FROM python:3.10.15-alpine3.20

WORKDIR /config

COPY requrimnets.txt . 


RUN pip install -r   requrimnets.txt # when change in requrimnets its the build take a long to build

COPY main.py .

EXPOSE 80

CMD ["python" , "main.py"]

#  docker run -p 80:80 --entrypoint sh 