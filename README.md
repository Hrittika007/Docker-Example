# Docker Example Application

## Application description

This is a simple Node.js application that demonstrates how to use Docker to containerize an Express.js server.

## How to Build the Docker Image

1. Make sure Docker is installed on your system.
2. Navigate to the project directory.
3. Run the following command to build the Docker image:
   ```sh
   docker build -t express-api:v1.0.0 .
   ```

## How to run the container

1. After building the Docker image, run the following command to start a container:

```sh
docker run -d -p 3000:3000 --name myapp express-api:v1.0.0
```

1. Open your browser and navigate to http://localhost:3000 to access the application.

## Available configuration options (environment variables, ports, etc.)

The application uses the following environment variables:

- `PORT`: The port on which the server runs. Default is `3000`.
  You can configure these variables in the .env file. The .env file is excluded from the Docker image using .dockerignore.

## Basic usage instructions

- After running the container, visit http://localhost:3000 in your browser.
- The application will display the message: "Welcome to Docker Example!".

## Troubleshooting tips

- If the container does not start, ensure that the Dockerfile and .dockerignore are correctly configured.
- Make sure the port 3000 is not already in use on your system.
- Check the logs of the container using:

```sh
docker logs <container_id>
```

- If you encounter issues with dependencies, ensure that package.json and package-lock.json are up to date.
