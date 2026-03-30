import React from 'react';
import './ProjectsGrid.css';

const ProjectsGrid = () => {


  return (
    <div className="home-project-list ">
    
      {/* Battlemon Project Entry */}
      <div key="" className="project-column bg-gradient-to-br from-yellow-400 to-orange-500"  style={{border: 'solid 2px black', width: '270px'}}>
        <div className='home-project-image-container'>
          <img
            src={`images/Battlemon.png`}
            alt={"Battlemon"}
            className="home-project-image"
            style={{border: 'solid 1px black'}}
          />

          
        </div>
        
        <div className="home-project-info">
          <a href={"https://jfergusooon.itch.io/battlemon"} target='_blank' rel="noreferrer" class='link'>
              <h2 className="project-title">Battlemon</h2>
          </a>
          <p className="home-project-headline">A monster-catching RPG game inspired by classic titles.</p>
          
          <div className="home-project-meta-row">
              <span className="project-meta"><strong>Release: </strong>2024</span>
              <span className="project-meta"><strong>Platforms: </strong>MacOS</span>
          </div>
          <div>
                <span className="home-project-meta"><strong>Link: </strong> <a href={"https://jfergusooon.itch.io/battlemon"} target="_blank" rel="noopener noreferrer">https://jfergusooon.itch.io/battlemon</a></span>
          </div>
          
        </div>

      </div>

      {/* Tracker Project Entry */}
      <div key="" className="project-column bg-gradient-to-br from-yellow-400 to-orange-500" style={{border: 'solid 2px black', width: '270px'}}>
        <div  className='home-project-image-container'>
          <img
            src={`images/Tracker.png`}
            alt={"Battlemon"}
            className="home-project-image"
            style={{border: 'solid 1px black'}}
          />

          
        </div>
        
        <div className="home-project-info">
          <a href={"https://jfergusooon.itch.io/battlemon"} target='_blank' rel="noreferrer" class='link'>
              <h2 className="project-title">Tracker</h2>
          </a>
          <p className="home-project-headline">A productivity app to help you manage your job applications efficiently.</p>
          
          <div className="home-project-meta-row">
              <span className="project-meta"><strong>Release: </strong>2025</span>
              <span className="project-meta"><strong>Platforms: </strong>Windows</span>
          </div>
          <div>
                <span className="home-project-meta"><strong>Link: </strong> <a href={"/home"} target="_blank" rel="noopener noreferrer">TBD</a></span>
          </div>
          
        </div>

      </div>
      
    </div>

  );
};

export default ProjectsGrid;
