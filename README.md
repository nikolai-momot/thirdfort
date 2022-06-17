# Nikolai Momot

Copy contents of `.env.example` into `.env`

`yarn` to install deps

`yarn db:up` to start the database (requires docker)

`yarn migrate:up` to run migrations

`yarn dev` to start the service

Use the Postman collection to test the endpoints

Place user's ID into the `x-user-id` header of the request to access that user's notes

Note: Users have been pre-created: their IDs are `1` for `nikolai` and `2` for `thirdfort`.
