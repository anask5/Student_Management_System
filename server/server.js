import express, { urlencoded } from "express";
import mongoose from "mongoose";
import db from '../server/config/db.js';
import userModel from "../server/models/userModel.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import cors from 'cors';
import auth from '../server/middleware/auth.js'
const app = express();
const port = 3000;

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, // React app
    methods: ["GET", "POST"],
  })
);


startServer();


// DB connection
async function startServer (){
    await db();
    app.get('/', (req, res) => {
      res.send("Student Management API Running")
})

app.post('/api/register', async (req, res) => {
    try {
    const newUser = req.body
    // PASSWORD HASHING 

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(newUser.password, salt);
    let createdUser = await userModel.create({
            name: newUser.name,
            password: secPass,
            email: newUser.email
          })
           let token =  jwt.sign({email: newUser.email,
            role: createdUser.role
           }, "secret",
                
             );
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax"
        });
        res.status(201).json({
    message: "Registered Successfully"
});
              }
                catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
})

app.post('/api/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const foundUser = await userModel.findOne({ email: email });
        if (!foundUser) {
        return res.status(404).json({
            message: "User not found"
        });
        }
        const isMatch = await bcrypt.compare(
            password,
            foundUser.password
        );
        if (isMatch) {
             let token =  jwt.sign({email: foundUser.email,
                role: foundUser.role
                          }, "secret",
                
             );
         res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax"
        });
            res.status(200).json({
             message: "Login Successfully"
});        } 
        else {
            res.status(401).json({
                message: "Invalid password"
            });
        }

    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

app.get("/api/me", auth, (req, res) => {
    res.json(req.user);
});
// app.get('/admin', (req, res) => {
//     try {
//         const data = jwt.verify(req.cookies.token, "secret");

//         if (data.admin === true) {
//             return res.sendFile(AdminPageFileLocation);
//         }
//     return res.status(403).send("Access Denied");
//     } catch (err) {
//         return res.status(401).send("Please login first");
//     }
// }); 
    app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
})
};


