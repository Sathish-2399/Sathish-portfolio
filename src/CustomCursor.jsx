import { useEffect, useState } from "react";

export default function GradientCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [haloPos, setHaloPos] = useState({ x: 0, y: 0 });

  // Update main cursor
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Smooth halo follow
  useEffect(() => {
    const follow = () => {
      setHaloPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(follow);
    };
    follow();
  }, [position]);

  return (
    <>
      {/* Halo */}
      <div
        className="fixed w-24 h-24 rounded-full pointer-events-none z-[9998] blur-3xl bg-gradient-to-r from-red-500 via-red-600 to-red-700 opacity-50 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${haloPos.x}px`,
          top: `${haloPos.y}px`,
        }}
      ></div>

      {/* Main cursor */}
      <div
        className="fixed w-4 h-4 rounded-full bg-red-600 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
    </>
  );
}
