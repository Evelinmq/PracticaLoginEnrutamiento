import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Dashboard from './routes/Dashboard';
import AdminPanel from './routes/AdminPanel';

function App() {

  return (
    <>
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
    </Routes>

    </>
  );
}

export default App
