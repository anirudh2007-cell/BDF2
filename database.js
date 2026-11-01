
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path");

const connectToDatabase = async () => {
    const databasePath = process.env.DB_PATH || "./book.db";

    const database = await sqlite.open({
        filename: path.resolve(databasePath),
        driver: sqlite3.Database
    });

    return database;
};

module.exports = connectToDatabase;
