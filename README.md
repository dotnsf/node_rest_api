# Node REST API

## Overview

Sample REST API application with Node.js


## Environment values

  - `CORS` : CORS allowed URL origin

  - `DATABASE_URL` : URL connection string for CouchDB/Cloudant


## Running data services on docker

- CouchDB

  - `$ docker run -d --name couchdb -p 5984:5984 -e COUCHDB_USER=user -e COUCHDB_PASSWORD=pass couchdb`

  - `http://localhost:5984/_utils/`

    - Create `db` database.

  - , then you can specify like `$ DATABASE_URL=http://localhost:5984/db node app`


## Avalable CRUD APIs

- `Create`

  - `POST /api/db/item`

  - `POST /api/db/items`

- `Read`

  - `GET /api/db/item/:id`

  - `GET /api/db/items`

  - `GET /api/db/items/:key`

- `Update`

  - `PUT /api/db/item/:id`

- `Delete`

  - `DELETE /api/db/item/:id`

  - `DELETE /api/db/items`


## Avalable Swagger API(only for localhost)

- `http://localhost:8080/_doc`


## Licensing

This code is licensed under MIT.


## Copyright

2022 K.Kimura @ Juge.Me all rights reserved.

