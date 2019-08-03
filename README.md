# DEaDASS UI

Database Execution and Deletion Administrative Self Service

DEaDASS is a database management system to allow automated creation and deletion of various database instances, as well as eventually replicating and replacing the functionality of [phpMyAdmin](https://www.phpmyadmin.net) and [phpPgAdmin](http://phppgadmin.sourceforge.net/doku.php).
It is written in Java with Spring.

This repository hosts the DEaDASS UI, the backend may be found [here](https://github.com/ComputerScienceHouse/DEaDASS).

## Local Development
You're going to need [node](https://nodejs.org/en/) and ideally use [nvm](https://github.com/nvm-sh/nvm).

### Setup with nvm

```
nvm install
nvm use
npm install
```

### Set up API
By default the application will try to make calls against the production [DEaDASS API](https://github.com/ComputerScienceHouse/DEaDASS). If you need to test against a local backend, you're going to need to override the environment variables

```
cp .env .env.local
```

Edit `REACT_APP_API_ROUTE` to point to `http://localhost:8080`
