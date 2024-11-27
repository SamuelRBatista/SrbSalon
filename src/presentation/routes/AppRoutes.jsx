import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AppointmentForm from '../components/AppointmentForm'

const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<HomePage />} >
          <Route path="/apply/:id" element={<AppointmentForm />} />
         
          </Route>       
        </Routes>
      </Router>
    );
  };

  export default AppRoutes;