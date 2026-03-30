// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import '../css/Contact.css';
import ModernContactForm from '../Modern Components/ModernContactComponent';
import ModernFooter from '../Modern Components/ModernFooterComponent';



function ContactPage() {
  return <>
    <NavBar/>
        <div style={{width: '100%', height: '250px', textAlign: 'center', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
        <h1 style={{fontSize: '34px', fontWeight: 'bold'}}>Welcome to the Contact Page!</h1>
    </div>

    <div>
      <ModernContactForm />
    </div>

    <ModernFooter />
  </>
}


export default ContactPage;