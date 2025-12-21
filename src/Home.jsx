import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { ExternalLink, Download } from "lucide-react";
import Roles from "./Roles.jsx"

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleDownloadCMD = () => {
     alert("📌 File downloaded!\n➡️ Double-click the .bat file to open the CMD Portfolio Shell.");
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#3b82f6' },
            shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#3b82f6', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', out_mode: 'out' },
          },
          interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
          },
          retina_detect: true
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white animate-fade">
        <style>
          {
            ` @keyframes shake {
                0%, 1005 {transform: rotate(0deg); }
                25% { transform: rotate(15deg); }
                50% { transform: rotate(-15deg); }
                75% { transform: rotate(10deg); }
              }
              .shake-hand {
                display: inline-block;
                animation: shake 0.6s ease-in-out infinite;
                transform-origin: bottom center;
              }
            `
          }
        </style>
        <div className="px-6 py-2 text-white backdrop-blur-md font-bold text-2xl 
        flex items-center gap-3 rounded-full w-fit mx-auto mb-4 animate-fade">
          <span>Hi</span>
          <span className="shake-hand">👋</span>
        </div>

        <h1 className="text-7xl font-bold gradient-text mb-4">I'm Sathish B</h1>
        <Roles/>
        <p className="text-sm sm:text-base md:text-lg gradient-text mb-8 md:mb-12 max-w-2xl mx-auto px-2 py-4">
          Passionate about building innovative solutions with cutting-edge technologies. 
          Specializing in Data Analytics and Full Stack Development.
        </p>



        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <a 
            href="#projects" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-3 rounded-md text-white font-medium transition-colors inline-flex items-center justify-center gap-2 hover:shadow-xl"
          >
            View My Work
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="SATHISH B - RESUME.pdf"
            download
            className="w-full sm:w-auto bg-blue-600
                        hover:scale-105 transform transition-all duration-300 
                        px-6 md:px-8 py-3 rounded-lg text-white font-semibold 
                        inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
            <Download className="w-4 h-4" />
            Download Resume
            </a>

        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/public/sathish-portfolio.bat"
            download
            onClick={handleDownloadCMD}
            className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-3 rounded-lg 
                      text-white font-semibold inline-flex items-center gap-2 
                      shadow-md hover:shadow-xl transition-all duration-300"
          >
            Open CMD Portfolio Shell
          </a>
        </div>

      </div>
    </section>
  );
}

// --------------------------------


// export default function Home(){
//   return (
//     <>
//       <div className="relative min-h-screen bg-black flex flex-col items-center justify-center">
//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2
//                         w-[700px] h-[350px]
//                         bg-red-600/40 rounded-full blur-3xl
//                        "></div>

//               <div className="relative z-10 text-center">
//         <p className="text-5xl text-white font-extrabold tracking-wide">
//           Sathish
//         </p>
//         <p className="mt-3 text-xl text-gray-300 font-medium">
//           Business Analyst
//         </p>
//       </div>
//         {/* <div className="absolute bottom-0 inset-x-0 h-1/2
//                         bg-gradient-to-t from-red-600/20 via-red-500/10 to-transparent"></div>
                       
//         <p className="text-2xl text-white font-bold">Sathish</p>
//         <p className="text-2xl text-white font-bold pt-2">Business Analyst</p> */}
//       </div>
//     </>
//   )
// }

// import { useState, useEffect } from "react";
// import {Routes, Route} from "react-router-dom";

// export default function Home() {
//   return(
//     <>
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
  
//   {/* Animated Gradient Background */}
//   <div className="absolute inset-0 
//                   bg-gradient-to-r 
//                   from-red-700 via-yellow-400 to-red-700 
//                   animate-gradient">
//   </div>

//   {/* Content */}
//   <div className="relative z-10 text-white text-center">
//     <h1 className="text-6xl font-bold">I'm Sathish B</h1>
//     <p className="mt-4 text-lg">
//       Data Analytics & Full Stack Developer
//     </p>
//   </div>

//   {/* Animation Styles */}
//   <style>
//     {`
//       @keyframes gradientMove {
//         0% { background-position: 0% 50%; }
//         50% { background-position: 100% 50%; }
//         100% { background-position: 0% 50%; }
//       }

//       .animate-gradient {
//         background-size: 300% 300%;
//         animation: gradientMove 12s ease infinite;
//       }
//     `}
//   </style>

// </section>

//     </>
//   )
// };

// export default function Home() {
//   return (
//     <section className="relative min-h-screen pt-24
//                        flex items-center justify-center
//                        bg-black overflow-hidden">

