export default function Certificates() {
  return (
    <section id="certificates" className="py-16 md:py-20 px-4 md:px-6 bg-gray-900 relative z-20 animate-fade">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 gradient-text">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Certificate 1 */}
          <div className="bg-gray-800/80 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover-lift rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-3 md:mb-4">
              Coursera - Data for Business Analytics using Microsoft Excel
            </h3>
            <p className="text-gray-300 text-sm mb-4">Learned how to use Excel to analyze business data effectively.</p>
            <a href="https://drive.google.com/file/d/1DndrPaq9mixiwUBg0L6gLm4VBxwvZY3w/view?usp=sharing" target="_blank"
               className="inline-block mt-auto bg-blue-600/20 text-blue-300 border border-blue-600/30 px-4 py-2 rounded-full text-xs md:text-sm hover:bg-blue-600/30 transition-all duration-300">
              View Certificate
            </a>
          </div>

          {/* Certificate 2 */}
          <div className="bg-gray-800/80 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover-lift rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-purple-400 mb-3 md:mb-4">
              NPTEL - Data Analytics with Python
            </h3>
            <p className="text-gray-300 text-sm mb-4">Studied data analytics techniques and implemented them using Python libraries.</p>
            <a href="https://drive.google.com/file/d/1-bZpY7LFogWAF9o946DToVugoq0cYxKt/view?usp=sharing" target="_blank"
               className="inline-block mt-auto bg-purple-600/20 text-purple-300 border border-purple-600/30 px-4 py-2 rounded-full text-xs md:text-sm hover:bg-purple-600/30 transition-all duration-300">
              View Certificate
            </a>
          </div>

          {/* Certificate 3 */}
          <div className="bg-gray-800/80 border border-gray-700 hover:border-orange-500 transition-all duration-300 hover-lift rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold text-orange-400 mb-3 md:mb-4">
              NPTEL - Cloud Computing
            </h3>
            <p className="text-gray-300 text-sm mb-4">Covered cloud architecture, services, deployment models and tools.</p>
            <a href="https://drive.google.com/file/d/1F7KtJgsKMTxplkR4jHhsLD8PdHlhz5zA/view?usp=sharing" target="_blank"
               className="inline-block mt-auto bg-orange-600/20 text-orange-300 border border-orange-600/30 px-4 py-2 rounded-full text-xs md:text-sm hover:bg-orange-600/30 transition-all duration-300">
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
