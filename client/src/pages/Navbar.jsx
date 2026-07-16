import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState(false);
  useEffect(() => {
    checkLogin();
}, []);
async function handleLogout(){
    try {
  const response = await fetch("http://localhost:3000/api/logout", {
          credentials: "include",
          method: "POST"
  },
  )
       if(response.ok){
        setLoggedIn(false);
        const data = await response.json();
      window.alert(data.message ),
      navigate("/")
       }
}
  catch(err){
        console.log(err.message)
  }
}
async function checkLogin() {
    const response = await fetch("http://localhost:3000/api/me", {
        credentials: "include",
    });

    if (response.ok) {
        setLoggedIn(true);
    } else {
        setLoggedIn(false);
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

        body{
          background:
          radial-gradient(circle at top left,#4f46e5 0%,transparent 40%),
          radial-gradient(circle at bottom right,#06b6d4 0%,transparent 40%),
          linear-gradient(135deg,#0f172a,#111827,#1e293b);
          min-height:100vh;
        }

        nav{
          position:fixed;
          top:20px;
          left:50%;
          transform:translateX(-50%);
          width:92%;
          max-width:1200px;
          z-index:1000;
        }

        .navbar{
          display:flex;
          justify-content:space-between;
          align-items:center;

          padding:16px 30px;

          background:rgba(255,255,255,.08);
          backdrop-filter:blur(25px);
          -webkit-backdrop-filter:blur(25px);

          border:1px solid rgba(255,255,255,.15);

          border-radius:22px;

          box-shadow:
          0 15px 40px rgba(0,0,0,.35),
          inset 0 1px rgba(255,255,255,.15);
        }

        .logo{
          color:white;
          font-size:30px;
          font-weight:800;
          letter-spacing:1px;
          cursor:pointer;

          background:linear-gradient(90deg,#ffffff,#8be9fd,#a855f7);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        ul{
          display:flex;
          list-style:none;
          gap:14px;
        }

        a{
          text-decoration:none;
        }

        li{
          color:#fff;
          padding:12px 24px;
          border-radius:50px;
          font-size:15px;
          font-weight:600;
          letter-spacing:.3px;

          transition:.35s;
          position:relative;
          overflow:hidden;
        }

        li::before{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(135deg,#6366f1,#06b6d4);
          opacity:0;
          transition:.35s;
          z-index:-1;
          border-radius:50px;
        }

        li:hover::before{
          opacity:1;
        }

        li:hover{
          transform:translateY(-4px);
          box-shadow:0 10px 25px rgba(99,102,241,.45);
        }

        .register{
          background:linear-gradient(135deg,#6366f1,#8b5cf6);
          box-shadow:0 10px 25px rgba(99,102,241,.35);
        }

        .register:hover{
          transform:translateY(-4px) scale(1.05);
        }

        @media(max-width:850px){

          .navbar{
            flex-direction:column;
            gap:20px;
            padding:20px;
          }

          ul{
            flex-wrap:wrap;
            justify-content:center;
          }

          li{
            padding:10px 18px;
          }

        }

      `}</style>

      <nav>
        <div className="navbar">

          <div className="logo">
            NOVA
          </div>

          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>

     {loggedIn ? (
  <>
    <Link to="/dashboard">
      <li>Dashboard</li>
    </Link>

    <li onClick={handleLogout}>Logout</li>
  </>
) : (
  <>
    <Link to="/login">
      <li>Login</li>
    </Link>

    <Link to="/register">
      <li className="register">Register</li>
    </Link>
  </>
)}
          </ul>

        </div>
      </nav>
    </>
  );
};

export default NavBar;