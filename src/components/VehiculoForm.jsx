import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function VehiculoForm({ vehiculo, onSave, onClose }) {
  const [form, setForm] = useState({ marca: '', modelo: '', anio: '' });

  useEffect(() => {
    if (vehiculo) setForm(vehiculo);
    else setForm({ marca: '', modelo: '', anio: '' });
  }, [vehiculo]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Marca</Form.Label>
        <Form.Control name="marca" value={form.marca} onChange={handleChange} required minLength={2} maxLength={50} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Modelo</Form.Label>
        <Form.Control name="modelo" value={form.modelo} onChange={handleChange} required minLength={1} maxLength={50} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Año</Form.Label>
        <Form.Control name="anio" type="number" value={form.anio} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">Guardar</Button>
      <Button variant="secondary" onClick={onClose} className="mt-2 ms-2">Cancelar</Button>
    </Form>
  );
}

export default VehiculoForm;