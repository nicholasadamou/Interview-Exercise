# Issues

## [front-end](front-end) `docker` Issue

Currently, regarding docker, there is an issue with the front-end application making requests to the person service due to an issue with communication between containers.

This causes the UI to never exit the is loading state, making the UI unusable.

The best fix for this is to first start the [database](database) container.

Then, start the node server via running the following command:

```bash
yarn --cwd person-service start
```

⚠️ Make sure you have created and filled out the `.env` for [person-service](person-service) prior to executing the above command or else it will fail to start.

Then, proceed to bring up the [front-end](front-end) application using:

```bash
yarn --cwd front-end start
```

⚠️ Make sure you that you have started the [database](database) container prior to starting both the [person-service](person-service) container and the [front-end](front-end) container. If you do not do so, [person-service](person-service) will fail to start since the its first step is to parse the [`input.json`](person-service/src/assets/input.json) and add the group of people to the PostGRE database.
