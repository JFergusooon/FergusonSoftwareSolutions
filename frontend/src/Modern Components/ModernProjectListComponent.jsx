import React from 'react';

const ModernProjectList = () => {
  const projects = [
    {
      name: "Battlemon",
      img: "images/Battlemon.png",
      images: ["images/BattlemonTitle.png", "images/BattlemonHome.png"],
      url: "https://jfergusooon.itch.io/battlemon",
      headline: "A monster-catching RPG game inspired by classic titles.",
      description: `Written in SwiftUI for macOs. Utilizing a small screen resolution, users can start their journey with their favorite starter, battle wild pokemon, grow your party, purchase items from the shop, store items in their bag, and complete their full 151 pokedex. \n
      Battlemon is a 334x314 pokemon battle simulator that includes most features besides walking around.  First 151 Pokemon with Gen 1 Moves (Working on adding the rest)

    This includes:

    Fight \n
    Bag \n
    Party \n
    Pokedex \n
    PC Access & Storage \n
    Shop \n
    Multiple Save Files \n
    Game Settings \n
    Multiple Level Based Islands (Progression)`,
      platform: "MacOS",
      releaseDate: "2024",
    },
    {
      name: "Tracker",
      img: "images/Tracker_Home.png",
      images: ["images/Tracker_Tracker.png", "images/Tracker_LoggedOut.png"],
      imageLayout: "stacked",
      url: "https://github.com/JFergusooon/JobTrackerIO",
      headline: "A productivity app to help you manage your job applications efficiently.",
      description: `Built with a React frontend and an AWS backend powered by DynamoDB, API Gateway, and Lambda functions for scalable application tracking.

This application has a plethora of features to help users stay organized and on top of their job search:

This includes:

Create and manage a profile
Add and track job applications
Create multiple lists to organize application how you see fit
Visualize application progress with interactive charts
Profile Customization to tailor the experience to your needs
An advanced search feature to quickly find specific companies
Frequent updates and improvements based on user feedback
Secure authentication system`,
      footer: `We also offer a downloadable desktop version of the app for users who prefer a native experience, built with Tkinter in Python.
This can be found on our Github page.`,
      platform: "Web & Windows",
      releaseDate: "March 2026",
      github: "https://github.com/JFergusooon/JobTrackerIO",
      link: "https://jobtrackerio.pages.dev/"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-700 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {projects.map((project, index) => {
          const includesMarker = "This includes:";
          const includesIndex = project.description.indexOf(includesMarker);
          const mainDescription = includesIndex >= 0
            ? project.description.slice(0, includesIndex).trimEnd()
            : project.description;
          const allProjectImages = [project.img, ...(project.images || [])];
          const includesItems = includesIndex >= 0
            ? project.description
              .slice(includesIndex + includesMarker.length)
              .replace(/\\n/g, "\n")
              .split(/\r?\n/)
              .map((line) => line.trim())
              .filter((line) => line.length > 0)
            : [];

          return (
          <div key={index} className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Images */}
              <div className="md:w-1/2 bg-gradient-to-br from-yellow-400 to-orange-500 p-8 flex items-center justify-center">
                <div className="w-full max-w-lg">
                  {project.images ? (
                    project.imageLayout === "stacked" ? (
                      <div className="space-y-4">
                        {allProjectImages.map((img, idx) => (
                          <div key={idx}>
                            <img
                              src={img}
                              alt={`${project.name} screenshot ${idx + 1}`}
                              className="w-[96%] max-h-[28rem] object-contain rounded-xl shadow-lg bg-white p-2 mx-auto"
                            />
                            {idx === allProjectImages.length - 1 && (
                              <p className="text-red-700 text-[11px] mt-3 mb-0 text-center">
                                right click - open in new tab to see full image preview
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
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
                    )
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
                    <p className="text-gray-900 text-center leading-relaxed whitespace-pre-line">{mainDescription}</p>
                    {includesItems.length > 0 && (
                      <div className="text-gray-900 text-left pl-3 mt-3">
                        <p className="leading-relaxed">{includesMarker}</p>
                        <ul className="list-disc pl-5 leading-snug space-y-0">
                          {includesItems.map((item, itemIndex) => (
                            <li key={itemIndex} className="my-0">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.footer && (
                      <p className="text-gray-900 text-center leading-relaxed mt-6 whitespace-pre-line">{project.footer}</p>
                    )}
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
                        href={project.link || project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 underline break-all"
                      >
                        {project.link || project.url}
                      </a>
                    </div>
                    {project.github && (
                      <div className="text-orange-300">
                        <strong className="text-white">Source:</strong>{' '}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-blue-200 underline"
                        >
                          GitHub Link
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );})}
      </div>
    </div>
  );
};

export default ModernProjectList;