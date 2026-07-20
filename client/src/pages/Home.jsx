import React from "react";
import { Link } from "react-router-dom";
import imp from "/public/home2.png";

const Home = () => {
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

        .home{
          min-height:100vh;
          padding:120px 8% 60px;
          background:
            radial-gradient(circle at top left,#4f46e5 0%,transparent 35%),
            radial-gradient(circle at bottom right,#06b6d4 0%,transparent 35%),
            linear-gradient(135deg,#0f172a,#111827,#1e293b);
          color:white;
        }

        .hero{
          text-align:center;
          max-width:900px;
          margin:auto;
        }

        .hero h1{
          font-size:57px;
          margin-bottom:20px;
          line-height:1.2;
        }

        .hero h1 span{
          color:#60a5fa;
        }

        .hero p{
          color:#cbd5e1;
          line-height:1.9;
          margin-bottom:40px;
          font-size:23px;
        }

        .buttons{
          display:flex;
          justify-content:center;
          gap:20px;
          flex-wrap:wrap;
        }

        .btn{
          padding:15px 30px;
          border-radius:12px;
          text-decoration:none;
          font-weight:600;
          transition:.3s;
        }

        .primary{
          background:linear-gradient(135deg,#3b82f6,#6366f1);
          color:white;
        }

        .secondary{
          border:1px solid rgba(255,255,255,.2);
          background:rgba(255,255,255,.08);
          color:white;
          backdrop-filter:blur(12px);
        }

        .btn:hover{
          transform:translateY(-4px);
          box-shadow:0 12px 25px rgba(59,130,246,.35);
        }

        .features{
          margin-top:90px;
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:30px;
        }

        .card{
          padding:30px;
          border-radius:20px;
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(15px);
          border:1px solid rgba(255,255,255,.1);
          transition:.3s;
        }

        .card:hover{
          transform:translateY(-8px);
          box-shadow:0 15px 30px rgba(0,0,0,.3);
        }

        .card h2{
          margin:18px 0;
          font-size:27px;

        }

        .card p{
          color:#d1d5db;
          line-height:1.7;
          font-size: 18px;
        }

        .icon{
          font-size:42px;
        }

        @media(max-width:768px){

          .hero h1{
            font-size:38px;
          }

          .hero p{
            font-size:16px;
          }

        }
        @media(max-width:850px){
          .low-h img{
          display:none;
          }

        }
        @media(min-width:850px){
          .wa-ge{
          display:none;
          }

        }

        .wa-ge{
        height:35px;
        }
        .low-h{
          display:flex;
        }
        .low-h img{
        height:10cm;
        width:auto;
        }
        .lh {
        margin-top:20px;
        }
        


      `}</style>
      <p className="wa-ge"></p>

      <div className="home">

        <section className="hero">
          <h1>
            Welcome to the <span>Student Management System</span>
          </h1>
          <div className="low-h">
            <div className="lh">
              <p>
                A smart platform for managing students, attendance,
                academic records, course information, and faculty operations
                with a simple, secure, and modern interface.
              </p>
              <div className="buttons">
                <Link to="/login" className="btn primary">
                  Login
                </Link>

                <Link to="/register" className="btn secondary">
                  Register
                </Link>
              </div>
            </div>

            <Image />
          </div>



        </section>

        <section className="features">

          <div className="card">
            <div className="icon">👨‍🎓</div>
            <h2>Student Records</h2>
            <p>
              Store and manage student profiles, enrollment details,
              and academic history in one secure location.
            </p>
          </div>

          <div className="card">
            <div className="icon">📅</div>
            <h2>Attendance</h2>
            <p>
              Track daily attendance efficiently with real-time
              updates and reporting.
            </p>
          </div>

          <div className="card">
            <div className="icon">📚</div>
            <h2>Course Management</h2>
            <p>
              Organize courses, subjects, faculty assignments,
              and class schedules effortlessly.
            </p>
          </div>

          <div className="card">
            <div className="icon">📊</div>
            <h2>Performance Reports</h2>
            <p>
              View grades, academic progress, and performance
              analytics through an intuitive dashboard.
            </p>
          </div>



        </section>

      </div>
    </>
  );
};
function Image() {
  return (
    <img src={imp} alt="degree" />
  )
}
export default Home;