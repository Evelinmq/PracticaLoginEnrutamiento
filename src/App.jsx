import { useState } from 'react'
import './App.css'
import { AuthProvider } from './AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Dashboard from './routes/Dashboard';
import AdminPanel from './routes/AdminPanel';

function App() {

  const handleLogin = (username, password) => {
    console.log("Login con:", username, password);
    return true; 
  };


  return (
    <AuthProvider>
    <Routes>
      <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
      </Route>
      
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<AdminPanel />} />
      </Route>
      
   <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>

    </AuthProvider>
  );
}

export default App
