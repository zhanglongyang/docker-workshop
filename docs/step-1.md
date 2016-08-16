Get started with docker basic commands
======================================

Hello World!
------------

-	`docker run hello-world`

Images
------

-	`docker pull ubuntu`
-	`docker images`
-	`docker rmi hello-world`
-	`docker push YOUR_IMAGE`

Containers
----------

### running ubuntu

-	`docker run -it ubuntu`
-	`uname -a` to check OS info
-	`apt-get update && apt-get install nginx` to install packages

### containers commands

-	`docker ps` to list **running** containers
-	`docker inspect CONTAINER`
-	`docker logs -f CONTAINER`
-	`docker stop CONTAINER`
-	`docker ps -a` to list **all** containers
-	`docker rm CONTAINER`
