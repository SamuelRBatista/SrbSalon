import React, { useState, useEffect } from 'react';
import ServiceService from '../../domain/services/service/ServiceService'

export default function Service(){
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
          try {
            const data = await ServiceService.getAllServices();
            console.log('Retorno dos serviços prestados da api',data)
            setServices(data);
          } catch (error) {
            console.error('Failed to fetch services:', error);
          }
        };
    
        fetchServices();      
      }, []);



return(
    <section className="servico">
            <div className="servico-container">
                <h1>serviço</h1>
                <p>Veja a nosso tabela de serviços e preços</p>                
                <div className="tabela">
                {services.length > 0 ? (
        services.map((sev, index) => (
                    <div className="tabela1">
                        <p><strong>{sev.name}</strong>.........R${sev.price}</p>                        
                    </div>
                    ))) : (
                        <p>No services available</p>
                    )}
                );                   
                </div>
            </div>
        </section>
    )
}
