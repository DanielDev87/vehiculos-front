import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

function VehiculoList({ onEdit }) {
  const [vehiculos, setVehiculos] = useState([]);

  const fetchVehiculos = () => {
    fetch('http://localhost:8080/api/vehiculos')
      .then(res => res.json())
      .then(data => setVehiculos(data));
  };

  useEffect(() => {
    fetchVehiculos();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8080/api/vehiculos/${id}`, { method: 'DELETE' })
          .then(() => {
            Swal.fire('Eliminado', 'El vehículo ha sido eliminado.', 'success');
            fetchVehiculos();
          });
      }
    });
  };

  return (
    <div>
      <h2>Vehículos</h2>
      <Button variant="primary" onClick={() => onEdit(null)}>Agregar Vehículo</Button>
      <ul>
        {vehiculos.map(v => (
          <li key={v.id}>
            {v.marca} {v.modelo} ({v.anio}){' '}
            <Button size="sm" onClick={() => onEdit(v)}>Editar</Button>{' '}
            <Button size="sm" variant="danger" onClick={() => handleDelete(v.id)}>Eliminar</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VehiculoList;