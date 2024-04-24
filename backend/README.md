Backend
======

The app has 2 main modules

* `users`
* `auth`

### Users Module

This modules contains the following for user APIs

* Data transfer objects for creating new user via API
* User Entity for abstraction of a user in db
* User Controller for routes
* User Service for interaction with user in db

### Auth Module

This is a fairly simple module that is just used to provide `http-basic-auth` on relevant routes
