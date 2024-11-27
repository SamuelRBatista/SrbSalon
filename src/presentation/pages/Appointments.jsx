import React from 'react';

export default function Appointments() {
    return (
        <section className="agendamento">
            <div className="agendamento-container">
                <iframe 
                    title="Mapa para Vila Das Belezas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8341881405004!2d-46.74399528521287!3d-23.646108470612067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51cf43a682eb%3A0xa5d8c9e03718984a!2sVila%20Das%20Belezas!5e0!3m2!1spt-BR!2sbr!4v1606445554192!5m2!1spt-BR!2sbr" 
                    width="520" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    aria-hidden="false" 
                    tabIndex="0"
                />
                <div className="agendamento-item">
                    <h1>AGENDE AGORA PELO WHATSAPP</h1>
                    <p>Clique agora mesmo no botão abaixo, e agende seu horário.</p>
                    <a href="#"><i class="fab fa-whatsapp"></i> agende seu horario</a>

                </div>
            </div>
        </section>
    );
}
