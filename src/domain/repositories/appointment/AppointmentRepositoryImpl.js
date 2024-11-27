import { BASE_URL } from '../../../infrastructure/api/apiClient'


const AppointmentRepositoryImpl = {
  createAppointment: async (formDataWithFile) => {    
    try {
      const response = await fetch(`${BASE_URL}/appointment`, {       
        method: 'POST',
        body: formDataWithFile,
        headers: {         
         
        },
      });      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error in createAppointment:', error);
      throw error;
    }
  },
};

export default AppointmentRepositoryImpl;
