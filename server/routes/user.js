import express from "express";
import { login,home, newUser } from "../controllers/users.js";
import { singleAvatar } from "../middlewares/multer.js";
 const app = express.Router();

 app.post("/new",singleAvatar,newUser)
 app.post("/login",login)
 app.get("/",home)
 

 export default app;