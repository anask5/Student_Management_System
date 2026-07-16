import express, { urlencoded } from "express";
import mongoose from "mongoose";
import db from '../server/config/db.js';
import userModel from "../server/models/userModel.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import cors from 'cors';
import auth from '../server/middleware/auth.js'
import studentModel from '../server/models/StudentModel.js';
import isTeacher from "./middleware/isTeacher.js";
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
    methods: ["GET", "POST", "PUT", "DELETE"],
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

app.put('/api/updateStudent/:id', auth,isTeacher, async (req, res) => {
  try {
    const rollNo = req.params.id;

    const student = await studentModel.findOneAndUpdate(
      { rollNo: rollNo },
      req.body,
      { new: true }
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      student,
      message: "Student Updated Successfully"
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

app.delete('/api/deleteStudent/:id', auth,isTeacher, async (req, res) => {
  try {
    const rollNo = Number(req.params.id);

    const student = await studentModel.findOneAndDelete(
      { rollNo: rollNo }
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      student,
      message: "Student Deleted Successfully"
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

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


app.post("/api/addStudent", auth,isTeacher, async (req, res) => {

            try {
            const data = await req.body;
            console.log(data);
           const response = await studentModel.create({
                name: data.name,
                rollNo: data.rollno,
                email: data.email,
                branch: data.branch,
                semester: data.semester,
                cgpa: data.cgpa,
                attendance: data.attendance,
                phoneNo: data.phone,

            })
            res.status(201).json({
                success: true,
                message:" student added succesfully "
            }) }
            catch(err){
                       return res.status(400).json({
                            success: false,
                            message: err.message || "Failed to add student"
                        });
            }
})

app.get("/api/getStudents", auth,isTeacher, async (req, res) => {
    try {
        const students = await studentModel.find();

        return res.status(200).json({
            success: true,
            students,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

app.post("/api/logout", auth, async (req, res) => {
    try {
         res.clearCookie("token", {
            httpOnly: true,
            sameSite: "lax",
        });
          return res.status(200).json({
            success: true,
            message: "Logout Successfully"
          })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

    app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
})
};


