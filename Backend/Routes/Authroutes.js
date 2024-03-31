import express from "express";
import {Signup , signin} from "../Controller/AuthController.js";

// import router from "./userRoutes";


const router = express.Router();

router.post('/signup', Signup);
router.post('/signin', signin);


export default router; 