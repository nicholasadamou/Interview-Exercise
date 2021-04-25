# Person-Service

A micro-service used to query a PostGRE database and expose a RESTful API.

## Running

Install dependencies:

```bash
yarn install
```

Create `.env` containing secrets:

```text
POSTGRES_URI=""

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

## API

Visit `localhost:5000/api-docs` to view the API documentation.

The API documentation UI was generated via [Swagger](https://swagger.io/).

## License

This project  is © 2021, Nicholas Adamou.

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE
