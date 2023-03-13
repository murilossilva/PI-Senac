import express from "express";
import { addUser, getReservations, getUsers, addReservation, getUserInfo, getUserEmail, getAllUsers } from "../controllers/user.js";

const router = express.Router()

router.get('/', getAllUsers)

router.post('/login', getUsers)

router.post('/info', getUserInfo)

router.post('/getEmail', getUserEmail)

router.post("/", addUser)

router.post('/reservations', getReservations)

router.post('/new-reservation', addReservation)

export default router