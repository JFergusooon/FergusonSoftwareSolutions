import React, { useEffect, useRef } from 'react';
import './ProjectsGrid.css';

const ResizableHeadline = ({ text }) => {
  const headlineRef = useRef(null);

  useEffect(() => {
    const adjustFontSize = () => {
      if (headlineRef.current) {
        const element = headlineRef.current;
        const container = element.parentElement;
        
        // Reset to max font size first
        element.style.fontSize = '14px';
        
        // Check if text overflows and shrink if needed
        while (element.scrollHeight > container.clientHeight - 40 && parseInt(element.style.fontSize) > 10) {
          const currentSize = parseInt(element.style.fontSize);
          element.style.fontSize = (currentSize - 0.5) + 'px';
        }
      }
    };

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);
    return () => window.removeEventListener('resize', adjustFontSize);
  }, [text]);

  return (
    <p ref={headlineRef} className="home-project-headline">{text}</p>
  );
};

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      name: "Battlemon",
      headline: "A monster-catching RPG game inspired by classic titles.",
      image: "images/Battlemon.png",
      release: "2024",
      platforms: "MacOS",
      link: "https://jfergusooon.itch.io/battlemon",
      url: "https://jfergusooon.itch.io/battlemon"
    },
    {
      id: 2,
      name: "Tracker",
      headline: "A productivity app to help you manage your job applications efficiently.",
      image: "images/Tracker_Home.png",
      release: "March 2026",
      platforms: "Web",
      link: "https://jobtrackerio.pages.dev/",
      url: "https://jobtrackerio.pages.dev/"
    },
    {
      id: 3,
      name: "InstaConnect",
      headline: "A social media platform to connect with friends instantly.",
      image: "images/InstantConnect.png",
      release: "2022",
      platforms: "Web",
      link: "#",
      url: "#"
    },
    {
      id: 4,
      name: "BookHook",
      headline: "An online bookstore with a vast collection of books.",
      image: "images/BookHook.png",
      release: "2022",
      platforms: "Web / Mobile",
      link: "#",
      url: "#"
    },
    ...Array.from({ length: 6 }, (_, i) => ({
      id: i + 5,
      name: `Project ${i + 5}`,
      headline: "Coming soon - stay tuned for updates.",
      image: "images/Background.png",
      release: "TBD",
      platforms: "TBD",
      link: "#",
      url: "#"
    }))
  ];


  return (
    <div className="home-project-list">
    
      {projects.map((project) => (
        <div key={project.id} className="project-column bg-gradient-to-br from-yellow-400 to-orange-500" style={{border: 'solid 2px black', width: '270px', height: '420px', display: 'flex', flexDirection: 'column'}}>
          <div className='home-project-image-container'>
            <img
              src={project.image}
              alt={project.name}
              className="home-project-image"
              style={{border: 'solid 1px black'}}
            />
          </div>
          
          <div className="home-project-header">
            <a href={project.url} target='_blank' rel="noreferrer" className='link'>
                <h2 className="project-title">{project.name}</h2>
            </a>
          </div>
          
          <div className="home-project-description">
            <ResizableHeadline text={project.headline} />
          </div>
          
          <div className="home-project-footer">
            <div className="home-project-meta-row">
                <span className="project-meta"><strong>Release: </strong>{project.release}</span>
                <span className="project-meta"><strong>Platforms: </strong>{project.platforms}</span>
            </div>
            <div>
                  <span className="home-project-meta"><strong style={{color: 'red'}}>Link: </strong><a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">{project.link}</a></span>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default ProjectsGrid;
