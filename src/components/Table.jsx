import './styles.css';

function Table({ data }) {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Usuario</th>
          <th>Nombre Completo</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody>
        {data.map((persona, index) => (
          <tr key={index}>
            <td>{persona.user}</td>
            <td>{persona.name}</td>
            <td>{persona.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}