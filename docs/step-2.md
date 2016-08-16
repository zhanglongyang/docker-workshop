Get started with Dockerfile
===========================

Server Provisioning
-------------------

1.	select a server from a pool of available servers
2.	load base software (OS and libraries / packages / tools used by your application)
3.	upload your application (source code / package)
4.	appropriately customise and configure your application
5.	start your application

run [nginx](https://hub.docker.com/_/nginx/) server
---------------------------------------------------

### without Dockerfile

#### 1. run nginx server

`docker run -p 80:80 nginx`

#### 2. serve your own page

-	`cd docs/nginx/`
-	`docker run -p 80:80 -v $(pwd):/usr/share/nginx/html:ro nginx`
-	`docker inspect -f "{{json .Mounts}}" $CONTAINER | jq .`

### with Dockerfile

#### 1. create Dockerfile

```
FROM nginx
```

#### 2. `docker build -t "nginx-with-html" .`

#### 3. `docker images | grep nginx-with-html`

#### 4. `docker run -p 80:80 -v $(pwd):/usr/share/nginx/html:ro nginx-with-html`

#### 5. `docker inspect -f '{{json .Mounts}}' $CONTAINER | jq .`

Additional resources:
---------------------

[Best practices for writing Dockerfiles](https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/)
