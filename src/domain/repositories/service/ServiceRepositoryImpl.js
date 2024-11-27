import { BASE_URL } from '../../../infrastructure/api/apiClient'

class ServiceRepositoryImpl {
  
  async getAllServices() {  

    const response = await fetch(`${BASE_URL}/services`, {
      headers: {
        'Content-Type': 'application/json',     
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }   
    return response.json();
  }

  async getServiceById(id) {
    try {      
      const response = await fetch(`${ BASE_URL}/service/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',    
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch service');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching service:', error);
      throw error;
    }
  }

  async createService(formDataWithFile) {   
    try {     
        const response = await fetch(`${ BASE_URL}/services`, {
            method: 'POST',
            body: formDataWithFile,
            headers: {
              'Content-Type': 'application/json',              
            },
        });

        if (!response.ok) {
            const errorText = await response.text(); // Read the response text for more details
            throw new Error(`Failed to create service: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating service:', error);
        throw error;
    }
  }

  async updateService(id, formDataWithFile) {
    try {      
        const response = await fetch(`${ BASE_URL}services/${id}`, {
            method: 'PUT',
            body: formDataWithFile, // Enviar o FormData diretamente como body
            headers: {
              'Content-Type': 'application/json',              
            },
        });

        if (!response.ok) {
            const errorText = await response.text(); // Ler o texto de resposta para mais detalhes
            throw new Error(`Failed to update service: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating vacancy:', error);
        throw error;
    }
  }

  async deleteService(id) {
    console.log('Delete repo',id)
    try {      
      const response = await fetch(`${ BASE_URL}/services/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete service');
      }

      return await response.json(); // Geralmente, a resposta de DELETE pode ser um status ou uma confirmação
    } catch (error) {
      console.error('Error deleting service:', error);
      throw error;
    }
  }
}


export default ServiceRepositoryImpl;
