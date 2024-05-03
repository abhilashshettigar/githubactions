# Use an official Node.js runtime as the base image
FROM node:20-alpine3.19 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json 
COPY package*.json ./

# Install Node.js dependencies
RUN npm config set strict-ssl false
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
ENTRYPOINT [ "npm","run","start" ]
