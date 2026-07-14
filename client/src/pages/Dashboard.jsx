import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
const navigate = useNavigate();
  useEffect(() => {
    checkLogin();
  }, []);

  async function checkLogin() {
    try {
      const response = await fetch("http://localhost:3000/api/me", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      navigate("/login");
    }
  }
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Inter,Segoe UI,sans-serif;
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
          grid-template-columns:2fr 1fr;
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
          color:#9ca3af;
        }

        .quick-actions{
          display:grid;
          gap:15px;
        }

        .action-btn{
          padding:14px;
          border:none;
          border-radius:12px;
          background:linear-gradient(135deg,#3b82f6,#6366f1);
          color:white;
          font-size:15px;
          font-weight:600;
          cursor:pointer;
          transition:.3s;
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
          <p>Welcome back! Here's an overview of your Student Management System.</p>
        </div>

        <div className="stats">

          <div className="card">
            <div className="icon">👨‍🎓</div>
            <h2>520</h2>
            <p>Total Students</p>
          </div>

          <div className="card">
            <div className="icon">👨‍🏫</div>
            <h2>48</h2>
            <p>Faculty Members</p>
          </div>

          <div className="card">
            <div className="icon">📚</div>
            <h2>32</h2>
            <p>Courses</p>
          </div>

          <div className="card">
            <div className="icon">✅</div>
            <h2>95%</h2>
            <p>Attendance</p>
          </div>

        </div>

        <div className="content">

          <div className="panel">
            <h3>📝 Recent Activities</h3>

            <div className="activity">
              <p>John Smith registered successfully</p>
              <span>10 min ago</span>
            </div>

            <div className="activity">
              <p>Attendance updated for BCA 3rd Year</p>
              <span>30 min ago</span>
            </div>

            <div className="activity">
              <p>Semester Results Published</p>
              <span>1 hour ago</span>
            </div>

            <div className="activity">
              <p>New Course Added: Data Science</p>
              <span>Today</span>
            </div>

          </div>

          <div className="panel">

            <h3>⚡ Quick Actions</h3>

            <div className="quick-actions">
              <button className="action-btn">
                ➕ Add Student
              </button>

              <button className="action-btn">
                📅 Mark Attendance
              </button>

              <button className="action-btn">
                📚 Manage Courses
              </button>

              <button className="action-btn">
                📊 Generate Report
              </button>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Dashboard;