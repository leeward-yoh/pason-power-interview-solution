
FROM alpine:latest

ADD requirements.txt /
RUN apk add --no-cache python3 python3-dev g++ && \
    ln -s /usr/include/locale.h /usr/include/xlocale.h && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    pip3 install influxdb==3.0.0 && \
    pip3 install cython && \
    pip3 install numpy==1.11.0 && \
    pip3 install pandas==0.18.0 && \
    rm /requirements.txt && \
    apk del g++ python3-dev && \
    rm /usr/include/xlocale.h && \
    rm -r /root/.cache

ADD data.csv .
ADD load_data.py .

CMD ["python3", "load_data.py"]
