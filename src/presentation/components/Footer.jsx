import React from 'react';


export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <img src="/img/footer.png" alt="barber-shop"/>

                <div className="footer-item">
                    <h1>Endereço</h1>
                    <p>Rua logo ali 555, bairo SP</p>
                </div>

                <div className="footer-item">
                    <h1>Sugestões</h1>
                    <a>contato@contato.com</a>
                </div>

                <div className="footer-social">
                    <h1>Redes sociais</h1>
                    <ul>
                        <li><a href="#" name="facebook"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#" alt="instagram"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#" alt="linkedin"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#" alt="tiktok"><i className="fab fa-tiktok"></i></a></li>
                    </ul>
             </div>        
        </div>
    </footer>
    )
}

