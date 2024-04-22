# Vending Machine REST API 

## Introduction
This document provides an overview of the Vending Machine REST API project. The project implements a vending machine system using ASP.NET with a three-layer architecture and Entity Framework for database operations.

## API Endpoints
The API exposes the following endpoints:
- **GET /api/products**: Retrieves a list of products available in the vending machine.
- **POST /api/products**: Allows a user to purchase a product from the vending machine.
- **POST /api/products{id}**: Allows a user to purchase a product from the vending machine. 
- **PUT /api/products{id}**: Allows a user to update a product from the vending machine. 
- **DELETE /api/products{id}**: Allows a user to delete a product from the vending machine. 

## Technologies Used
- **RESTful API**: Design pattern for building scalable web services.
- **C#**: Programming language used for implementing the application logic.
- **ASP.NET**: Framework for building web applications and APIs.
- **AutoMapper**: A versatile object-mapping library used for efficient mapping between different object types, reducing manual coding efforts and improving maintainability.
- **Entity Framework**: ORM (Object-Relational Mapping) framework for interacting with databases.

## Architecture Overview
The project follows the three-layer architecture pattern, consisting of the following layers:
- **Presentation Layer**: This layer handles incoming HTTP requests and provides responses. It includes controllers, models, and any other components related to handling HTTP requests and responses.
- **Business Logic Layer**: This layer contains the business logic of the application. It implements the rules and operations required by the vending machine system.
- **Data Access Layer**: This layer interacts with the database. It includes repositories, entities, and any other components responsible for database operations.

## Project Structure
The project structure follows the conventions of an ASP.NET application with a three-layer architecture:
- **Controllers**: Contains API controllers responsible for handling HTTP requests.
- **Services**: Implements the business logic of the application.
- **Data Access**: Includes repositories and entities for interacting with the database.
- **Models**: Defines data models used throughout the application.
- **DTOs (Data Transfer Objects)**: Defines objects used for transferring data between layers.


