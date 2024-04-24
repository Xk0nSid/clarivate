Users Project
======

# Setup/Installation

## Requirements

* Node v18 and above
* pnpm/yarn/npm (pnpm preferred)

### Using Docker & Docker compose

```sh
$ git clone <this_repo>
$ cd <repo_dir>
$ docker compose up
```

This will build and run db, server and frontend containers. The following relevant ports are forwarded

* Port `5173` for frontend/vuejs
* Port `3000` for backend/nestjs

Both applications can be access using `localhost:<port>`.

### Manual/Separate setup

1. First comment out the `server` and `frontend` section in the `compose.yaml` file

2. Run `docker compose up`. This will create a postgres db.

3. Goto `backend` and run the following

```sh
$ pnpm install
$ pnpm run start:dev
```

4. Goto `frontend` and run the following

```sh
$ pnpm install
$ pnpm run dev
```

5. The same ports will be accessible using this method as well.

### Default Credentials

1. DB

```
username = postgres
password = app@123
```

2. HTTP Basic Auth for APIs

```
username = app
password = app@123
```