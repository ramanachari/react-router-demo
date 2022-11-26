import React from "react";
import { useAuth } from "./auth";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = (props: any) => {
  const auth = useAuth();
  console.log(props.childern);

  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return props.childern;
};
