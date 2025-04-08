import React, { useEffect, useState } from 'react'

const CursorBg = () => {

  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursor({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  const circles = [
    { size: 100, opacity: 0.4 },
    { size: 200, opacity: 0.3 },
    { size: 300, opacity: 0.2 },
    { size: 400, opacity: 0.1 },
    { size: 500, opacity: 0.09 },
    { size: 600, opacity: 0.08 },
    { size: 700, opacity: 0.07 },
    { size: 800, opacity: 0.06 },
    { size: 900, opacity: 0.05 },
  ];

  return (
    <>
      {circles.map((circle, index) => (
        <div
          key={index}
          className="rounded-full absolute -z-20 pointer-events-none bg-cyan-300 bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 backdrop-blur-md"
          style={{
            left: cursor.x,
            top: cursor.y,
            width: circle.size,
            height: circle.size,
            opacity: circle.opacity,
            transform: 'translate(-50%, -50%)', // Center the circle on the cursor
          }}
        />
      ))}
    </>
  )
}

export default CursorBg