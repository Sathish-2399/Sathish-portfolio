import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AutoHub",
      desc: "A smart vehicle management platform for booking, tracking, and maintaining vehicles efficiently.",
      image: "/Autohub.png",
      github: "https://github.com/FrankieeGodwin/AutoHub.git",
      live: "https://autohubfrontend-latest.onrender.com/",
    },
    {
      title: "Retail Chain Management System",
      desc: "A retail management system for handling inventory, sales tracking, billing, and product management across multiple store branches.",
      image: "/Retail.png", 
      github: "https://github.com/Sathish-2399/RetailchainManagement",
      live: "#", 
    },
    {
      title: "Battlix",
      desc: "Battlix is a React-based coding battle platform where users compete in real-time programming challenges and track their performance.",
      image: "/Battlix.jpg", 
      github: "https://github.com/muthukumar9360/Code_Game",
      live: "https://battlix.netlify.app/", 
    },
    {
      title: "Netflix Dashboard",
      desc: "Interactive Tableau dashboard analyzing Netflix movies and TV shows by genre, country, and trends.",
      image: "/Netflix.jpg",
      github: "https://github.com/Sathish-2399/Netflix-dashboard.git",
      live: "https://public.tableau.com/",
    },
    {
      title: "Train Ticket Booking System",
      desc: "Full-featured train reservation system with seat availability, booking management, and authentication.",
      image: "/Train.jpg",
      github: "https://github.com/Sathish-2399/Bus_Ticket_Booking_Management_System.git",
      live: "https://trainbook-demo.vercel.app/",
    },
    {
      title: "Personal Portfolio Website",
      desc: "Responsive and interactive portfolio built using React, Vite, and Tailwind with animations and particle effects.",
      image: "/Portfolio.jpg",
      github: "https://github.com/Sathish-2399/YOUR_PORTFOLIO_REPO_LINK",
      live: "https://sathish3718-portfolio.netlify.app/",
    },
  ];

  return (
    <section className="bg-gray-900 py-20 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Projects
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 custom-scroll">

          {projects.map((project, index) => (
            <div
              key={index}
              className="snap-center min-w-[340px] md:min-w-[420px]
                         group relative rounded-3xl overflow-hidden 
                         bg-white/5 backdrop-blur-xl
                         border border-white/10
                         hover:border-blue-500/40
                         hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                         transition-all duration-500"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover 
                             group-hover:scale-110 
                             transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl 
                               bg-white hover:bg-white 
                               text-sm flex items-center gap-2 
                               transition"
                  >
                    Details <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Scrollbar Style Only For This Component */}
      <style>
        {`
          .custom-scroll::-webkit-scrollbar {
            height: 3px;
          }

          .custom-scroll::-webkit-scrollbar-track {
            background: transparent;
          }

          .custom-scroll::-webkit-scrollbar-thumb {
            background-color: white;
            border-radius: 10px;
          }

          .custom-scroll {
            scrollbar-width: thin;
            scrollbar-color: white transparent;
          }
        `}
      </style>

    </section>
  );
}