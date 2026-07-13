import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Inter,Segoe UI,sans-serif;
        }

        .notfound{
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:20px;
          text-align:center;
          color:white;

          background:
            radial-gradient(circle at top left,#4f46e5 0%,transparent 35%),
            radial-gradient(circle at bottom right,#06b6d4 0%,transparent 35%),
            linear-gradient(135deg,#0f172a,#111827,#1e293b);
        }

        .card{
          max-width:650px;
          width:100%;
          padding:50px 40px;

          background:rgba(255,255,255,.08);
          backdrop-filter:blur(18px);
          -webkit-backdrop-filter:blur(18px);

          border:1px solid rgba(255,255,255,.12);
          border-radius:24px;

          box-shadow:0 20px 45px rgba(0,0,0,.35);
        }

        .error{
          font-size:120px;
          font-weight:800;
          line-height:1;
          background:linear-gradient(135deg,#60a5fa,#8b5cf6);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          margin-bottom:15px;
        }

        h2{
          font-size:34px;
          margin-bottom:15px;
        }

        p{
          color:#cbd5e1;
          font-size:17px;
          line-height:1.8;
          margin-bottom:35px;
        }

        .home-btn{
          display:inline-block;
          padding:14px 32px;
          border-radius:12px;
          text-decoration:none;
          color:white;
          font-weight:600;

          background:linear-gradient(135deg,#3b82f6,#6366f1);

          transition:.3s;
        }

        .home-btn:hover{
          transform:translateY(-4px);
          box-shadow:0 12px 24px rgba(59,130,246,.4);
        }

        @media(max-width:768px){

          .error{
            font-size:80px;
          }

          h2{
            font-size:26px;
          }

          p{
            font-size:15px;
          }

        }
      `}</style>

      <div className="notfound">
        <div className="card">

          <div className="error">404</div>

          <h2>Page Not Found</h2>

          <p>
            The page you're looking for doesn't exist or may have been moved.
            Please return to the Student Management System homepage.
          </p>

          <Link to="/" className="home-btn">
            🏠 Back to Home
          </Link>

        </div>
      </div>
    </>
  );
};

export default NotFound;