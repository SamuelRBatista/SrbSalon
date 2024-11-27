import React, { useState, useEffect } from 'react';
import AppointmentService from '../../domain/services/appointment/AppointmentService'
import ServiceService from '../../domain/services/service/ServiceService'

import Modal from 'react-modal';

// Define o elemento root para o modal
Modal.setAppElement('#root');

export default function AppointmentForm({ closeForm }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    serviceId: '', // Armazenar o ID do serviço selecionado
    status: 'Agendado',
  });
  const [errors, setErrors] = useState({
    name: '',
    date: '',
    serviceId: '', // Adicionar validação para o serviço
  });
  const [services, setServices] = useState([]); // Lista de serviços

  // Buscar os serviços ao carregar o componente
  useEffect(() => {
    const fetchServices = async () => {
      try{
        const data = await ServiceService.getAllServices();
        setServices(data);
      }catch{
        console.error('Failed to fetch appointments:', errors);
      }
    };
    fetchServices();
  }, []);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validação simples
    let formErrors = {};
    if (!formData.name) formErrors.name = 'O nome é obrigatório.';
    if (!formData.date) formErrors.date = 'A data é obrigatória.';
    if (!formData.serviceId) formErrors.serviceId = 'O serviço é obrigatório.';
  
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Exibe os erros de validação
    } else {
      // Enviar o formulário
      const appointmentData = {
        name: formData.name,
        date: formData.date,
        serviceId: formData.serviceId,
        status: formData.status, // Agendado por padrão
      };
  
      try {
        const data = await AppointmentService.createAppointment(appointmentData);
        console.log('Agendamento realizado com sucesso:', data);
        closeForm(); // Fecha o modal após o envio
      } catch (error) {
        console.error('Erro ao agendar o serviço:', error);
      }
    }
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)', // Centraliza o modal
      textAlign: 'center',
      backgroundColor: '#ffffff',
      color: '#333333',
      padding: '40px',
      borderRadius: '10px',
      width: '90%',
      maxWidth: '500px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Sombras para dar profundidade
    },
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeForm}
      style={customStyles}
    >
      <h2 style={{ color: '#15ab92' }}>Agendar Serviço</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Campo Nome */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="name" style={{ fontWeight: 'bold' }}>Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: errors.name ? '1px solid red' : '1px solid #ccc',
              outline: 'none',
              fontSize: '16px',
            }}
          />
          {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
        </div>

        {/* Campo Data */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="date" style={{ fontWeight: 'bold' }}>Data e Hora</label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: errors.date ? '1px solid red' : '1px solid #ccc',
              outline: 'none',
              fontSize: '16px',
            }}
          />
          {errors.date && <span style={{ color: 'red', fontSize: '12px' }}>{errors.date}</span>}
        </div>

        {/* Campo Serviço */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="serviceId" style={{ fontWeight: 'bold' }}>Serviço</label>
          <select
            id="serviceId"
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            required
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: errors.serviceId ? '1px solid red' : '1px solid #ccc',
              outline: 'none',
              fontSize: '16px',
            }}
          >
            <option value="">Selecione um serviço</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
          {errors.serviceId && <span style={{ color: 'red', fontSize: '12px' }}>{errors.serviceId}</span>}
        </div>

        {/* Botão Enviar */}
        <button
          type="submit"
          style={{
            padding: '12px',
            backgroundColor: '#15ab92',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#128e6a'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#15ab92'}
        >
          Agendar
        </button>
        
        {/* Botão Fechar */}
        <button
          type="button"
          onClick={closeForm}
          style={{
            padding: '10px',
            backgroundColor: '#f1f1f1',
            color: '#333',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '14px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Fechar
        </button>
      </form>
    </Modal>
  );
}
