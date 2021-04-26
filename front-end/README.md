# Front-End

The front-end application that is used to display a elegant UI based on the requirements laid out in the interview question.

## Running

Create `.env` containing secrets:

```text
API_SERVICE_HOST=
API_SERVICE_PORT=
REACT_APP_AUTHORIZATION_TOKEN=
```

Install dependencies:

```bash
yarn install
```

Start the _development_ server:

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
