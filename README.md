# Clubhive

> Build your very own Clubhouse clone

## Requirements

- A laptop or a desktop computer
- Chrome browser
- Internet

## App Screenshots

#### On phone
![Screenshot on a phone](/public/images/clubhive-mobile.png)

#### On desktop
![Screenshot on a desktop browser](/public/images/clubhive-web.png)

## Instructions to install

1. **Install Docker**
    `sudo apt install docker.io`

2. **Install PostgreSQL and PostGIS**
I highly recommend a Docker installation:
    - Install [Docker](https://docs.docker.com/get-docker/)
    - Download and run the official [PosgreSQL/PostGIS docker image](https://registry.hub.docker.com/r/postgis/postgis/)

    Alternatively, you can perform an installation directly on the host operating system:
    - [Download](https://www.postgresql.org/download/) the official PostgreSQL installer for your system.

3. Install NodeJS
4. Clone or fork this repo
5. Run `npm install` in your project root
6. **Start PostgreSQL database service**
    `docker run --name clubhouse-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgis/postgis`

## To execute psql commands
1. SSH into your Postgres docker container: `docker exec --user postgres -it clubhouse-postgres /bin/bash`
2. Run `psql` on the terminal