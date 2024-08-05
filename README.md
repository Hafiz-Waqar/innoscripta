## Running the Project without Docker

RUN yarn install to install all the dependencies.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) installed on your machine.
- [Yarn](https://yarnpkg.com/getting-started/install) installed on your machine.

### Running the Project

```bash
yarn dev
```

The project will be running on `http://localhost:5173`.

## Running the Project with Docker

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.

### Build the Docker image

```bash
docker build -t innoscripta .
```

### Running the Docker container

```bash
docker run -p 5173:5173 innoscripta
```

The project will be running on `http://localhost:5173`.

## Running the Project with Docker Compose

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

### Running the Docker container

```bash
docker-compose up --build
```

The project will be running on `http://localhost:5173`.

## Running the Tests

```bash
yarn test
```

## Stopping and Removing the Docker Container and Image

### Find the Docker container ID

```bash
docker ps
```

### Stopping the Docker container

```bash
docker stop <container_id>
```

### Removing the Docker container

```bash
docker rm <container_id>
```

### Removing the Docker image

```bash
docker rmi innoscripta
```
