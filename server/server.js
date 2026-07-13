import express from 'express';
import dotenv from 'dotenv';
import db from '../server/config/db.js';
const app = express();
dotenv.config()
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));



startServer();


// DB connection
async function startServer (){
    await db();
    app.get('/', (req, res) => {
      res.send("Student Management API Running")
})

    app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
})
};


