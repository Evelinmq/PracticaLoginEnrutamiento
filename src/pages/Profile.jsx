import React, { useContext } from 'react' ;
import { AuthContext } from '../AuthContext'; 

const Profile = () => { 
  

  const { user } = useContext(AuthContext);

  if (!user) {
    return <h2>No hay usuario logueado</h2>;
  }

  return (
    <div>
      <h1>Perfil</h1>
      <h2>Bienvenido {user.name}</h2>
      <p>Usuario: {user.user}</p>
      <p>Rol: {user.rol}</p>
    </div>
  )
}

export default Profile;
