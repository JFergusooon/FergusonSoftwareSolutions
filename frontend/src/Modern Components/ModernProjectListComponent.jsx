import React from 'react';

const ModernProjectList = () => {
  const projects = [
    {
      name: "Battlemon",
      img: "images/Battlemon.png",
      images: ["images/BattlemonTitle.png", "images/BattlemonHome.png"],
      url: "https://jfergusooon.itch.io/battlemon",
      headline: "A monster-catching RPG game inspired by classic titles.",
      description: "Written in SwiftUI for macOs. Utilizing a small screen resolution, users can start their journey with their favorite starter, battle wild pokemon, grow your party, purchase items from the shop, store items in their bag, and complete their full 151 pokedex.",
      platform: "MacOS",
      releaseDate: "2024",
    },
    {
      name: "Tracker",
      img: "images/Tracker.png",
      url: "https://github.com/JFergusooon/JobTrackerIO",
      headline: "A productivity app to help you manage your job applications efficiently.",
      description: "Written primarily in Python with Tkinter for the GUI, it lets users add, edit, and track their applications. Features include company name, position, and status updates.",
      platform: "Windows",
      releaseDate: "March 2026",
      link: "https://github.com/JFergusooon/JobTrackerIO"
    },
    {
      name: "InstaConnect",
      img: "images/InstantConnect.png",
      url: "/projects",
      headline: "A social media platform to connect with friends instantly.",
      description: "Coded in JavaScript with React for the frontend. The backend consists of several Docker containers. These microservices are using Java with SpringBoot, and both MongoDB and MySQL for data storage. Users can create profiles, post updates, and connect with friends in real-time.",
      platform: "Web",
      releaseDate: "2022",
      link: "jferguson-dev.com/instantconnect"
    },
    {
      name: "BookHook",
      img: "images/BookHook.png",
      url: "/projects",
      headline: "An online bookstore with a vast collection of books.",
      description: "An online bookstore with a vast collection of books.",
      platform: "Web / Mobile",
      releaseDate: "2022",
      link: "jferguson-dev.com/bookhook"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-700 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Images */}
              <div className="md:w-1/2 bg-gradient-to-br from-yellow-400 to-orange-500 p-8 flex items-center justify-center">
                <div className="w-full max-w-lg">
                  {project.images ? (
                    <div className="space-y-4">
                      <img
                        src={project.img}
                        alt={project.name}
                        className="w-full rounded-2xl shadow-lg bg-white p-2"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        {project.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${project.name} screenshot ${idx + 1}`}
                            className="w-full h-64 object-cover rounded-xl shadow-lg bg-white p-2"
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-300 rounded-2xl shadow-lg p-8 h-96 flex items-center justify-center">
                      <img
                        src={project.img || "https://via.placeholder.com/400x300?text=Project+Image"}
                        alt={project.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Project Info */}
              <div className="md:w-1/2 bg-slate-500 p-8 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <div className="bg-gradient-to-r from-red-900 to-red-950 rounded-2xl p-4 mb-4">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-white hover:text-gray-200 transition-colors"
                    >
                      <h2 className="text-3xl font-bold text-center">{project.name}</h2>
                    </a>
                  </div>

                  {/* Headline */}
                  <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-3 mb-4">
                    <p className="text-white text-center font-semibold">{project.headline}</p>
                  </div>

                  {/* Description */}
                  <div className="bg-slate-400 rounded-2xl p-6 mb-4 border-4 border-gray-800">
                    <p className="text-gray-900 text-center leading-relaxed">{project.description}</p>
                  </div>

                </div>

                {/* Meta Information */}
                <div className="bg-gradient-to-r from-red-900 to-red-950 rounded-2xl p-4">
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="text-orange-300">
                      <strong className="text-white">Release:</strong> {project.releaseDate}
                    </div>
                    <div className="text-orange-300">
                      <strong className="text-white">Platforms:</strong> {project.platform}
                    </div>
                    <div className="text-orange-300">
                      <strong className="text-white">Link:</strong>{' '}
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 underline break-all"
                      >
                        {project.link || project.url}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModernProjectList;