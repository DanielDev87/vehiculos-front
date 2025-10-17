import React from 'react';
import Modal from 'react-bootstrap/Modal';
import VehiculoForm from './VehiculoForm';

function VehiculoModal({ show, vehiculo, onSave, onClose }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{vehiculo ? 'Editar Vehículo' : 'Agregar Vehículo'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <VehiculoForm vehiculo={vehiculo} onSave={onSave} onClose={onClose} />
      </Modal.Body>
    </Modal>
  );
}

export default VehiculoModal;