import React, { useState } from 'react';
import VehiculoList from './components/VehiculoList';
import VehiculoModal from './components/VehiculoModal';
import { showAlert } from './components/AlertMessage';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [vehiculoEdit, setVehiculoEdit] = useState(null);

  const handleEdit = (vehiculo) => {
    setVehiculoEdit(vehiculo);
    setShowModal(true);
  };

  const handleSave = (vehiculo) => {
    const method = vehiculo.id ? 'PUT' : 'POST';
    const url = vehiculo.id
      ? `http://localhost:8080/api/vehiculos/${vehiculo.id}`
      : 'http://localhost:8080/api/vehiculos';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vehiculo)
    })
      .then(res => {
        if (!res.ok) throw new Error('Error al guardar');
        return res.json();
      })
      .then(() => {
        showAlert('Éxito', 'Vehículo guardado correctamente');
        setShowModal(false);
      })
      .catch(() => showAlert('Error', 'No se pudo guardar', 'error'));
  };

  return (
    <div className="container mt-4">
      <VehiculoList onEdit={handleEdit} />
      <VehiculoModal
        show={showModal}
        vehiculo={vehiculoEdit}
        onSave={handleSave}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}

export default App;