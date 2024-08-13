# React Json-Server CRUD Application

## Project Overview

This React application allows users to manage a list of items. It includes two primary functionalities:

1. **Home Page (`/`)**:
   - Displays a list of items fetched from the backend.
   - Each item has a "Delete" button to remove it from the list.

2. **Create Item Page (`/create`)**:
   - Provides a form to create a new item.
   - Users enter an item name and submit the form to add the item.

The application interacts with a backend REST API using Axios for CRUD operations.

## Modules

- **`index.js`**:
  - Entry point of the React application.
  - Renders the `App` component.

- **`App.js`**:
  - Sets up routing with React Router.
  - Routes:
    - `/` - Displays the `ItemList` component.
    - `/create` - Displays the `CreateItem` component.

- **`api.js`**:
  - Contains functions to interact with the REST API:
    - `getItems` - Fetches all items.
    - `getItem` - Fetches a single item by ID.
    - `createItem` - Creates a new item.
    - `updateItem` - Updates an existing item.
    - `deleteItem` - Deletes an item by ID.

- **`components/ItemList.js`**:
  - Fetches and displays the list of items.
  - Allows users to delete items from the list.

- **`components/CreateItem.js`**:
  - Provides a form to input a new item's name.
  - Submits the form to create a new item and navigate back to the home page.

## Dependencies

- **React**: Core library for building the user interface.
- **React Router**: For handling routing in the application.
- **Axios**: For making HTTP requests to the backend API.
- **Tailwind CSS** (if used): For styling the application.

## Installation of Dependencies

To install the required dependencies, use the following commands:

1. **React and React Router**:
    ```bash
    npm install react react-dom react-router-dom
    ```

2. **Axios**:
    ```bash
    npm install axios
    ```

3. **Tailwind CSS** (if used):
    ```bash
    npm install tailwindcss
    ```

## Running the Application

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory**:
    ```bash
    cd <project-directory>
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.
