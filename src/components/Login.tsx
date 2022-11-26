import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

export const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const auth = useAuth();
  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="user name"
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