//       {/* Matrix Background */}
//       <div className="absolute inset-0 
//                       text-green-300 opacity-20 
//                       text-xs leading-5 
//                       animate-matrix 
//                       pointer-events-none z-0">
//         {Array(300).fill("101001010010").join(" ")}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white">
//         <h1 className="text-6xl font-bold mb-4">
//           I'm Sathish B
//         </h1>
//         <p className="text-lg text-gray-300">
//           Data Engineer | Analyst
//         </p>
//       </div>

//       {/* Animation */}
//       <style>
//         {`
//           @keyframes matrix {
//             from { transform: translateY(-100%); }
//             to { transform: translateY(100%); }
//           }
//           .animate-matrix {
//             animation: matrix 25s linear infinite;
//           }
//         `}
//       </style>

//     </section>
//   );
// }


// export default function Home() {
//   return (
//     <section className="relative min-h-screen pt-24
//                        flex items-center justify-center
//                        bg-black overflow-hidden">

//       {/* Glow */}
//       <div className="absolute inset-0 
//                       flex justify-center items-center 
//                       z-0 pointer-events-none">
//         <div className="w-[600px] h-[600px] 
//                         bg-blue-500/30 
//                         rounded-full blur-3xl"></div>
//       </div>

//       {/* Grid */}
//       <div className="absolute inset-0 
//                       z-0 pointer-events-none
//                       bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),
//                           linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]
//                       bg-[size:40px_40px] opacity-30">
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white">
//         <h1 className="text-6xl font-bold mb-4">
//           I'm Sathish B
//         </h1>
//         <p className="text-lg text-gray-300">
//           Engineering Scalable Systems
//         </p>
//       </div>

//     </section>
//   );
// }


// export default function Home() {
//   return(
//     <>
// <section className="relative min-h-screen pt-24
//                    flex items-center justify-center
//                    overflow-hidden">

//   <div className="absolute inset-0 
//                   bg-gradient-to-br 
//                   from-purple-900 via-black to-blue-900
//                   animate-gradient z-0"></div>

//   <div className="relative z-10 text-center text-white">
//     <h1 className="text-6xl font-bold mb-4">I'm Sathish B</h1>
//     <p className="text-lg text-gray-300">
//       Full Stack & Data Engineering
//     </p>
//   </div>

//   <style>
//     {`
//       @keyframes gradient {
//         0% { background-position: 0% 50%; }
//         50% { background-position: 100% 50%; }
//         100% { background-position: 0% 50%; }
//       }
//       .animate-gradient {
//         background-size: 300% 300%;
//         animation: gradient 14s ease infinite;
//       }
//     `}
//   </style>

// </section>

//     </>
//   )
// };

// export default function Home() {
//   return (
//     <section className="relative min-h-screen pt-24
//                    flex items-center justify-center
//                    bg-black overflow-hidden">

//   {/* Orbs */}
//   <div className="absolute top-32 left-32 w-72 h-72
//                   bg-pink-500/30 rounded-full blur-3xl
//                   animate-float"></div>

//   <div className="absolute bottom-24 right-40 w-80 h-80
//                   bg-blue-500/30 rounded-full blur-3xl
//                   animate-float delay-3000"></div>

//   {/* Content */}
//   <div className="relative z-10 text-center text-white">
//     <h1 className="text-6xl font-bold mb-4">I'm Sathish B</h1>
//     <p className="text-lg text-gray-300">
//       Building Clean & Powerful Systems
//     </p>
//   </div>

//   <style>
//     {`
//       @keyframes float {
//         0% { transform: translateY(0px); }
//         50% { transform: translateY(-30px); }
//         100% { transform: translateY(0px); }
//       }
//       .animate-float {
//         animation: float 8s ease-in-out infinite;
//       }
//       .delay-3000 {
//         animation-delay: 3s;
//       }
//     `}
//   </style>

// </section>

//   )

// };


// export default function Home() {
//   return (
// <section className="relative min-h-screen pt-24
//                    flex items-center justify-center
//                    bg-gradient-to-br from-gray-900 to-black">

//   <div className="relative z-10
//                   bg-white/10 backdrop-blur-xl
//                   border border-white/20
//                   rounded-2xl px-12 py-10
//                   text-center text-white shadow-2xl">

//     <h1 className="text-6xl font-bold mb-4">I'm Sathish B</h1>
//     <p className="text-lg text-gray-300">
//       Data Analytics & Full Stack Developer
//     </p>

//   </div>

// </section>

//   )
// };