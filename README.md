# Academic Management System

## Project Overview

The Academic Management System is a web-based application designed to manage and visualize student data. It provides a user-friendly interface to display student information in tables, as well as graphs and charts to represent their marks in various subjects and attendance records.

## Features

- **User-Friendly UI**: Intuitive and easy-to-navigate interface.
- **Data Visualization**: Displays student data in tables, graphs, and charts.
- **Responsive Design**: Mobile-friendly tables and charts.
- **CRUD Operations**: Create, Read, Update, and Delete student records.


## Technologies Used

- **Frontend**:
  - HTML: Markup language for creating the structure of the web pages.
  - Tailwind CSS: Utility-first CSS framework for styling the application.
- **Backend**:
  - Node.js: JavaScript runtime for building the server-side application.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database for storing student data.

## CRUD Operations

CRUD stands for **Create**, **Read**, **Update**, and **Delete**. These are the four basic operations for managing persistent data in a database.

- **Create**: Adds new records to the database. For example, adding a new student to the system.
- **Read**: Retrieves records from the database. For example, fetching the list of all students or the details of a specific student.
- **Update**: Modifies existing records in the database. For example, updating a student's marks or attendance.
- **Delete**: Removes records from the database. For example, deleting a student's record from the system.

CRUD operations are essential for the functionality of any data-driven application, allowing users to interact with the data in a meaningful way.

## REST APIs

A REST (Representational State Transfer) API is a set of rules and conventions for building and interacting with web services. REST APIs use standard HTTP methods and can be easily integrated with various frontend and backend technologies.

### API Endpoints

Here are the main API endpoints used in the Academic Management System:

- **Create a Student**: `POST /api/students`
  - Adds a new student to the database.
  - **Request Body**: JSON object containing student details (e.g., name, class, subjects, marks, attendance).

- **Get All Students**: `GET /api/students`
  - Retrieves a list of all students.
  - **Response**: JSON array of student objects.

- **Get a Student by ID**: `GET /api/students/:id`
  - Retrieves details of a specific student by their ID.
  - **Response**: JSON object containing student details.

- **Update a Student**: `PUT /api/students/:id`
  - Updates the details of a specific student by their ID.
  - **Request Body**: JSON object containing updated student details.

- **Delete a Student**: `DELETE /api/students/:id`
  - Deletes a specific student by their ID.
  - **Response**: Confirmation message.
![image](https://github.com/Prachiti15/AcademicManagementSystem/assets/91412980/3f7b7b91-f412-4255-9186-347c027bb454)
![image](https://github.com/Prachiti15/AcademicManagementSystem/assets/91412980/b3e1d83a-4ce0-4e3a-ae4f-d5021e8fd93a)
![image](https://github.com/Prachiti15/AcademicManagementSystem/assets/91412980/12a273d4-9ee5-40e4-88c6-12dc66d076f1)
![image](https://github.com/Prachiti15/AcademicManagementSystem/assets/91412980/73d13223-b8b1-4e70-a83b-a043e0f65805)
![image](https://github.com/Prachiti15/AcademicManagementSystem/assets/91412980/98c7674b-62dc-4a43-ad82-8ad163aee700)
