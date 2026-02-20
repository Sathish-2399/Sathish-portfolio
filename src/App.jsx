import { useState, useEffect } from "react"
import {Routes, Route} from "react-router-dom"

import Navbar from "./Navbar"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Skills from "./Skills.jsx"
import Projects from './Projects.jsx'
import Certificates from "./Certificates.jsx"
import Contact from "./contact.jsx"
import Footer from "./Footer.jsx"
import Coding from "./Coding.jsx"
import SplashScreen from "./SplashScreen.jsx"

export default function App() {
  const [loading,setLoading] =  useState (true);

  useEffect(() => {
    const timer = setTimeout(()=> {
      setLoading(false);
    },3000);

    return () => clearTimeout(timer);
  },[]);
  
  if(loading) {
    return <SplashScreen/>;
  }

  return (
    <div>
    <Navbar />

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
      {/* <Route path="/contact" element={<Contact />} />
      <Route path="/coding" element={<Coding />} /> */}
      <Route path="*" element={<Home />} />
    </Routes>
    </div>
  );
}

// import { useEffect } from "react";
// import Home from "./Home.jsx";

// function App() {

//   useEffect(() => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       console.log("Speech Recognition not supported");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.continuous = true;
//     recognition.lang = "en-US";

//     recognition.start();

//     recognition.onresult = (event) => {
//       const transcript =
//         event.results[event.results.length - 1][0].transcript
//           .toLowerCase()
//           .trim();

//       console.log("Voice Input:", transcript);

//       const sections = [
//         "home",
//         "about",
//         "skills",
//         "projects",
//         "certificates",
//         "coding",
//         "contact",
//       ];

//       sections.forEach((section) => {
//         if (transcript.includes(section)) {
//           document
//             .getElementById(section)
//             ?.scrollIntoView({ behavior: "smooth" });
//         }
//       });
//     };

//     return () => recognition.stop();
//   }, []);

//   return (
//     <> 
//       <Home />
//     </>
//   );
// }

// export default App;

