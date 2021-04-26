# Interview Exercise [![Build Status](https://travis-ci.org/nicholasadamou/interview-exercise.svg?branch=master)](https://travis-ci.org/nicholasadamou/interview-exercise)

This project was developed in accordance with the requirements laid out in [INTERVIEW_QUESTION.md](INTERVIEW_QUESTION.md).

## Assumptions

For simplicity sake, I have decided to package this project into a mono repo. This makes it easier to build and spin up each container quickly due to the use of `npm` scripts. However, each individual project is a docker container so, each project could be easily converted into a micro service architecture.

Additionally, because this is just a demo project I have placed the environment related variables for the each docker container inside of the `docker-compose.yml` to make it easier for distribution and easier testing. If this were geared towards a production environment, I would place the secrets within a `.env` file or into an alternatively secure location.

## Issues

Please refer to [ISSUES.md](ISSUES.md) regarding current problems and their fixes.

## Running

From this directory build the project:

```bash
# It will automatically install dependencies
# prior to building the project.
yarn build
```

## Docker

From this directory execute the following command:

```bash
# This will build each of the docker containers
# and will spin them up in the background.
yarn docker
```

Give it a few minutes to bring up the [front-end](/front-end) container. `webpack` production builds can be slow.

## Development

It is highly recommended that if you would like to develop this project further, you should navigate into each project directory's individually and run the development commands specified in their respective README's in seperate terminal sessions.

I also highly recommend [WebStorm IDE](https://www.jetbrains.com/webstorm/) for developing any Node or React based application.

## License

This project  is © 2021, Nicholas Adamou.

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE
