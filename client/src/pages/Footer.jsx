import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer{
          margin-top:60px;
          background:rgba(255,255,255,0.08);
          backdrop-filter:blur(18px);
          -webkit-backdrop-filter:blur(18px);
          border-top:1px solid rgba(255,255,255,0.12);
          color:white;
          padding:40px 8%;
        }

        .footer-container{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          flex-wrap:wrap;
          gap:40px;
        }

        .footer-brand{
          flex:1;
          min-width:250px;
        }

        .footer-brand h2{
          color:#60a5fa;
          margin-bottom:12px;
          font-size:28px;
        }

        .footer-brand p{
          color:#d1d5db;
          line-height:1.7;
          max-width:350px;
        }

        .footer-links{
          flex:1;
          min-width:200px;
        }

        .footer-links h3,
        .footer-contact h3{
          margin-bottom:15px;
          color:#ffffff;
        }

        .footer-links a{
          display:block;
          color:#d1d5db;
          text-decoration:none;
          margin-bottom:10px;
          transition:.3s;
        }

        .footer-links a:hover{
          color:#60a5fa;
          padding-left:6px;
        }

        .footer-contact{
          flex:1;
          min-width:250px;
        }

        .footer-contact p{
          color:#d1d5db;
          margin-bottom:10px;
        }

        .copyright{
          margin-top:35px;
          padding-top:20px;
          text-align:center;
          border-top:1px solid rgba(255,255,255,.1);
          color:#9ca3af;
          font-size:14px;
        }

        @media(max-width:768px){
          .footer-container{
            flex-direction:column;
            text-align:center;
          }

          .footer-brand p{
            max-width:100%;
          }

          .footer-links a:hover{
            padding-left:0;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-brand">
            <h2>🎓 Nova Management</h2>
            <p>
              A modern platform to manage students, courses,
              attendance, academic records, and administrative tasks
              efficiently in one place.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>

            <p>📧 support@fs0ciety.in</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 College Campus</p>
          </div>

        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Fsociety | Designed with ❤️ in ReactJS & ExpressJS.
        </div>
      </footer>
    </>
  );
};

export default Footer;