
const express = require("express");
const connectToDatabase = require("./database");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

let db = null;

// GET - Get all books
app.get("/books/", async (request, response) => {
    const books = await db.all("SELECT * FROM book;");
    response.send(books);
});

// GET - Get a book by ID
app.get("/books/:bookId/", async (request, response) => {
    const { bookId } = request.params;

    const book = await db.get(
        "SELECT * FROM book WHERE id = ?;",
        [bookId]
    );

    response.send(book);
});

// POST - Add a new book
app.post("/books/", async (request, response) => {
    const { title, author, price, pages } = request.body;

    const query = `
        INSERT INTO book (title, author, price, pages)
        VALUES (?, ?, ?, ?);
    `;

    await db.run(query, [title, author, price, pages]);

    response.status(201).send("Book added successfully");
});

// PUT - Update a book by ID
app.put("/books/:bookId/", async (request, response) => {
    const { bookId } = request.params;
    const { title, author, price, pages } = request.body;

    const query = `
        UPDATE book
        SET
            title = ?,
            author = ?,
            price = ?,
            pages = ?
        WHERE id = ?;
    `;

    await db.run(query, [title, author, price, pages, bookId]);

    response.send("Book updated successfully");
});

// DELETE - Delete a book by ID
app.delete("/books/:bookId/", async (request, response) => {
    const { bookId } = request.params;

    const query = `
        DELETE FROM book
        WHERE id = ?;
    `;

    await db.run(query, [bookId]);

    response.send("Book deleted successfully");
});

// Initialize database and start server
const initializeDBAndServer = async () => {
    try {
        db = await connectToDatabase();

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server Running on port ${PORT}`);
        });
    } catch (error) {
        console.log(`DB Error: ${error.message}`);
        process.exit(1);
    }
};

initializeDBAndServer();
