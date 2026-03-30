import React from 'react';
import './ListComponent.css';

const ListComponent = () => {

  // All project data is in ONE place
  /*const projects = [
    {
      name: "Battlemon",
      img: "Battlemon.png",
      url: "https://jfergusooon.itch.io/battlemon",
      headline: "A monster-catching RPG game inspired by classic titles.",
      description: "Written in SwiftUI for macOs. Utilizing a small screen resolution, users can start their journey with their favorite starter, battle wild pokemon, grow your party, purchase items from the shop, store items in their bag, and complete their full 151 pokedex.",
      operatingSystem: "Windows",
      releaseDate: "2024",
    },
    {
      name: "Tracker",
      img: "Tracker.png",
      url: "#",
      headline: "A productivity app to help you manage your job applications efficiently.",
      description: "Written primarily in Python with Tkinter for the GUI, it lets users add, edit, and track their applications. Features include company name, position, and status updates. ",
      operatingSystem: "Windows / Mac",
      releaseDate: "Coming soon",
    },
    {
      name: "InstaConnect",
      img: "InstaConnect.png",
      url: "#",
      headline: "A social media platform to connect with friends instantly.",
      description: "A social media platform to connect with friends instantly.",
      operatingSystem: "Web",
      releaseDate: "2025",
    },
    {
      name: "BookHook",
      img: "BookHook.png",
      url: "#",
      headline: "An online bookstore with a vast collection of books.",
      description: "An online bookstore with a vast collection of books.",
      operatingSystem: "Web / Mobile",
      releaseDate: "2024",
    }
  ];
  */
  return (
    <div className="project-list">
    
      {/* Battlemon Project Entry */}
      <div key="" className="project-row">
        <div className="project-left">
          <img
            src={`images/Battlemon.png`}
            alt={"Battlemon"}
            className="project-thumb"
          />

          <div className='battlemon-images'>
            <img
            src={`images/Battlemon.png`}
            alt={"Battlemon"}
            style= {{height: '125px', width: '125px'}}
          />
          <img
            src={`images/Battlemon.png`}
            alt={"Battlemon"}
            style= {{height: '125px', width: '125px'}}
          />
          </div>
        </div>
        <div class='project-middle'></div>
        
        <div className="project-right">
          <a href={"https://jfergusooon.itch.io/battlemon"} target='_blank' rel="noreferrer" class='link'>
              <h2 className="project-title">Battlemon</h2>
          </a>
          <p className="project-headline">A monster-catching RPG game inspired by classic titles.</p>
          <p className="project-description">Written in SwiftUI for macOs. Utilizing a small screen resolution, users can start their journey with their favorite starter, battle wild pokemon, grow your party, purchase items from the shop, store items in their bag, and complete their full 151 pokedex.</p>
          <div className="project-meta-row">
              <span className="project-meta"><strong>Release: </strong>2024</span>
              <span className="project-meta"><strong>Platforms: </strong>MacOS</span>
              <span className="project-meta"><strong>Link: </strong> <a href={"https://jfergusooon.itch.io/battlemon"} target="_blank" rel="noopener noreferrer">https://jfergusooon.itch.io/battlemon</a></span>
          </div>
        </div>

      </div>

      {/* Tracker Project Entry */}
      <div key="" className="project-row">
        <div className="project-left">
          <img
            src={`images/Tracker.png`}
            alt={"Tracker"}
            className="project-thumb"
          />
        </div>
        <div class='project-middle'></div>
        
        <div className="project-right">
          <a href={"/projects"} target='_blank' rel="noreferrer" class='link'>
              <h2 className="project-title">Tracker</h2>
          </a>
          <p className="project-headline">A productivity app to help you manage your job applications efficiently.</p>
          <p className="project-description">Written primarily in Python with Tkinter for the GUI, it lets users add, edit, and track their applications. Features include company name, position, and status updates.</p>
          <div className="project-meta-row">
              <span className="project-meta"><strong>Release: </strong>Coming Soon</span>
              <span className="project-meta"><strong>Platforms: </strong>Windows</span>
              <span className="project-meta"><strong>Link: </strong> <a href={"/projects"} target="_blank" rel="noopener noreferrer">github.com/jobtracker</a></span>
          </div>
        </div>

      </div>

      {/* InstaConnect Project Entry */}
      <div key="" className="project-row">
        <div className="project-left">
          <img
            src={`images/`}
            alt={"InstaConnect"}
            className="project-thumb"
          />
        </div>
        <div class='project-middle'></div>
        
        <div className="project-right">
          <a href={"/projects"} target='_blank' rel="noreferrer" class='link'>
              <h2 className="project-title">InstaConnect</h2>
          </a>
          <p className="project-headline">A social media platform to connect with friends instantly.</p>
          <p className="project-description">A social media platform to connect with friends instantly.</p>
          <div className="project-meta-row">
              <span className="project-meta"><strong>Release: </strong>2022</span>
              <span className="project-meta"><strong>Platforms: </strong>Web</span>
              <span className="project-meta"><strong>Link: </strong> <a href={"/projects"} target="_blank" rel="noopener noreferrer">jferguson-dev.com/instantconnect</a></span>
          </div>
        </div>

      </div>
      
      {/* BookHook Project Entry */}
      <div key="" className="project-row">
        <div className="project-left">
          <img
            src={`images/`}
            alt={"BookHook"}
            className="project-thumb"
          />
        </div>
        <div class='project-middle'></div>
        
        <div className="project-right">
          <a href={"/projects"} target='_blank' rel="noreferrer" class='link'>
              <h2 className="project-title">BookHook</h2>
          </a>
          <p className="project-headline">An online bookstore with a vast collection of books.</p>
          <p className="project-description">An online bookstore with a vast collection of books.</p>
          <div className="project-meta-row">
              <span className="project-meta"><strong>Release:</strong>2022</span>
              <span className="project-meta"><strong>Platforms:</strong>Web / Mobile</span>
              <span className="project-meta"><strong>Link:</strong> <a href={"/projects"} target="_blank" rel="noopener noreferrer">jferguson-dev.com/bookhook</a></span>
          </div>
        </div>

      </div>

    </div>

  );
};

export default ListComponent;
