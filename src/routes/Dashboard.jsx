import { useContext } from "react";
import { AuthContext } from "../AuthContext"; 
import Table from "../components/Table";  

function Dashboard() {
  const { user, logout, users } = useContext(AuthContext);

  if (!user) return <p>Cargando...</p>;

  return (
    <div className="dashboard-container" style={{ padding: "20px" }}>
      <h1>Panel de Control</h1>
      
      <div className="profile-card" style={{ background: '#f0f0f0', padding: '15px', borderRadius: '10px' }}>
        <h2>Bienvenido, {user.name}</h2>
        <p>Tu rol es: <strong>{user.rol}</strong></p>
        <button className="btn btn-secondary" onClick={logout}>Cerrar Sesión</button>
      </div>

      {user.rol === 'Admin' && (
        <div style={{ marginTop: '30px' }}>
          <h3>Lista Completa de Usuarios</h3>

          <Table data={users} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;