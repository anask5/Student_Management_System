import mongoose from "mongoose";


async function db () { 
try {

  await mongoose.connect("mongodb://127.0.0.1:27017/kriphin");
  console.log("MongoDB connected");

} catch (err) 
{
  console.error("Connection failed:", err);
  process.exit(1);
}
}

export default db;
