# Lab 2: SQLite database and CRUD routes

**Name:** Anirudh Bandhela  
**Registration Number:** 252U1R1025  
**Section:** CSE 2A, 223

## Live Link

Deployment pending.

## Project Description

This project demonstrates SQLite database integration with an Express.js server. It implements CRUD operations (Create, Read, Update, Delete) through HTTP routes.

## Technologies Used

- Node.js
- Express.js
- SQLite
- sqlite3
- sqlite
- Nodemon

## How to Run

1. Install Node.js.
2. Open the project folder in the terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the API at `http://localhost:3000`.

## Database

- Database file: `book.db`
- Table name: `book`
- Columns: `id`, `title`, `author`, `price`, `pages`

## API Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/books/` | Get all books |
| GET | `/books/:bookId/` | Get a book by ID |
| POST | `/books/` | Add a new book |
| PUT | `/books/:bookId/` | Update a book |
| DELETE | `/books/:bookId/` | Delete a book |

## Screenshots

### 1. Database Records

![Database Records](./screenshots/database-records.png)

### 2. Database Schema

![Database Schema](./screenshots/database-schema.png)

### 3. GET All Books

![GET All Books](./screenshots/get-all-books.png)

### 4. GET Book by ID

![GET Book by ID](./screenshots/get-book-by-id.png)

### 5. POST Add Book

![POST Add Book](./screenshots/post-add-book.png)

### 6. PUT Update Book

![PUT Update Book](./screenshots/put-update-book.png)

### 7. DELETE Book

![DELETE Book](./screenshots/delete-book.png)

### 8. Final Database

![Final Database](./screenshots/final-database.png)

## Notes

- Created the SQLite database and inserted book records using SQLite CLI.
- Implemented all five CRUD routes.
- Used parameterized SQL queries with `?` placeholders.
- Used async/await for database operations.
- Tested API routes using PowerShell because Postman Desktop was not working.
- Verified database changes directly using SQLite CLI.