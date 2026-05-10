// pages/Services.jsx
import React from 'react';
import NavBar from '../components/navBar';
import ModernFooter from '../Modern Components/ModernFooterComponent';

function ServicesPage(){
  const services = [
    {
      id: 1,
      title: "Software Engineering & Development",
      description: "Custom-crafted solutions tailored to your unique business needs. We specialize in building scalable, maintainable, and robust applications using cutting-edge technologies and best practices in software architecture.",
      icon: "💻"
    },
    {
      id: 2,
      title: "Web Design & Development",
      description: "Stunning, responsive web applications that captivate and convert. From modern UI/UX design to full-stack development, we create digital experiences that align with your brand vision and engage your audience.",
      icon: "🌐"
    },
    {
      id: 3,
      title: "Database Design & Management",
      description: "Secure, efficient, and scalable database solutions. We architect and optimize databases for performance, reliability, and data integrity, ensuring your applications run at peak efficiency.",
      icon: "🗄️"
    },
    {
      id: 4,
      title: "User Management & Authentication",
      description: "Enterprise-grade user authentication and authorization systems. We implement secure identity management, role-based access control, and seamless authentication flows to protect your users and data.",
      icon: "👥"
    },
    {
      id: 5,
      title: "Payment Processing & Integration",
      description: "Secure payment gateway integration with industry-leading providers. We implement PCI-compliant payment solutions, subscription management, and financial transaction handling with complete peace of mind.",
      icon: "💳"
    },
    {
      id: 6,
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences. We build performant apps for iOS and Android with seamless integration across all platforms.",
      icon: "📱"
    },
    {
      id: 7,
      title: "API Design & Integration",
      description: "RESTful and GraphQL APIs designed for scalability and performance. We create well-documented, secure APIs that power your applications and integrate seamlessly with third-party services.",
      icon: "🔗"
    },
    {
      id: 8,
      title: "Cloud Infrastructure & DevOps",
      description: "Modern cloud deployment and infrastructure management. We handle deployment, scaling, monitoring, and maintenance on platforms like AWS, Azure, and Google Cloud for optimal performance.",
      icon: "☁️"
    }
  ];

  const ServiceCard = ({ service }) => (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '10px',
      padding: '30px',
      margin: '15px',
      flex: '1',
      minWidth: '280px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      color: '#fff'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(102, 126, 234, 0.4)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
    }}>
      <div style={{fontSize: '48px', marginBottom: '15px'}}>{service.icon}</div>
      <h3 style={{fontSize: '22px', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '0.5px'}}>
        {service.title}
      </h3>
      <p style={{fontSize: '15px', lineHeight: '1.6', opacity: '0.95'}}>
        {service.description}
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
          Our Premium Services
        </h1>
        <p style={{fontSize: '18px', fontWeight: '300', letterSpacing: '0.5px'}}>
          Comprehensive Solutions for Modern Digital Challenges
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
        Excellence in Software Solutions
      </h2>
      <p style={{
        fontSize: '16px',
        lineHeight: '1.8',
        maxWidth: '900px',
        margin: '0 auto',
        opacity: '0.9'
      }}>
        At Ferguson Software Solutions, we deliver world-class software engineering services that transform your business. From conceptualization to deployment, we provide end-to-end solutions with meticulous attention to detail, cutting-edge technology, and a commitment to excellence.
      </p>
    </div>

    {/* Services Grid */}
    <div style={{
      padding: '60px 20px',
      background: '#2a2824',
      minHeight: '100vh'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '50px',
        letterSpacing: '1px'
      }}>
        What We Offer
      </h2>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>

    {/* Why Choose Us Section */}
    <div style={{
      padding: '60px 20px',
      background: '#3d3934',
      color: '#fff',
      textAlign: 'center'
    }}>
      <h2 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '40px', letterSpacing: '0.5px'}}>
        Why Choose Us?
      </h2>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {[
          { title: 'Expert Team', description: 'Seasoned developers with years of industry experience' },
          { title: 'Quality Assured', description: 'Rigorous testing and quality control processes' },
          { title: 'On-Time Delivery', description: 'Meeting deadlines with precision and reliability' },
          { title: 'Scalable Solutions', description: 'Built to grow with your business needs' }
        ].map((item, idx) => (
          <div key={idx} style={{
            flex: '1',
            minWidth: '250px',
            margin: '20px',
            padding: '30px'
          }}>
            <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#667eea'}}>
              {item.title}
            </h3>
            <p style={{fontSize: '14px', lineHeight: '1.6', opacity: '0.9'}}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    <ModernFooter />
  </>
}

export default ServicesPage;