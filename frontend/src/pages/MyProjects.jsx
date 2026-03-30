// pages/Contact.jsx
import React from 'react';
import NavBar from '../components/navBar';
import ModernProjectList from '../Modern Components/ModernProjectListComponent';
import ModernFooter from '../Modern Components/ModernFooterComponent';

function MyProjectsPage() {

  
  return <>
    <NavBar/>
        <div style={{width: '100%', height: '250px', textAlign: 'center', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
      <h1 style={{fontSize: '34px', fontWeight: 'bold'}}>Our Projects</h1>
    </div>
    <ModernProjectList/>

    <ModernFooter />
  </>
}


export default MyProjectsPage;