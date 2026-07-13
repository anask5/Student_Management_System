import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    Roll_NO: {
      type: Number,
      required: true,
      unique: true,
    },

email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
},
    branch: {
      type: String,
      required: true,
    },

    semester: {
      type: Number,
     required: true
    },
    cgpa: {
      type: Number,
     required: true
    },
    attendance: {
      type: Number,
     required: true
    },
    phone_no: {
      type: String,
     required: true
    }
),
{
        timestamps: true
    }
};

const Student = mongoose.model("Student", studentSchema);

export default Student;