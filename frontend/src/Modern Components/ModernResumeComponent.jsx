import React from 'react';

export default function ModernResume() {
  const profile = {
    name: "Jeffrey Ferguson",
    bio: "Hello! I am a passionate software developer with a strong interest in creating innovative applications and solutions. With a background in computer science and hands-on experience in various programming languages, I enjoy tackling complex problems and turning ideas into reality through code. In my free time, I love exploring new technologies, contributing to open-source projects, and continuously improving my skills. Welcome to my portfolio website, where you can explore some of the projects I've worked on and learn more about my journey in the world of software development.",
    image: "/images/Myself.png"
  };

  const education = {
    school: "Neumont College of Computer Science",
    degree: "Bachelor of Science in Software Engineering",
    graduated: "September 2022",
    gpa: "3.65"
  };

  const skills = [
    "Programming Languages: JavaScript, Python, Java, C++, Swift",
    "Web Development: React, Node.js, HTML, CSS",
    "Mobile Development: SwiftUI, React Native",
    "Database Management: MySQL, MongoDB",
    "Version Control: Git, GitHub"
  ];

  const experience = [
    {
      title: "Software Engineer in Test",
      company: "Cox Automotive",
      period: "Sep 2022 - Aug 2025",
      location: "Draper, Utah"
    },
    {
      title: "QA Engineer Intern",
      company: "Cox Automotive",
      period: "Jan 2022 - Aug 2022",
      location: "Draper, Utah"
    }
  ];

  return (
    <div className="h-screen bg-gray-700 flex items-center justify-center p-6 overflow-hidden">
      <div className="w-full max-w-7xl h-full max-h-[900px] bg-gray-600 rounded-3xl shadow-2xl flex">
        {/* Left Side - Photo */}
        <div className="w-2/5 p-8 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[3rem] transform rotate-3"></div>
            <div className="relative bg-gray-400 rounded-[3rem] p-3 transform -rotate-1">
              <img 
                src={profile.image} 
                alt={profile.name}
                className="w-full h-auto rounded-[2.5rem] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-3/5 bg-slate-400 rounded-r-3xl p-8 flex flex-col">
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{profile.name}</h1>
            <p className="text-sm text-gray-800 leading-relaxed px-4">
              {profile.bio}
            </p>
          </div>

          {/* My History Section */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">My History</h2>
            
            <div className="flex gap-4 flex-1">
              {/* Work Experience - Left */}
              <div className="w-1/2 bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl p-6 flex flex-col" style={{minHeight: "540px", maxHeight: "540px"}}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Work Experience</h3>
                <div className="space-y-4 flex-1">
                  {experience.map((job, idx) => (
                    <div key={idx} className="relative pl-4">
                      <div className="absolute left-0 top-2 w-2 h-2 bg-gray-900 rounded-full"></div>
                      <h4 className="text-lg font-bold text-white">{job.title}</h4>
                      <p className="text-sm text-gray-100">{job.company} - {job.period}</p>
                      <p className="text-sm text-gray-100">{job.location}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Education & Skills */}
              <div className="w-1/2 flex flex-col gap-4">
                {/* Education */}
                <div className="bg-gradient-to-br from-red-900 to-red-950 rounded-3xl p-6 flex-1">
                  <h3 className="text-2xl font-bold text-gray-100 mb-3">Education</h3>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-gray-100">{education.school}</p>
                    <p className="text-sm text-gray-200">{education.degree}</p>
                    <p className="text-sm text-gray-200">Graduated: {education.graduated}</p>
                    <p className="text-sm text-orange-300 font-semibold">GPA: {education.gpa}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-6 flex-1">
                  <h3 className="text-2xl font-bold text-gray-100 mb-3">Skills</h3>
                  <ul className="space-y-2">
                    {skills.map((skill, idx) => (
                      <li key={idx} className="text-sm text-gray-200 leading-relaxed">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}