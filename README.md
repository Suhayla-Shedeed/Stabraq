
# React E-commerce Task

## Objective
This is a small e-commerce web application that allows users to:
* Register and log in with their credentials
* Browse a list of products categorized by type
* View detailed information about individual products
* Add products to a cart and manage the cart contents

## Features

### 1. User Registration and Login
* Registration form with fields for:
  * First Name (Required)
  * Last Name
  * Username (Required)
  * Password (Must be at least 8 characters with one digit, one uppercase letter, and one special character)
  * Email (Validated format)
  * Address
* Login functionality to access the application

### 2. Home Page
* Navigation bar with:
  * Home
  * Login Information (First Name, Last Name)
  * My Cart
  * About
  * Contact Us
  * Logout
* Product categories displayed as expandable/collapsible accordion sections
* Integration with the [FakeStore API](https://fakestoreapi.com/products) to fetch and display product categories and products

### 3. Product Details Page
* Displays detailed information about a selected product
* Option to add the product to the cart

### 4. My Cart
* Displays all products added to the cart
* Drag-and-drop sortable list for cart items with real-time updates

## API Endpoints
- Fetch categories: `https://fakestoreapi.com/products/categories`
- Fetch products by category: `https://fakestoreapi.com/products/category/{category_name}`
- Fetch product details: `https://fakestoreapi.com/products/{product_id}`

## Setup and Installation
### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- [Git](https://git-scm.com/) for version control.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Suhayla-Shedeed/Stabraq.git
   ```
2. Navigate to the project directory:
   ```bash
   cd my-task
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173` to view the application.
