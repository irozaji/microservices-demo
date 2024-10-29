# Microservice Demo

This project demonstrates a microservice architecture with two services: `product-service` and `order-service`. Each service is built using NestJS and communicates with a PostgreSQL database. The services are containerized using Docker and orchestrated with Docker Compose.

## Table of Contents

- [API Endpoints](#api-endpoints)
  - [Product Service](#product-service)
  - [Order Service](#order-service)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Services](#running-the-services)
  - [Running Tests](#running-tests)
- [Environment Variables](#environment-variables)

## API Endpoints

### Product Service

- **GET /products/all**: Retrieve all products.
- **GET /products/:id**: Retrieve a single product by ID.
- **POST /products/new**: Create a new product.
- **PUT /products/:id**: Update an existing product.
- **DELETE /products/:id**: Delete a product.
- **POST /products/decrease-quantity**: Decrease the quantity of a product.

### Order Service

- **GET /orders/all**: Retrieve all orders.
- **GET /orders/:id**: Retrieve a single order by ID.
- **POST /orders/new**: Place a new order.

## Setup

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/microservice-demo.git
   cd microservice-demo

   ```

2. Build the Docker images:

   ```sh
   docker-compose up -d
   ```

3. Check that the databases created on pgadmin:

   - Open your browser and go to `http://localhost:8080`
   - Login with the following credentials:
     - Email: `admin@example.com`
     - Password: `admin`
   - Add a new server with the following details:
     - Name: `products` or `orders`
     - Host name/address: `product-db` or `order-db`
     - Port: `5432`
     - Maintainance database: `productdb` or `orderdb`
     - Username: `postgres`
     - Password: `1`
   - Click `Save`

4. Setting up Postman for API invocations:

   - Import the Postman collection from `postman` folder.
   - Update the environment variables with the correct values:
     - `base_url`: `http://localhost:8081` (for api-gateway)
     - `token`: `leave empty` (for now)
   - In the Authentication Folder invoke the Generate Token request to update the token value automatically.

5. Happy Coding!
