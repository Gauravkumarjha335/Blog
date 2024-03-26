import  express  from "express";
import {test} from "../Controller/UserController.js";

const router = express.Router();

router.get('/test', test);

export default router