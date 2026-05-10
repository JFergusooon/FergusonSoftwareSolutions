// pages/Home.jsx
import React from 'react';
import NavBar from '../components/navBar';
import '../css/Home.css';
import ProjectsGrid from '../components/ProjectsGrid';
import ModernFooter from '../Modern Components/ModernFooterComponent';
import { useState, useRef, useEffect } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function HomePage() {

  const [isOurMissionVisible, setIsOurMissionVisible] = useState(true);
  const [isContactUsVisible, setIsContactUsVisible] = useState(false);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [currentTileIndex, setCurrentTileIndex] = useState(0);
  const [descriptionFontSize, setDescriptionFontSize] = useState(14);
  const descriptionRef = useRef(null);

  const tiles = [
    {
      title: "Software Development",
      icon: "images/KeyboardIcon.png",
      description: "Ferguson Software Solutions have a rich history developing both server side and web based software solutions. We pride ourselves on writing clean, professional, and scalable software that functions to incredible standards while being delivered on time. We make our clients feel valued and heard throughout the development process."
    },
    {
      title: "Web Design",
      icon: "images/KeyboardIcon.png",
      description: "Placeholder - Coming soon. We create stunning, responsive web designs that captivate your audience and drive engagement. Our team combines creativity with technical expertise to deliver exceptional digital experiences tailored to your brand."
    },
    {
      title: "Mobile Development",
      icon: "images/KeyboardIcon.png",
      description: "Placeholder - Coming soon. Developing cutting-edge mobile applications for iOS and Android. We focus on user experience, performance, and scalability to ensure your app stands out in a competitive market."
    },
    {
      title: "Consulting",
      icon: "images/KeyboardIcon.png",
      description: "Placeholder - Coming soon. Strategic technology consulting to help your business navigate digital transformation. We provide expert guidance on architecture, best practices, and technology selection."
    },
    {
      title: "Maintenance & Support",
      icon: "images/KeyboardIcon.png",
      description: "Placeholder - Coming soon. Comprehensive support and maintenance services to keep your applications running smoothly. We provide bug fixes, updates, and optimization to ensure peak performance."
    }
  ];

  const handleNextTile = () => {
    setCurrentTileIndex((prevIndex) => (prevIndex + 1) % tiles.length);
  };

  const handlePrevTile = () => {
    setCurrentTileIndex((prevIndex) => (prevIndex - 1 + tiles.length) % tiles.length);
  };

  useEffect(() => {
    const adjustFontSize = () => {
      if (descriptionRef.current) {
        const element = descriptionRef.current;
        let fontSize = 17;
        
        // Reset to max font size first
        element.style.fontSize = fontSize + 'px';
        
        // Check if text overflows and shrink if needed
        while (element.scrollHeight > element.clientHeight && fontSize > 14) {
          fontSize -= 0.5;
          element.style.fontSize = fontSize + 'px';
        }
        
        setDescriptionFontSize(fontSize);
      }
    };

    adjustFontSize();
  }, [currentTileIndex]);

  const toggleOurMissionVisibility = () => {
    console.log("Our Mission button clicked");
    if(!isOurMissionVisible) {
      setIsOurMissionVisible(prev => !prev); 
    }
    if (isContactUsVisible) {
      setIsContactUsVisible(false);
    }
    if (isHistoryVisible) {
      setIsHistoryVisible(false);
    }
  };

  const toggleHistoryVisibility = () => {
    console.log("History button clicked");
    if(!isHistoryVisible) {
      setIsHistoryVisible(prev => !prev); 
    }
    if (isContactUsVisible) {
      setIsContactUsVisible(false);
    }
    if (isOurMissionVisible) {
      setIsOurMissionVisible(false);
    }
  }

  const toggleContactUsVisibility = () => {
    console.log("Contact Us button clicked");
    if(!isContactUsVisible) {
      setIsContactUsVisible(prev => !prev); 
    }
    if (isOurMissionVisible) {
      setIsOurMissionVisible(false);
    }
    if (isHistoryVisible) {
      setIsHistoryVisible(false);
    }
  }

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
          Welcome!
        </h1>
      </div>
    </div>

    {/*Software Development Section - Carousel*/}
    <div style={{display: 'flex', width: '100%', background: '#3d3934', alignContent: 'center', paddingTop: '20px', paddingBottom: '20px'}}>
      <div style={{background: 'linear-gradient(135deg, #2563eb 0%, #6d28d9 100%)', width: '1000px', height: '280px', margin: 'auto', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', padding: '40px', display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', justifyContent: 'space-between'}}>
        <button onClick={handlePrevTile} style={{background: 'transparent', border: 'none', color: '#a8d5ff', fontSize: '32px', cursor: 'pointer', padding: '0', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.3s ease', flexShrink: 0}} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#a8d5ff'}>
          ←
        </button>

        <div style={{display: 'flex', flexDirection: 'row', gap: '30px', alignItems: 'center', justifyContent: 'flex-start', flex: 1, paddingLeft: '40px'}}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0}}>
            <img src={tiles[currentTileIndex].icon} alt='^' style={{width: '50px', height: '50px', marginTop: '-35px'}}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'left', gap: "10px", justifyContent: 'center', flex: 1}}>
            <p style={{margin: '0 0 5px 0', color: '#a8d5ff', fontSize: '21px', fontWeight: 'bold', letterSpacing: '0.5px'}}>
              {tiles[currentTileIndex].title}
            </p>
            <p ref={descriptionRef} style={{width: '100%', maxWidth: '480px', margin: '0', fontSize: descriptionFontSize + 'px', lineHeight: '1.55', opacity: '0.95', height: '96px'}}>
              {tiles[currentTileIndex].description}
            </p>
          </div>
        </div>

        <button onClick={handleNextTile} style={{background: 'transparent', border: 'none', color: '#a8d5ff', fontSize: '32px', cursor: 'pointer', padding: '0', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.3s ease', flexShrink: 0}} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#a8d5ff'}>
          →
        </button>
      </div>
    </div> 
      

    {/*Why Choose Us Section*/}
    <div style={{display: 'flex', width: '100%', background: '#2a2824', alignContent: 'center', paddingTop: '40px', paddingBottom: '40px'}}>
      <div style={{padding: '40px', background: '#2a2824', color: '#fff', textAlign: 'center', width: '1000px', margin: 'auto'}}>
          <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
              <h2 style={{fontSize: '32px', fontWeight: 'bold', letterSpacing: '0.5px'}}> <strong>Why Choose Us?</strong> </h2>
              <p style={{fontSize: '15px', lineHeight: '1.6', opacity: '0.9'}}> We are dedicated to delivering high-quality software solutions that meet your needs. Here are some reasons to choose Ferguson Software Solutions for your next project. </p>
              <div style={{width: "100%", height: "2px", background: '#667eea', borderRadius: '5px', marginBottom: '10px'}}></div>
              
              
              <div className="wrapper" style = {{gap: '5%', width: '100%', justifyContent: 'center'}}>
                {/* Unordered List */}
                <div className="box" style={{textAlign:'left' , alignItems: 'left', justifyContent: 'left'}}>
                  <ul class='checklist' style={{padding: 0, width: '100%', gap:'5px'}}>
                      <li style={{maxWidth: '420px', fontSize: '15px', lineHeight: '1.6', color: '#fff', marginBottom: '10px'}}><strong style={{color: '#a8d5ff'}}>Team Experience.</strong> 3+ years of industry experience with agile teams in software, website and system development.</li>
                      <li style={{maxWidth: '420px', fontSize: '15px', lineHeight: '1.6', color: '#fff', marginBottom: '10px'}}><strong style={{color: '#a8d5ff'}}>Excellent communication and collaboration. </strong>You will receive a response from our team right away, clients never get the run around.</li>
                      <li style={{maxWidth: '420px', fontSize: '15px', lineHeight: '1.6', color: '#fff', marginBottom: '10px'}}><strong style={{color: '#a8d5ff'}}>Commitment to quality and deadlines.</strong>With a focus on delivering projects on time and to the highest standards, I ensure that every project meets your expectations. </li>
                      <li style={{maxWidth: '420px', fontSize: '15px', lineHeight: '1.6', color: '#fff'}}><strong style={{color: '#a8d5ff'}}>Continuous learning and improvement.</strong> I am constantly learning new languages and frameworks by creating new projects that focus around those areas, while improving frequently used skills along the way. </li>
                  </ul>
                </div>

                {/* Dropdown Section */}
                <div className="box" style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '10px', maxWidth: '500px', width: '100%', textAlign: 'center', alignItems: 'center', gap: '10px'}}>
                  <button style={{height: '50px', width: '300px', background: isOurMissionVisible ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#3d3934', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease', letterSpacing: '0.5px', fontSize: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px'}} onClick={toggleOurMissionVisibility}>Our Mission     {isOurMissionVisible ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</button>
                  {isOurMissionVisible && (
                  <p style={{width: '300px', textAlign: 'left', fontSize: '15px', lineHeight: '1.6', opacity: '0.9'}}>Ferguson Software Solutions' Mission is to deliver reliable, efficient software that helps businesses work smarter and grow faster. </p>)}

                  <button style={{height: '50px', width: '300px', background: isHistoryVisible ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#3d3934', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease', letterSpacing: '0.5px', fontSize: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px'}} onClick={toggleHistoryVisibility}>History {isHistoryVisible ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</button>
                  {isHistoryVisible && (
                  <p style={{width: '300px', textAlign: 'left', fontSize: '15px', lineHeight: '1.6', opacity: '0.9'}}>Ferguson Software Solutions was founded in 2023 by Jeffrey Ferguson, a software developer with a passion for creating high-quality software solutions. With over 3 years of experience in the industry, Jeffrey has worked on a wide range of projects, from small websites to large-scale software applications. </p>)}

                  <button style={{height: '50px', width: '300px', background: isContactUsVisible ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#3d3934', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease', letterSpacing: '0.5px', fontSize: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px'}} onClick={toggleContactUsVisibility}>Contact Me {isContactUsVisible ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</button>
                  {isContactUsVisible && (
                  <div style={{width: '300px', flexDirection: 'row', display: 'flex', justifyContent: 'center', textAlign: 'center', gap: '10px'}}>
                    <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                      <img
                      src="/images/CompanyLogo.png"
                      alt="Footer Illustration"
                      className="rounded-3xl"
                      style={{width: '85px', height: '80px', objectFit: 'cover', borderRadius: '8px'}}
                      />
                    </div>
                    
                    <div style={{textAlign: 'left'}}>
                      <p style={{width: '215px', fontSize: '15px', lineHeight: '1.6', marginBottom: '5px', fontWeight: 'bold'}}>Ferguson Software Solutions</p>
                      <p style={{width: '215px', fontSize: '14px', lineHeight: '1.6', marginBottom: '5px'}}>Dryden, Virginia</p>
                      <p style={{width: '215px', fontSize: '14px', lineHeight: '1.6', marginBottom: '5px'}}>385-499-1578</p>
                      <p style={{width: '215px', fontSize: '14px', lineHeight: '1.6'}}>JFergusooon@gmail.com</p>
                    </div>
                  </div>

                  )}
                </div>
              </div>
          </div>
      </div>
    </div>

    <div style={{padding: '40px 20px', background: '#443f3d', color: '#fff', textAlign: 'center'}}>
        <div>
            <h2 style={{fontSize: '32px', fontWeight: 'bold', letterSpacing: '0.5px', marginBottom: '10px'}}> Featured Projects </h2>
            <p style={{fontSize: '15px', lineHeight: '1.6', opacity: '0.9'}}> Here are some of my highlighted projects showcasing my skills and expertise in software development. </p>
        </div>
    </div>

    <div style={{background: '#2a2824', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '550px'}}>
      {/* Add project components or links here */}
      <ProjectsGrid />
    </div>

    <ModernFooter />
  </>
}


export default HomePage;