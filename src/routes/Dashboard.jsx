import { useContext } from "react";
import { AuthContext } from "../AuthContext"; 
import usersList from "../pages/users/users";
import Table from "../components/Table";  


function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  if (!user) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel de Control</h1>
      <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '10px' }}>
        <h2>Bienvenido, {user.name}</h2>
        <p>Tu rol es: <strong>{user.role}</strong></p>
        <button onClick={logout}>Cerrar Sesión</button>
      </div>

      {user.role === 'admin' && (
        <div style={{ marginTop: '30px' }}>
          <h3>Lista Completa de Usuarios</h3>
          <Table data={usersList} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;