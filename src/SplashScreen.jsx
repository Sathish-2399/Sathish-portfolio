import { useState, useEffect } from "react";

export default function SplashScreen() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 relative overflow-hidden">

      {/* Background subtle glow */}
      <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-bounce"></div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center gap-4 animate-fade-up">

        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 
                       animate-pulse drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Welcome ✨
        </h1>

        <p className="text-gray-300 text-lg md:text-xl animate-bounce">
          Portfolio Loading...
        </p>
      </div>
    </div>
  );
}
