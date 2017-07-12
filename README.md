# TODO-manager

TODO-manager is a sample dockerized app to manage yours TODOs things and define a priority for it =D

# Features
  - Order your TODOs
  - Define and group yours TODOs a priority
  - CRUD priorities and TODOs

# Installation

### Pre requirements
---------------------------------------
To able to run the app You will need install the docker and docker-compose.
 - Docker -  ->   https://docs.docker.com/engine/installation/ 
 - Docker-compose  -->   https://docs.docker.com/compose/install/
### Ports
--------------------------------------
 - Port 8080 --> Run the Front-end
 - Port 9001 --> Run the Api
 - Port 3306 --> Run the MySql 

### Steps
-----------------------------------
After all pre requirements, just run the follow commands below:
```sh
$ git clone https://github.com/zzanette/...
$ cd todo-manager
$ docker-compose up -d
```
And you will access through the link:
http://localhost:8080

### Database
--------------------------------------
To be able to store data you need implement the database, if you already have mysql client installed just run:
```sh
$ mysql -h 127.0.0.1 -u root -proot todo-manager < ./app/data/setup-db/todo-manager.sql
```
Or fell free to connect with database with IDE and run the file in 
- ./todo-manager/app/data/setup-db/todo-manager.sql
- User: root
- Password: root

### Front-end
-------------------------------------
The front-end was maked with [angularJs](https://angularjs.org/) using the [Angular Material](https://github.com/angular/material) template. His location is on:
- ./todo-manager/app/angular-cli


### Api
---------------------------------------
The Api is running in PHP with the Micro Framework [Slim Framework](https://www.slimframework.com/docs/). Fell free to explore his struture in folder:
- ./todo-manager/app/api









