# Base image selection
FROM node:latest

# Set the working directory
WORKDIR /app


COPY package*.json .

# Install dependencies
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]