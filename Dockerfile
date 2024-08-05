# Use an official node image as a base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and yarn-lock
COPY package*.json ./

# Copy the .env file
COPY .env .env

# Install dependencies
RUN yarn

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn run build

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run the application
CMD ["yarn", "dev"]
