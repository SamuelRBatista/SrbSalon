const API_URL = 'http://localhost:8080/api/appointments';

const AppointmentService = {
  async createAppointment(data) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Falha ao criar agendamento');
    }

    return response.json();
  },
};

export default AppointmentService;
