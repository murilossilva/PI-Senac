import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    port: '3307',
    user: "root",
    password: "root",
    database: "banco_usuarios"
})  