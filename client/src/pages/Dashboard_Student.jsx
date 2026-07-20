import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
const Dashboard = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [roll_no, setRollNo] = useState('')
const navigate = useNavigate();
  useEffect(() => {
    checkLogin();
  }, []);

  async function checkLogin() {
    try {
      const response = await fetch("http://localhost:3000/api/student", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        navigate("/login");
      }

      const data = await response.json();
      await setEmail(data.email);
      await setName(data.name);
      await setRollNo(data.roll_no);
    } catch (err) {
      console.error(err);
      navigate("/login");
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
          font-family:Lato;
        }
        .dashboard{
          min-height:100vh;
          padding:120px 8% 50px;
          background:
            radial-gradient(circle at top left,#4f46e5 0%,transparent 35%),
            radial-gradient(circle at bottom right,#06b6d4 0%,transparent 35%),
            linear-gradient(135deg,#0f172a,#111827,#1e293b);
          color:white;
        }

        .header{
          margin-bottom:40px;
        }

        .header h1{
          font-size:42px;
          margin-bottom:8px;
        }

        .header p{
          color:#cbd5e1;
          font-size:17px;
        }

        .stats{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:25px;
          margin-bottom:40px;
        }

        .card{
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(18px);
          border:1px solid rgba(255,255,255,.12);
          border-radius:18px;
          padding:25px;
          transition:.3s;
        }

        .card:hover{
          transform:translateY(-8px);
          box-shadow:0 15px 30px rgba(0,0,0,.35);
        }

        .icon{
          font-size:35px;
          margin-bottom:15px;
        }

        .card h2{
          font-size:32px;
          margin-bottom:5px;
          color:#60a5fa;
        }

        .card p{
          color:#d1d5db;
        }

        .content{
          display:grid;
          grid-template-columns:1fr 2fr;
          gap:30px;
        }

        .panel{
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(18px);
          border:1px solid rgba(255,255,255,.12);
          border-radius:18px;
          padding:25px;
        }

        .panel h3{
          margin-bottom:20px;
          font-size:24px;
        }

        .activity{
          display:flex;
          justify-content:space-between;
          padding:14px 0;
          border-bottom:1px solid rgba(255,255,255,.08);
        }

        .activity:last-child{
          border:none;
        }

        .activity span{
          color:#ffffff;
        }

        .quick-actions{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:15px;

        }

        .action-btn{
          padding:14px;

          border:none;
          border-radius:12px;
          background: linear-gradient(135deg,rgba(59, 131, 246, 0.12), rgba(99, 101, 241, 0.14));
          color:white;
          font-size:18px;
          font-weight:600;
          cursor:pointer;
          transition:.3s;
        }
          a{
            text-decoration:none;
            color:white;
          }

        .action-btn:hover{
          transform:translateY(-3px);
          box-shadow:0 10px 20px rgba(59,130,246,.35);
        }

        @media(max-width:900px){

          .content{
            grid-template-columns:1fr;
          }

          .header h1{
            font-size:32px;
          }

        }
      `}</style>

      <div className="dashboard">

        <div className="header">
          <h1>📊 Dashboard</h1>
          <p>Welcome back!</p>
        </div>
          <p> Name: {name} </p>
          <p> Email: {email} </p>
          <p> Roll No: {roll_no} </p>
      </div>
    </>
  );
};

export default Dashboard;