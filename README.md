# Nikolai Momot

Copy contents of `.env.example` into `.env`

`yarn` to install deps

`yarn db:up` to start the PSQL database (requires docker)

`yarn db:down` to stop the PSQL database

Note: Docker Compose will create a `postgres` directory to persist a local volume

`yarn db:connect` to connect to the database

`yarn migrate:up` to run latest migrations

`yarn migrate:down` to rollback the last set of migrations

`yarn migrate:new <name>` to create a new migration with the `name`provided

`yarn dev` to start the service

Use the Postman collection to test the endpoints

Place user's ID into the `x-user-id` header of the request to access that user's notes

Note: Users have been pre-created: their IDs are `1` for `nikolai` and `2` for `thirdfort`.

Use the POST endpoint to create a note, here are the required fields:
```
{
    "text": "this is a note", // The note you want to store
    "archived": false // Whether or not the note is archived
}
```

Use the PUT endpoint to update a note, here are the required fields:
```
{
    "text": "this is a note", // The note you want to store
    "archived": false // Whether or not the note is archived
}
```

To archive a note, use te PUT endpoint and set the `archived` property to `true`.
To unarchive a note, use te PUT endpoint and set the `archived` property to `false`

To list unarchived notes, use the GET All endpoint and specify thw `archived` query param to `false`
To list archived notes, use the GET All endpoint and specify thw `archived` query param to `true`

To fetch an individual note, use the GET One endpoint
Note: This will work for both archived and non-archived notes

To delete an individual note, use the Delete One endpoint
Note: This will work for both archived and non-archived notes