import React from 'react';
import Header from '../components/Header';
import About from '../pages/About';
import Service from '../pages/Services';
import Appointments from '../pages/Appointments';
import Footer from '../components/Footer';
export default function HomePage(){
    return(
        <>
        <Header/>
        <main class="intro">
            <div class="intro-container">
                <h1>descubra um</h1>
                <h1>novo <strong>estilo.</strong> </h1>
            </div> 
        </main>
        <About/>
        <Service/>
        <Appointments/>
        <Footer />
      
        </>
    )
}