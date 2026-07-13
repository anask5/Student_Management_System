import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Inter,Segoe UI,sans-serif;
        }

        .register-page{
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:100px 20px;
          background:
            radial-gradient(circle at top left,#4f46e5 0%,transparent 35%),
            radial-gradient(circle at bottom right,#06b6d4 0%,transparent 35%),
            linear-gradient(135deg,#0f172a,#111827,#1e293b);
        }

        .register-card{
          width:100%;
          max-width:460px;
          padding:40px;
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(20px);
          -webkit-backdrop-filter:blur(20px);
          border:1px solid rgba(255,255,255,.12);
          border-radius:24px;
          box-shadow:0 20px 40px rgba(0,0,0,.35);
        }

        .register-card h1{
          text-align:center;
          color:white;
          margin-bottom:10px;
          font-size:34px;
        }

        .register-card p{
          text-align:center;
          color:#cbd5e1;
          margin-bottom:30px;
        }

        .input-group{
          margin-bottom:18px;
        }

        .input-group input{
          width:100%;
          padding:15px 18px;
          border-radius:12px;
          border:1px solid rgba(255,255,255,.15);
          outline:none;
          background:rgba(255,255,255,.08);
          color:white;
          font-size:15px;
          transition:.3s;
        }

        .input-group input::placeholder{
          color:#cbd5e1;
        }

        .input-group input:focus{
          border-color:#60a5fa;
          box-shadow:0 0 15px rgba(96,165,250,.35);
        }

        .register-btn{
          width:100%;
          padding:15px;
          border:none;
          border-radius:12px;
          cursor:pointer;
          background:linear-gradient(135deg,#3b82f6,#6366f1);
          color:white;
          font-size:16px;
          font-weight:600;
          transition:.3s;
        }

        .register-btn:hover{
          transform:translateY(-3px);
          box-shadow:0 10px 20px rgba(59,130,246,.4);
        }

        .login-link{
          text-align:center;
          margin-top:20px;
          color:#cbd5e1;
        }

        .login-link a{
          color:#60a5fa;
          text-decoration:none;
          font-weight:600;
        }

        .login-link a:hover{
          text-decoration:underline;
        }
      `}</style>

      <div className="register-page">
        <div className="register-card">
          <h1>🎓 Register</h1>
          <p>Create your Student Management account</p>

          <div className="input-group">
            <input type="text" placeholder="Full Name" />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Student ID" />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Confirm Password" />
          </div>

          <button className="register-btn">
            Create Account
          </button>

          <div className="login-link">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;