import express from "express";
import {Signup} from "../Controller/AuthController.js";

// import router from "./userRoutes";


const router = express.Router();

router.post('/signup', Signup);


export default router; 