import { BarChart, Database, Brain, Layers, Github, ExternalLink, Grid } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AutoHub",
      desc: "AutoHub — a smart vehicle management platform for booking, tracking, and maintaining vehicles efficiently.",
      tech: ["MERN Stack", "MongoDB", "Express js", "React", "Node"],
      icon: Layers,
      color: "red",
      github: "https://github.com/FrankieeGodwin/AutoHub.git",
      live: "https://autohubfrontend-latest.onrender.com/",
    },
    {
      title: "Netflix DashBoard",
      desc: "An interactive Tableau dashboard analyzing Netflix’s movies and TV shows by genre, country, content type, and trends over time.",
      tech: ["tableau"],
      icon : Grid,
      color: "red",
      github: "https://github.com/Sathish-2399/Netflix-dashboard.git",
      live: "https://public.tableau.com/app/profile/sathish.b4008/viz/Netflix_17568337202300/Netflix?publish=yes "
    },
    {
      title: "Train Ticket Booking Management System",
      desc: "A full-featured train reservation system with real-time seat availability, booking management, and user authentication.",
      tech: ["Java", "Spring Boot", "MySQL"],
      icon: Database,
      color: "green",
      github: "https://github.com/Sathish-2399/Bus_Ticket_Booking_Management_System.git",
      live: "https://trainbook-demo.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 py-16 md:py-20 px-4 md:px-6 relative z-20 animate-fade">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 gradient-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="bg-gray-800/80 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover-lift rounded-lg p-4 md:p-6 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-${project.color}-600/20 rounded-lg group-hover:bg-${project.color}-600/30 transition-colors`}>
                    <IconComponent className={`w-5 md:w-6 h-5 md:h-6 text-${project.color}-400`} />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="border border-gray-600 text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 🔗 Buttons for GitHub & Live Demo */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
