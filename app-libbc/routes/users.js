import express from "express";
import { getUsers, getUserEmail, getAllUsers, buyBook, getBooksUser, getAllBooks, getBooks, addUser } from "../controllers/user.js";

const router = express.Router()

router.get('/', getAllUsers)

router.post('/login', getUsers)

router.post('/buscar-livros', getBooks)

router.post('/livros', getUserEmail)

router.post("/livros-indicacao", getAllBooks)

router.post('/livros-usuario', getBooksUser)

router.post('/efetuar-compra', buyBook)

router.post('/criar-conta', addUser)

export default router