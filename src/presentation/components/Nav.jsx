import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm'; // Importando o formulário de agendamento

export default function Nav() {
  const [isAppointmentFormOpen, setAppointmentFormOpen] = useState(false); // Estado para controlar a exibição do formulário
  const [isNavOpen, setNavOpen] = useState(true); // Estado para controlar a visibilidade da barra de navegação

  const handleOpenForm = () => {
    setAppointmentFormOpen(true); // Abre o formulário de agendamento
  };

  const handleCloseForm = () => {
    setAppointmentFormOpen(false); // Fecha o formulário de agendamento
  };

  const closeNav = () => {
    setNavOpen(true); // Fecha o menu de navegação
  };

  return (
    <>
      {/* Menu de navegação */}
      {isNavOpen && (
        <nav id="my-menu-nav" className="menu-nav">
          <ul>
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <li><a href="#">home</a></li>
            <li><a href="#">conceito</a></li>
            <li><a href="#">serviço</a></li>
            <li>
              <a className="menu-agendamento-btn" href="#" onClick={handleOpenForm}>
                <i className="fab fa-whatsapp"></i> agendamento
              </a>
            </li>
            <label htmlFor="switch" className="dark-mode-container">
              <input type="checkbox" id="switch"/>
            </label>
          </ul>
        </nav>
      )}

      {/* Exibe o formulário de agendamento */}
      {isAppointmentFormOpen && <AppointmentForm closeForm={handleCloseForm} />}
    </>
  );
}
