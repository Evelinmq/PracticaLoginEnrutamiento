import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

function Dashboard() {
  
    const { user, logout } = useContext(AuthContext);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Panel de Control</h1>
            
            {user ? (
                <div>
                    <h2>Bienvenido, {user.name}</h2>
                    <p>Tu rol es: <strong>{user.rol}</strong></p>
                    <button onClick={logout}>Cerrar Sesión</button>
                </div>
            ) : (
                <p>Cargando datos del usuario...</p>
            )}
        </div>
    );
}

export default Dashboard;