import express from "express";
import { blogcontroller } from "../Controller/BlogController.js";

const router = express.Router();

router.get('/postblog', blogcontroller);

export default router