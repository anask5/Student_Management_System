import React from "react";

const Profile = () => {
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Inter,Segoe UI,sans-serif;
        }

        .profile-page{
          min-height:100vh;
          padding:120px 8% 60px;
          background:
            radial-gradient(circle at top left,#4f46e5 0%,transparent 35%),
            radial-gradient(circle at bottom right,#06b6d4 0%,transparent 35%),
            linear-gradient(135deg,#0f172a,#111827,#1e293b);
          color:white;
        }

        .profile-card{
          max-width:1000px;
          margin:auto;
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(18px);
          -webkit-backdrop-filter:blur(18px);
          border:1px solid rgba(255,255,255,.12);
          border-radius:24px;
          padding:40px;
          box-shadow:0 20px 40px rgba(0,0,0,.35);
        }

        .profile-header{
          display:flex;
          align-items:center;
          gap:25px;
          flex-wrap:wrap;
          margin-bottom:40px;
        }

        .avatar{
          width:120px;
          height:120px;
          border-radius:50%;
          background:linear-gradient(135deg,#3b82f6,#6366f1);
          display:flex;
          justify-content:center;
          align-items:center;
          font-size:50px;
          font-weight:bold;
        }

        .profile-info h1{
          font-size:34px;
          margin-bottom:8px;
        }

        .profile-info p{
          color:#cbd5e1;
          font-size:16px;
        }

        .details{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:20px;
        }

        .detail-card{
          background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.1);
          border-radius:18px;
          padding:20px;
        }

        .detail-card h3{
          color:#60a5fa;
          margin-bottom:10px;
          font-size:18px;
        }

        .detail-card p{
          color:#e5e7eb;
          font-size:16px;
        }

        .actions{
          margin-top:35px;
          display:flex;
          gap:15px;
          flex-wrap:wrap;
        }

        .btn{
          padding:14px 28px;
          border:none;
          border-radius:12px;
          cursor:pointer;
          font-size:15px;
          font-weight:600;
          transition:.3s;
        }

        .edit-btn{
          background:linear-gradient(135deg,#3b82f6,#6366f1);
          color:white;
        }

        .password-btn{
          background:rgba(255,255,255,.08);
          color:white;
          border:1px solid rgba(255,255,255,.15);
        }

        .btn:hover{
          transform:translateY(-3px);
          box-shadow:0 10px 20px rgba(59,130,246,.3);
        }

        @media(max-width:768px){

          .profile-header{
            flex-direction:column;
            text-align:center;
          }

          .actions{
            justify-content:center;
          }

        }
      `}</style>

      <div className="profile-page">
        <div className="profile-card">

          <div className="profile-header">

            <div className="avatar">
              👨‍🎓
            </div>

            <div className="profile-info">
              <h1>Rahul Sharma</h1>
              <p>Bachelor of Computer Applications (BCA)</p>
              <p>Student ID: STU2026001</p>
            </div>

          </div>

          <div className="details">

            <div className="detail-card">
              <h3>Email</h3>
              <p>rahul@example.com</p>
            </div>

            <div className="detail-card">
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="detail-card">
              <h3>Department</h3>
              <p>Computer Science</p>
            </div>

            <div className="detail-card">
              <h3>Semester</h3>
              <p>6th Semester</p>
            </div>

            <div className="detail-card">
              <h3>Attendance</h3>
              <p>94%</p>
            </div>

            <div className="detail-card">
              <h3>CGPA</h3>
              <p>8.92</p>
            </div>

          </div>

          <div className="actions">
            <button className="btn edit-btn">
              ✏️ Edit Profile
            </button>

            <button className="btn password-btn">
              🔒 Change Password
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Profile;