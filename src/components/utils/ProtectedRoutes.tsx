import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes: React.FC = () => {
  const userData = localStorage.getItem("User");
  const user = userData !== null ? JSON.parse(userData) : null;
  
  // renders the children if they is a user and navigates to login if there is not user
  return user ? <Outlet/> : <Navigate to="/login"/> 
}

export default ProtectedRoutes