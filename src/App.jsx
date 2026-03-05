import { AuthProvider } from './AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Dashboard from './routes/Dashboard';

function App() {
  return (
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
  );
}

export default App;
