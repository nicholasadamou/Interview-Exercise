# Auth-Service

A micro-service used to authenticate a user.

## Running

Install dependencies:

```bash
yarn install
```

Create `.env` containing secrets:

```text
SECRET=
BASE_URL=
CLIENT_ID=
ISSUER_BASE_URL=

PORT=
```

Start the _development_ server:

```bash
yarn dev
```

To start the _production_ server, run the following:

```bash
yarn start
```

## Docker

Build the docker image using [`make`](Makefile):

```bash
make all
```

Start the docker container:

```bash
docker-compose up
```

## License

This project  is © 2021, Nicholas Adamou.

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE
