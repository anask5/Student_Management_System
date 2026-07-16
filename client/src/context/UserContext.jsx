import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkLogin() {
      try {
        const response = await fetch("http://localhost:3000/api/me", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
        setLoggedIn(false);
        navigate("/login");
      }
    }

    checkLogin();
  }, [navigate]);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;