

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
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.user}</td>
            <td>{item.name}</td>
            <td>{item.rol}</td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;