import express from "express";
import {Signup , signin , google } from "../Controller/AuthController.js";

// import router from "./userRoutes";


const router = express.Router();

router.post('/signup', Signup);
router.post('/signin', signin);
router.post('/google', google);
// router.post('/blog', Blog);


export default router; 