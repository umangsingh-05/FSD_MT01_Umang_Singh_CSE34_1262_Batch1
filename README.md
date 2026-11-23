# FSD_MT01_Umang_Singh_CSE34_1262_Batch1
FSD_MT01_Umang_Singh_CSE34_1262_Batch1

# Product Inventory Management API

A REST API built using Node.js and Express.js to manage product inventory.

## Features

- Get all products
- Add a new product
- Get product by ID
- Update product
- Delete product
- Filter products by category
- Input validation
- HTTP status code handling

## Technologies Used

- Node.js
- Express.js
- JavaScript

## Setup

Install dependencies:

npm install

Run the server:

node server.js

Server runs at:

http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/products | Get all products |
| POST | /api/products | Add product |
| GET | /api/products/:id | Get product by ID |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |
| GET | /api/products/filter?category=value | Filter by category |