// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import '../css/About.css';
import ModernResume from '../Modern Components/ModernResumeComponent';
import ModernFooter from '../Modern Components/ModernFooterComponent';

function AboutPage() {
  return <>
    <NavBar/>
    <div style={{width: '100%', height: '250px', textAlign: 'center', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
      <h1 style={{fontSize: '34px', fontWeight: 'bold'}}>Our Team</h1>
    </div>
    <ModernResume />
    
    <ModernFooter />
  </>
}


export default AboutPage;