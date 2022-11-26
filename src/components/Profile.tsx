import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export const Profile = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <h1>Welcome {auth.user}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
