import React, { useState } from "react";

const AddStudent = () => {
  const [name, setName] = useState('');
  const [rollno, setRollNo] = useState('');
  const [semester, setSemester] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [attendance, setAttendance] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  async function  handleSubmit(e){
    e.preventDefault();
    console.log(name);
     try { const response = await fetch("https://student-management-system-8u00.onrender.com/api/addStudent", {
            credentials: "include",
             method: "POST",
            headers: {
             "Content-Type": "application/json"
    },
         body: JSON.stringify({
        name,
        email,
        rollno,
        semester,
        cgpa,
        attendance,
        phone,
        branch,
        })
});
   const data = await response.json();
 if (response.ok) {
    setMessage(data.message);
    alert("Student Added Successfully!");
}
else{
    setMessage(data.message);
}
     } catch(err) {
        console.log(err)
     }
    }

  return (
    <>
      <style>{`
      @font-face {
          font-family: Lato;
          src: url('public/Lato-Regular.woff') format('woff');
        }
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Lato,Segoe UI,sans-serif;
        }

        .add-student-page{
          min-height:100vh;
          padding:120px 8% 50px;
          background:
            radial-gradient(circle at top left,#4f46e5 0%,transparent 35%),
            radial-gradient(circle at bottom right,#06b6d4 0%,transparent 35%),
            linear-gradient(135deg,#0f172a,#111827,#1e293b);
          color:white;
        }

        .page-title{
          margin-bottom:30px;
          text-align:center;
        }

        .page-title h1{
          font-size:38px;
        }

        .page-title p{
          margin-top:8px;
          color:#cbd5e1;
        }

        .form-card{
          max-width:900px;
          margin:auto;
          padding:35px;
          border-radius:20px;
          backdrop-filter:blur(18px);
          background:rgba(255, 255, 255, 0.01);
          border:1px solid rgba(255,255,255,.12);
          box-shadow:0 10px 40px rgba(0,0,0,.25);
        }

        .form-grid{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:20px;
        }

        .input-group{
          display:flex;
          flex-direction:column;
        }

        .input-group.full{
          grid-column:1/-1;
        }

        label{
          margin-bottom:8px;
          color:#cbd5e1;
          font-size:14px;
        }

        input,
        select,
        textarea{
          padding:14px 16px;
          border:none;
          outline:none;
          border-radius:12px;
          background:rgba(255,255,255,.08);
          color:white;
          border:1px solid rgba(255,255,255,.12);
          font-size:15px;
        }

        textarea{
          resize:none;
          height:100px;
        }

        input::placeholder,
        textarea::placeholder{
          color:#94a3b8;
        }

        select option{
          color:black;
        }

        .buttons{
          display:flex;
          justify-content:flex-end;
          gap:15px;
          margin-top:30px;
        }

        .btn{
          border:none;
          cursor:pointer;
          padding:14px 28px;
          border-radius:12px;
          color:white;
          font-size:15px;
          font-weight:600;
          transition:.3s;
        }

        .cancel{
          background:#475569;
        }

        .save{
          background:linear-gradient(135deg,#3b82f6,#6366f1);
        }

        .btn:hover{
          transform:translateY(-3px);
          box-shadow:0 10px 20px rgba(59,130,246,.35);
        }

        @media(max-width:768px){

          .form-grid{
            grid-template-columns:1fr;
          }

          .buttons{
            flex-direction:column;
          }

          .btn{
            width:100%;
          }

        }
        .wa-ge{
          height:35px;
        }


      `}</style>
      <p className="wa-ge"></p>

      <div className="add-student-page">

        <div className="page-title"> 
          <h1>Add Student➕</h1>
          <p>Fill in the student information below.</p>
        </div>

        <form className="form-card" onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="input-group">
              <label>ROLL NO </label>
              <input
                type="text"
                name="rollno"
                placeholder="STU005"
onChange={(e) => setRollNo(e.target.value)}       
required    />
            </div>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter student name"
onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="student@email.com"
onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 9876543210"
onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Branch</label>
              <input
                type="text"
                name="branch"
                placeholder="B.tech"
onChange={(e) => setBranch(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Semester</label>
              <input
                type="text"
                name="semester"
                placeholder="1st"
onChange={(e) => setSemester(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Attendance (%)</label>
              <input
                type="number"
                name="attendance"
                placeholder="95"
  onChange={(e) => setAttendance(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>CGPA (%)</label>
              <input
                type="number"
                name="cgpa"
                placeholder="9.5"
  onChange={(e) => setCgpa(e.target.value)}
              />
            </div>

          </div>

          <div className="buttons">
            <button
              type="button"
              className="btn cancel"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
            <p> {message} </p>

            <button
              type="submit"
              className="btn save"
            >
              Submit Student
            </button>
          </div>

        </form>

      </div>
    </>
  );
};

export default AddStudent;