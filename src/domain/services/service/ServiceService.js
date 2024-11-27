import ServiceRepositoryImpl from '../../repositories/service/ServiceRepositoryImpl'

class ServiceService {
  constructor(serviceRepository) {
    this.serviceRepository = serviceRepository;
  }

  async getAllServices() {
    return await this.serviceRepository.getAllServices();
  }

  async getServiceById(id){
    return await this.serviceRepository.getServiceById(id);
  }

  // async getVacancyById(id){
  //   return await this.vacancyRepository.getVacancyById(id);
  // }

  // async createVacancy(formDataWithFile) {
  //   return await this.vacancyRepository.createVacancy(formDataWithFile);
  // }

  // async updateVacancy(id, formDataWithFile) {
  //   return await this.vacancyRepository.updateVacancy(id, formDataWithFile);
  // }

  // async deleteVacancy(id){
  //   return await this.vacancyRepository.deleteVacancy(id);
  // }


  



  // Adicione outros métodos conforme necessário
}

// Exportar uma instância do serviço com o repositório implementado
const serviceRepository = new ServiceRepositoryImpl();
const serviceService = new ServiceService(serviceRepository);
export default serviceService;