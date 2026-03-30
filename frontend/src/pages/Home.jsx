// pages/Home.jsx
import React from 'react';
import NavBar from '../components/navBar';
import '../css/Home.css';
import ProjectsGrid from '../components/ProjectsGrid';
import ModernFooter from '../Modern Components/ModernFooterComponent';
import { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function HomePage() {

  const [isOurMissionVisible, setIsOurMissionVisible] = useState(true);
  const [isContactUsVisible, setIsContactUsVisible] = useState(false);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

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
    <div style={{width: '100%', height: '250px', textAlign: 'center', color: "#fff", 
            backgroundImage: "url('images/Background.png')", display: 'flex', justifyContent: 'center', alignItems: 'center', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'}}>
      <h1 style={{fontSize: '34px', fontWeight: 'bold'}}>Welcome to Ferguson Software Solutions!</h1>
    </div>

    {/*Software Development Section*/}
    <div style={{display: 'flex', width: '100%', background: '#dbd8d5ff', alignContent: 'center'}}>
      <div style={{background: '#69625fff', width: '1000px', gap: '100px', margin: 'auto'}}>
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: '15%', gap: '30px'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src='images/KeyboardIcon.png' alt='^' style={{width: '50px', height: '50px', marginTop: '100%'}}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', height: '250px', padding: '20px', color: '#fff', alignItems: 'center', textAlign: 'left', gap: "10px", justifyContent: 'center'}}>
          <p style={{width: "320px", marginBottom: '15px', color: 'yellow', paddingTop: '10px'}}>Software Development</p>
          {/*<p style={{width: '320px', textAlign: 'left',}}>Ferguson Software Solutions has a rich history developing both server side and web based software solutions. We pride ourselves on our clean, professional and scalable software that functions as expected while being delivered on time. Stop dealing with excuses.</p>*/}
          <p style={{width: '320px', textAlign: 'left', paddingBottom: '15px'}}>Ferguson Software Solutions have a rich history developing both server side and web based software solutions. We pride ourselves on writing clean, professional, and scalable software that functions to incredible standards while being delivered on time. We make our clients feel valued and heard throughout the development process. </p>
        </div>
        </div>
        
      </div>
    </div> 
      
    

    {/*Why Choose Us Section*/}
    <div style={{display: 'flex', width: '100%', background: '#f4f1ed', alignContent: 'center'}}>
      <div style={{padding: '20px', background: '#f4f1ed', color: '#000', textAlign: 'center', width: '1000px', margin: 'auto', border: '3px solid black'}}>
          <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
              <h2> <strong>Why Choose Us?</strong> </h2>
              <p> We are dedicated to delivering high-quality software solutions that meet your needs. Here are some reasons to <br></br>choose Ferguson Software Solutions for your next project. </p>
              <div style={{width: "100%", height: "2px", background: 'black', borderRadius: '5px', marginBottom: '10px'}}></div>
              
              
              <div className="wrapper" style = {{gap: '5%', width: '100%', justifyContent: 'center'}}>
                {/* Unordered List */}
                <div className="box" style={{textAlign:'left' , alignItems: 'left', justifyContent: 'left'}}>
                  <ul class='checklist' style={{padding: 0, width: '100%', gap:'5px'}}>
                      <li style={{maxWidth: '420px'}}><strong>Team Experience.</strong> 3+ years of industry experience with agile teams in software, website and system development.</li>
                      <li style={{maxWidth: '420px'}}><strong>Excellent communication and collaboration. </strong>You will receive a response from our team right away, clients never get the run around.</li>
                      <li style={{maxWidth: '420px'}}><strong>Commitment to quality and deadlines.</strong>With a focus on delivering projects on time and to the highest standards, I ensure that every project meets your expectations. </li>
                      <li style={{maxWidth: '420px'}}><strong>Continuous learning and improvement.</strong> I am constantly learning new languages and frameworks by creating new projects that focus around those areas, while improving frequently used skills along the way. </li>
                  </ul>
                </div>

                {/* Dropdown Section */}
                <div className="box" style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '10px', maxWidth: '500px', width: '100%', textAlign: 'center', alignItems: 'center', gap: '10px'}}>
                  <button className={isOurMissionVisible ? "bg-gradient-to-br from-slate-400 to-slate-500" : ""} style={{height: '50px', width: '300px'}} onClick={toggleOurMissionVisibility}>Our Mission     {isOurMissionVisible ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</button>
                  {isOurMissionVisible && (
                  <p style={{width: '300px', textAlign: 'left'}}>Ferguson Software Solutions' Mission is to deliver reliable, efficient software that helps businesses work smarter and grow faster. </p>)}

                  <button className={isHistoryVisible ? "bg-gradient-to-br from-slate-400 to-slate-500" : ""} style={{height: '50px', width: '300px'}} onClick={toggleHistoryVisibility}>History {isHistoryVisible ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</button>
                  {isHistoryVisible && (
                  <p style={{width: '300px', textAlign: 'left'}}>Ferguson Software Solutions was founded in 2023 by Jeffrey Ferguson, a software developer with a passion for creating high-quality software solutions. With over 3 years of experience in the industry, Jeffrey has worked on a wide range of projects, from small websites to large-scale software applications. </p>)}

                  <button className={isContactUsVisible ? "bg-gradient-to-br from-slate-400 to-slate-500" : ""} style={{height: '50px', width: '300px'}} onClick={toggleContactUsVisibility}>Contact Me {isContactUsVisible ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</button>
                  {isContactUsVisible && (
                  <div style={{width: '300px', flexDirection: 'row', display: 'flex', justifyContent: 'center', textAlign: 'center', gap: '10px'}}>
                    <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                      <img
                      src="/images/CompanyLogo.png"
                      alt="Footer Illustration"
                      className="rounded-3xl"
                      style={{width: '85px', height: '80px', objectFit: 'fill;'}}
                      />
                    </div>
                    
                    <div>
                      <p style={{width: '215px'}}>Ferguson Software Solutions</p>
                      <p style={{width: '215px'}}>Dryden, Virginia</p>
                      <p style={{width: '215px'}}>385-499-1578</p>
                      <p style={{width: '215px'}}>JFergusooon@gmail.com</p>
                    </div>
                  </div>

                  )}
                </div>
              </div>
          </div>
      </div>
    </div>

    



    <div style={{padding: '20px', background: '#69625fff', color: '#fff', textAlign: 'center'}}>
        <div>
            <h2> Featured Projects </h2>
            <p> Here are some of my highlighted projects showcasing my skills and expertise in software development. </p>
        </div>
    </div>




    <div>
      {/* Add project components or links here */}
      <ProjectsGrid />
    </div>

    <ModernFooter />
  </>
}


export default HomePage;