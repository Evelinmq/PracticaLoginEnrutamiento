import React from 'react'

const Profile = ({ user }) => {
  if (!user) {
    return <h2>No hay usuario logueado</h2>;
  }

  return (
    <div>
      <h1>Perfil</h1>
      <h2>Bienvenido {user.name}</h2>
    </div>
  )
}

export default Profile;
