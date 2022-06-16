### A React, Express and MongoDb app template all neatly wrapped up in a Docker container

A containerised MERN stack app template all ready to go. FE, BE and DB are all set up and already talking to each other. Repo includes a couple of code examples too.

- MongoDb
- Express
- React
- Node

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Docker Desktop](https://www.docker.com/products/docker-desktop/) 

From your command line:

```bash
# Clone this repository
$ git clone git@github.com:iO-Academy/docker-mern.git

# Go into the repository
$ cd docker-mern

# Switch it on
$ docker-desktop up
```

## Other notes to be aware of

Both the `client` and the `api` parts of the project use `.env` files to manage Base URLs and DB connection creds

To connect to A MongoDb GUI (eg:MongoDb Compass) use the following string:
`mongodb://root:password@localhost:9999/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`
If it doesnt work 1st time, try it again a 2nd. 
