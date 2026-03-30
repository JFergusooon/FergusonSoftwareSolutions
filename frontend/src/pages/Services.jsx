// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import ModernFooter from '../Modern Components/ModernFooterComponent';

function ServicesPage(){
  return <>
    <NavBar/>
        <div style={{width: '100%', height: '250px', textAlign: 'center', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
      <h1 style={{fontSize: '34px', fontWeight: 'bold'}}>Welcome to the Services Page!</h1>
    </div>
    <div style={{padding: '20px', background: '#443f3d', color: '#fff', textAlign: 'center'}}>
        <p> Our Services include web and mobile application development, software automation testing, & more.</p>
    </div>

    <div style={{height: '300px', width: '100vw'}}>
          <div style={{background: 'grey', }}>
              Web & Mobile Development
          </div>


    </div>
    

    <ModernFooter />
  </>
}


export default ServicesPage;