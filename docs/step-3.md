Connect Docker Containers
=========================

Docerize Front-end application
------------------------------

-	`cd redux-todo`
-	`docker build -t "redux-todo" .`
-	`docker run -p 3001:3001 redux-todo`

Docerize Back-end application
-----------------------------

-	`cd oauth-server`
-	`docker build -t "oauth-server" .`

	### Link Back-end service with DB

-	`docker run -p 27017:27017 --name db mongo`

-	`docker run -p 3002:3002 --link db oauth-server`

-	`docker exec $CONTAINER cat /etc/hosts`
