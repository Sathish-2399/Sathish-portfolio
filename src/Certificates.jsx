import { ExternalLink } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Coursera - Data for Business Analytics using Microsoft Excel",
      desc: "Learned how to analyze business data and build insightful reports using Microsoft Excel.",
      link: "https://drive.google.com/file/d/1DndrPaq9mixiwUBg0L6gLm4VBxwvZY3w/view?usp=sharing",
      color: "blue",
    },
    {
      title: "NPTEL - Data Analytics with Python",
      desc: "Studied data analysis concepts and implemented real-world analytics using Python libraries.",
      link: "https://drive.google.com/file/d/1-bZpY7LFogWAF9o946DToVugoq0cYxKt/view?usp=sharing",
      color: "purple",
    },
    {
      title: "NPTEL - Cloud Computing",
      desc: "Covered cloud architecture, deployment models, services, and modern cloud technologies.",
      link: "https://drive.google.com/file/d/1F7KtJgsKMTxplkR4jHhsLD8PdHlhz5zA/view?usp=sharing",
      color: "orange",
    },
  ];

  return (
    <section className="bg-gray-900 py-20 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden 
                         bg-white/5 backdrop-blur-xl
                         border border-white/10
                         hover:border-blue-500/40
                         hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                         transition-all duration-500"
            >
              
              {/* Decorative Top Glow Line */}
              <div className={`h-1 w-full bg-${cert.color}-500/70`}></div>

              <div className="p-8">

                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {cert.desc}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 
                             px-4 py-2 rounded-xl 
                             bg-white/10 hover:bg-white/20 
                             text-sm text-white
                             transition-all"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}