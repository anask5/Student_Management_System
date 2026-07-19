import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Students = () => {

 
  async function getStudents() {
    try {
        const response = await fetch("http://localhost:3000/api/getStudents",
          {
            credentials: "include",
          });
        const data = await response.json();
        setStudents(data.students);
    } 
    catch(err){
        console.error(err);
        setMessage(err.message);


    }
  }
  
async function  deleteStudent(rollno){
    const confirmDelete = window.confirm(
    "Are you sure you want to delete this student?"
);

if (!confirmDelete) {
    return;
}
     try { const response = await fetch(`http://localhost:3000/api/deleteStudent/${rollno}`, {
            credentials: "include",
             method: "DELETE",
            headers: {
             "Content-Type": "application/json"
    },
         body: JSON.stringify({
        rollno,
        })
});
   const data = await response.json();
 if (response.ok) {
    alert("Student Deleted Successfully!");
    await getStudents();
}
else{
    setMessage(data.message);
}
     } catch(err) {
        console.log(err)
     }
    }
useEffect(() => {
    getStudents();
}, []);

  const [students, setStudents] = useState([])
  const [message, setMessage] = useState('')
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
          font-family:Lato;
        }

        .students-page{
          min-height:100vh;
          padding:120px 8% 50px;
          background:
            radial-gradient(circle at top left,#4f46e5 0%,transparent 35%),
            radial-gradient(circle at bottom right,#06b6d4 0%,transparent 35%),
            linear-gradient(135deg,#0f172a,#111827,#1e293b);
          color:white;
        }

        .header{
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap:wrap;
          gap:20px;
          margin-bottom:30px;
        }

        .header h1{
          font-size:38px;
        }

        .header p{
          color:#cbd5e1;
          margin-top:8px;
        }

        .toolbar{
          display:flex;
          gap:15px;
          flex-wrap:wrap;
        }

        .search{
          padding:12px 16px;
          width:260px;
          border:none;
          outline:none;
          border-radius:12px;
          background:rgba(255,255,255,.08);
          color:white;
          border:1px solid rgba(255,255,255,.12);
        }

        .search::placeholder{
          color:#cbd5e1;
        }

        .add-btn{
          border:none;
          cursor:pointer;
          padding:12px 22px;
          border-radius:12px;
          color:white;
          font-weight:600;
          background:linear-gradient(135deg,#3b82f6,#6366f1);
          transition:.3s;
        }

        .add-btn:hover{
          transform:translateY(-3px);
          box-shadow:0 10px 20px rgba(59,130,246,.35);
        }

        .table-card{
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(18px);
          border:1px solid rgba(255,255,255,.12);
          border-radius:20px;
          overflow:auto;
        }

        table{
          width:100%;
          border-collapse:collapse;
          min-width:700px;
        }

        th{
          background:rgba(255,255,255,.08);
          color:#60a5fa;
          text-align:left;
          padding:18px;
          font-size:15px;
        }

        td{
          padding:18px;
          border-top:1px solid rgba(255,255,255,.08);
          color:#e5e7eb;
        }

        tr:hover{
          background:rgba(255,255,255,.05);
        }

        .status{
          background:#22c55e22;
          color:#4ade80;
          padding:6px 12px;
          border-radius:20px;
          display:inline-block;
          font-size:14px;
        }

        .actions{
          display:flex;
          gap:10px;
        }

        .btn{
          border:none;
          cursor:pointer;
          padding:8px 14px;
          border-radius:8px;
          color:white;
          transition:.3s;
        }

        .edit{
          background:#2563eb;
        }

        .delete{
          background:#dc2626;
        }

        .btn:hover{
          opacity:.85;
          transform:translateY(-2px);
        }

        @media(max-width:768px){

          .header{
            flex-direction:column;
            align-items:flex-start;
          }

          .toolbar{
            width:100%;
          }

          .search{
            width:100%;
          }

        }
      `}</style>
          <p> { message } </p>
      <div className="students-page">

        <div className="header">
          <div>
            <h1>👨‍🎓 Students</h1>
            <p>Manage student records and information.</p>
          </div>

          <div className="toolbar">
            <input
              className="search"
              type="text"
              placeholder="🔍 Search student..."
            />

            <button className="add-btn">
               <Link to="/addStudent">  + Add Student </Link>
            </button>
          </div>
        </div>

        <div className="table-card">

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Branch</th>
                <th>Semester</th>
                <th>Attendance</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {students.map((students) => (
                <tr key={students.rollNo}>
                  <td>{students.rollNo}</td>
                  <td>{students.name}</td>
                  <td>{students.branch}</td>
                  <td>{students.semester}</td>
                  <td>{students.attendance}</td>

                  <td>
                    <span className="status">Active</span>
                  </td>

                  <td>
                    <div className="actions">
                      <button className="btn edit"> <Link to="/updateStudent"> Edit </Link></button>
                      <button className="btn delete" onClick={() => deleteStudent(students.rollNo)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
};

export default Students;