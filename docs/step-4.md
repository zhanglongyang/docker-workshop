# Get started with [docker-compose](https://docs.docker.com/v1.8/compose/yml/)
```
version: '2'
services:
  redux-todo:
    build: ./redux-todo
    ports:
      - "3001:3001"
    volumes:
      - ./redux-todo:/app
      - /app/node_modules
    links:
      - oauth-server

  oauth-server:
    build: ./oauth-server
    ports:
      - "3002:3002"
    volumes:
      - ./oauth-server:/app
      - /app/node_modules
    links:
      - db

  db:
    image: mongo:3.3
    ports:
      - "27017:27017"
```
