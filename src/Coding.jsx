import { useEffect, useState } from "react";
import { Code, Zap, Brain, Award, BarChart3, Medal } from "lucide-react";
import { ExternalLink } from "lucide-react";
export default function Coding() {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 // const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  fetch("https://backend-v1-t5rs.onrender.com/leetcode/sathish3718") // <-- call your Node backend
    .then(async (res) => {
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "API returned an error");
      }
      return res.json();
    })
    .then((data) => {
      setLeetcodeData(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching LeetCode stats:", err.message);
      setLoading(false);
    });
  }, []);


  return (
    <section
      id="coding"
      className="py-16 md:py-20 px-4 md:px-6 bg-gray-900 relative z-20 animate-fade"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 gradient-text">
          Coding Profile
        </h2>


        <div>
        {loading ? (
          <div className="h-screen flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-red-600 border-r-transparent border-l-transparent animate-spin"></div>

            <p className="mt-4 text-center text-gray-400 text-lg">
              Loading LeetCode stats...
            </p>
          </div>

        ) : leetcodeData  ? (
          <>
            {/* Platform heading */}
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-yellow-400">
                Platform: <span className="text-white">LeetCode</span>
              </h3>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Total Solved */}
              <div className="bg-gray-800/80 border border-yellow-600 hover:border-yellow-500 transition-all duration-300 hover-lift rounded-lg p-6 flex flex-col items-center text-center">
                <Award className="text-yellow-400 w-10 h-10 mb-3" />
                <h3 className="text-xl font-semibold text-yellow-400 mb-1">
                  Total Solved
                </h3>
                <p className="text-3xl font-bold text-white">
                  {leetcodeData.totalSolved}
                </p>
              </div>

              {/* Easy */}
              <div className="bg-gray-800/80 border border-green-600 hover:border-green-500 transition-all duration-300 hover-lift rounded-lg p-6 flex flex-col items-center text-center">
                <Brain className="text-green-400 w-10 h-10 mb-3" />
                <h3 className="text-xl font-semibold text-green-400 mb-1">
                  Easy
                </h3>
                <p className="text-3xl font-bold text-white">
                  {leetcodeData.easySolved}
                </p>
              </div>

              {/* Medium */}
              <div className="bg-gray-800/80 border border-blue-600 hover:border-blue-500 transition-all duration-300 hover-lift rounded-lg p-6 flex flex-col items-center text-center">
                <Zap className="text-blue-400 w-10 h-10 mb-3" />
                <h3 className="text-xl font-semibold text-blue-400 mb-1">
                  Medium
                </h3>
                <p className="text-3xl font-bold text-white">
                  {leetcodeData.mediumSolved}
                </p>
              </div>

              {/* Hard */}
              <div className="bg-gray-800/80 border border-red-600 hover:border-red-500 transition-all duration-300 hover-lift rounded-lg p-6 flex flex-col items-center text-center">
                <Code className="text-red-400 w-10 h-10 mb-3" />
                <h3 className="text-xl font-semibold text-red-400 mb-1">
                  Hard
                </h3>
                <p className="text-3xl font-bold text-white">
                  {leetcodeData.hardSolved}
                </p>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {/* Ranking */}
              <div className="bg-gray-800/80 border border-purple-600 hover:border-purple-500 transition-all duration-300 hover-lift rounded-lg p-6 flex flex-col items-center text-center">
                <Medal className="text-purple-400 w-10 h-10 mb-3" />
                <h3 className="text-lg font-semibold text-purple-400 mb-1">
                  Global Ranking
                </h3>
                <p className="text-2xl font-bold text-white">
                  #{leetcodeData.ranking}
                </p>
              </div>

              {/* Acceptance Rate */}
              <div className="bg-gray-800/80 border border-teal-600 hover:border-teal-500 transition-all duration-300 hover-lift rounded-lg p-6 flex flex-col items-center text-center">
                <BarChart3 className="text-teal-400 w-10 h-10 mb-3" />
                <h3 className="text-lg font-semibold text-teal-400 mb-1">
                  Acceptance Rate
                </h3>
                <p className="text-2xl font-bold text-white">
                  {leetcodeData.acceptanceRate}%
                </p>
              </div>

              {/* Contribution Points */}
              <div className="bg-gray-800/80 border border-orange-600 hover:border-orange-500 transition-all duration-300 hover-lift rounded-lg p-6 flex flex-col items-center text-center">
                <Code className="text-orange-400 w-10 h-10 mb-3" />
                <h3 className="text-lg font-semibold text-orange-400 mb-1">
                  Contribution Points
                </h3>
                <p className="text-2xl font-bold text-white">
                  {leetcodeData.contributionPoints}
                </p>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-red-400">
            Failed to load LeetCode stats 
          </p>
        )}
      </div>

        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-yellow-400"> Platform: <span className="text-white">SkillRack</span></h3>  
        </div>

        <div className="mt-10 text-center">
          <a href="http://www.skillrack.com/profile/440650/d1728d82a5847917a924c258de612952b8cece8a" 
             className="text-xl text-white-400 font-semibold items-center"
             target="_blank"
             rel="noopener noreferrer"
             >
             Click here to view Profile
             <ExternalLink className="w-5 h-5 inline-block ml-2"/>
         </a>
        </div>
      </div>
    </section>
  );
}
