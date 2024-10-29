# Dockerfile
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Run tests
RUN npm run test

# Build the app
RUN npm run build

# Expose the app port
EXPOSE 3001

# Run the app
CMD ["npm", "run", "start:prod"]
