// pages/Contact.jsx
import React, { useState } from 'react';
import NavBar from '../components/navBar';
import '../css/Contact.css';
import ModernContactForm from '../Modern Components/ModernContactComponent';
import ModernFooter from '../Modern Components/ModernFooterComponent';
import ModernScheduleConsultationPopup from '../Modern Components/ModernScheduleConsultationPopup';

function ContactPage() {
  const [isConsultationPopupOpen, setIsConsultationPopupOpen] = useState(false);

  const contactMethods = [
    {
      id: 1,
      title: "Email",
      description: "Reach out to us via email for detailed inquiries and project discussions.",
      icon: "📧",
      details: "jfergusooon@gmail.com"
      //details: "contact@fergusonsoftware.com"
    },
    {
      id: 2,
      title: "Phone",
      description: "Call us for immediate assistance and consultation on your project needs.",
      icon: "📞",
      details: "+1 (385) 499-1578"
    },
    {
      id: 3,
      title: "Location",
      description: "Visit our office for face-to-face meetings and collaborative sessions.",
      icon: "📍",
      details: "TBD - Salt Lake City, UT."
      //details: "Salt Lake City, UT"
    }
  ];

  const ContactMethodCard = ({ method }) => (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '10px',
      padding: '30px',
      margin: '15px',
      flex: '1',
      minWidth: '250px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      color: '#fff',
      textAlign: 'center'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(102, 126, 234, 0.4)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
    }}>
      <div style={{fontSize: '48px', marginBottom: '15px'}}>{method.icon}</div>
      <h3 style={{fontSize: '22px', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '0.5px'}}>
        {method.title}
      </h3>
      <p style={{fontSize: '14px', lineHeight: '1.6', opacity: '0.95', marginBottom: '15px'}}>
        {method.description}
      </p>
      <p style={{fontSize: '16px', fontWeight: 'bold', letterSpacing: '0.3px'}}>
        {method.details}
      </p>
    </div>
  );

  return <>
    <NavBar/>
    
    {/* Hero Section */}
    <div style={{
      width: '100%',
      height: '280px',
      textAlign: 'center',
      color: "#fff",
      backgroundImage: "url('images/Background.png')",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }}></div>
      <div style={{position: 'relative', zIndex: 2}}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '10px',
          letterSpacing: '1px'
        }}>
          Get in Touch
        </h1>
        <p style={{fontSize: '18px', fontWeight: '300', letterSpacing: '0.5px'}}>
          We'd Love to Hear From You
        </p>
      </div>
    </div>

    {/* Introduction Section */}
    <div style={{
      padding: '40px 20px',
      background: '#443f3d',
      color: '#fff',
      textAlign: 'center'
    }}>
      <h2 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '20px'}}>
        Let's Start Your Next Project
      </h2>
      <p style={{
        fontSize: '16px',
        lineHeight: '1.8',
        maxWidth: '900px',
        margin: '0 auto',
        opacity: '0.9'
      }}>
        Whether you have a specific project in mind or want to discuss how we can help transform your vision into reality, our team is ready to assist. Reach out to us through any of the channels below, and let's begin an exciting journey together.
      </p>
    </div>

    {/* Contact Methods Section */}
    <div style={{
      padding: '60px 20px',
      background: '#2a2824',
      minHeight: '50vh'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '50px',
        letterSpacing: '1px'
      }}>
        Connect With Us
      </h2>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {contactMethods.map((method) => (
          <ContactMethodCard key={method.id} method={method} />
        ))}
      </div>
    </div>

    {/* Our Promise Section */}
    <div style={{ padding: '60px 20px', background: '#3d3934' }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', color: '#fff', marginBottom: '40px', letterSpacing: '1px' }}>
        Our Promise to You
      </h2>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {[
          { icon: '⚡', title: 'Fast Response', desc: 'We respond to every inquiry within 24 hours — usually much sooner. Your time matters and we never leave you waiting.' },
          { icon: '🔍', title: 'Full Transparency', desc: 'No hidden fees, no vague timelines. You will always know exactly where your project stands and what comes next.' },
          { icon: '🤝', title: 'Client First', desc: 'We listen before we build. Every solution is tailored to your specific goals — not a one-size-fits-all template.' },
          { icon: '📈', title: 'Results Driven', desc: 'We measure success by your success. Our work does not end at delivery — we stay engaged to make sure it performs.' }
        ].map((item, i) => (
          <div key={i} style={{ flex: '1', minWidth: '200px', maxWidth: '400px', background: '#2a2824', borderRadius: '12px', padding: '28px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', borderTop: '3px solid #667eea' }}>
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
            <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{item.title}</h3>
            <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Call to Action Section */}
    <div style={{
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#fff',
      textAlign: 'center'
    }}>
      <h2 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '0.5px'}}>
        Ready to Transform Your Vision?
      </h2>
      <p style={{
        fontSize: '16px',
        lineHeight: '1.8',
        maxWidth: '800px',
        margin: '0 auto',
        opacity: '0.95',
        marginBottom: '30px'
      }}>
        Our team of expert developers and consultants is standing by to help you create something extraordinary. Contact us today and let's discuss your project requirements.
      </p>
      <button style={{
        background: '#fff',
        color: '#667eea',
        border: 'none',
        padding: '15px 40px',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
      onClick={() => setIsConsultationPopupOpen(true)}>
        Schedule a Consultation
      </button>
    </div>

    {isConsultationPopupOpen && (
      <ModernScheduleConsultationPopup closePopup={() => setIsConsultationPopupOpen(false)} />
    )}

    <ModernFooter />
  </>
}

export default ContactPage;