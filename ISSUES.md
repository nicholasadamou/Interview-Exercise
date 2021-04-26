# Issues

## [person-service](person-service) `docker-compose up` Issue

Currently, regarding docker, there is an issue bringing up the [person-service](person-service) container.

When it spin's up, it attempts to make a connection to the PostGRE database after parsing the [`input.json`](person-service/src/assets/input.json). However, it is unable to due to the fact that the PostGRE database cannot be found at `localhost:9999` as specified in the `POSTGRES_URI` secret even though it is running prior to spinning up [person-service](person-service).

```bash
person-service   | {"message":"Server has started on port 5445.","level":"info"}
person-service   | {"message":"connect ECONNREFUSED 127.0.0.1:9999","level":"error"}
person-service   | {"meta":{"req":{"url":"/person","headers":{"content-type":"application/json","accept":"*/*","content-length":"35","user-agent":"node-fetch/1.0 (+https://github.com/bitinn/node-fetch)","accept-encoding":"gzip,deflate","connection":"close","host":"localhost:5445"},"method":"POST","httpVersion":"1.1","originalUrl":"/person","query":{}},"res":{"statusCode":500},"responseTime":13},"level":"\u001b[32minfo\u001b[39m","message":"HTTP POST /person"}
person-service   | /usr/src/app/queries/person.js:111
person-service   |  const doesPersonExist = person.rows.length > 0;
person-service   |                                 ^
person-service   |
person-service   | TypeError: Cannot read property 'rows' of undefined
person-service   |     at addPerson (/usr/src/app/queries/person.js:111:33)
person-service   |     at processTicksAndRejections (node:internal/process/task_queues:94:5)
person-service exited with code 1
```

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
