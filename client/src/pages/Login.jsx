import React from "react";
import { useState } from "react";

const Login = () => {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    async function handleLogin(e){
        e.preventDefault();
   const response = await fetch("https://localhost/3000/api/login", {
             method: "POST",
            headers: {
             "Content-Type": "application/json"
    },
         body: JSON.stringify({
        email,
        password
    })
});
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

        .login-page{
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;

          background:
          radial-gradient(circle at top left,#4f46e5 0%,transparent 35%),
          radial-gradient(circle at bottom right,#06b6d4 0%,transparent 35%),
          linear-gradient(135deg,#0f172a,#111827,#1e293b);
        }

        .login-card{
          width:380px;
          padding:40px;

          background:rgba(255,255,255,.08);
          backdrop-filter:blur(25px);
          -webkit-backdrop-filter:blur(25px);

          border:1px solid rgba(255,255,255,.15);
          border-radius:25px;

          box-shadow:
          0 20px 40px rgba(0,0,0,.35),
          inset 0 1px rgba(255,255,255,.1);
        }

        .login-card h1{
          color:#fff;
          text-align:center;
          margin-bottom:10px;
          font-size:34px;
        }

        .login-card p{
          color:#cbd5e1;
          text-align:center;
          margin-bottom:30px;
        }

        .input-group{
          margin-bottom:20px;
        }

        .input-group input{
          width:100%;
          padding:16px 18px;
          border:none;
          outline:none;
          border-radius:14px;

          background:rgba(255,255,255,.08);
          color:white;
          font-size:16px;

          border:1px solid rgba(255,255,255,.12);

          transition:.3s;
        }

        .input-group input::placeholder{
          color:#cbd5e1;
        }

        .input-group input:focus{
          border-color:#6366f1;
          box-shadow:0 0 15px rgba(99,102,241,.45);
        }

        .login-btn{
          width:100%;
          padding:16px;
          border:none;
          border-radius:14px;
          cursor:pointer;

          background:linear-gradient(135deg,#6366f1,#8b5cf6);
          color:white;
          font-size:17px;
          font-weight:600;

          transition:.3s;
        }

        .login-btn:hover{
          transform:translateY(-3px);
          box-shadow:0 10px 25px rgba(99,102,241,.45);
        }

        .forgot{
          text-align:center;
          margin-top:18px;
        }

        .forgot a{
          color:#8be9fd;
          text-decoration:none;
          font-size:15px;
        }

        .forgot a:hover{
          text-decoration:underline;
        }

      `}</style>

      <div className="login-page">
        <div className="login-card">
          <h1>👋 Welcome</h1>
          <p>Sign in to continue</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input type="email" placeholder="Email Address" 
value={email}     onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Password" value={password}    onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit"  className="login-btn" >
            Login →
          </button>
         </form>
          {/* <div className="forgot">
            <a href="/">Forgot Password?</a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;