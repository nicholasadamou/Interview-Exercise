FROM postgres:9.6.6-alpine

LABEL solution="nicholasadamou"
LABEL component="postgres"
LABEL description="This is the PostgreSQL database."

COPY *.sql /docker-entrypoint-initdb.d/
RUN chmod a+r /docker-entrypoint-initdb.d/*
