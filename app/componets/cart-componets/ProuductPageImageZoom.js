"use client";
import React, { useRef, useState } from "react";

const ProuductPageImageZoom = ({ src, alt = "Product Image" }) => {
  const [zoom, setZoom] = useState({ x: 0, y: 0, visible: false });
  const [isTouching, setIsTouching] = useState(false); // To track touch state
  const containerRef = useRef(null);

  // Mouse move event handler for desktop
  const handleMouseMove = (e) => {
    if (!isTouching) {
      const container = containerRef.current;
      if (!container) return;

      const { left, top, width, height } = container.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      setZoom({ x, y, visible: true });
    }
  };

  // Mouse leave event handler for desktop
  const handleMouseLeave = () => {
    setZoom({ ...zoom, visible: false });
  };

  // Touch start event handler for mobile
  const handleTouchStart = (e) => {
    setIsTouching(true);
    e.preventDefault(); // Prevent scroll on touch start
    handleTouchMove(e); // Trigger touch move immediately to track zoom
  };

  // Touch move event handler for mobile
  const handleTouchMove = (e) => {
    if (isTouching) {
      const container = containerRef.current;
      if (!container) return;

      const { left, top, width, height } = container.getBoundingClientRect();
      const x = ((e.touches[0].clientX - left) / width) * 100;
      const y = ((e.touches[0].clientY - top) / height) * 100;

      setZoom({ x, y, visible: true });
    }
  };

  // Touch end event handler for mobile
  const handleTouchEnd = (e) => {
    setIsTouching(false);
    e.preventDefault(); // Prevent scroll on touch end
    setZoom({ ...zoom, visible: false });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-full overflow-hidden border border-gray-300"
    >
      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        draggable="false"
        style={{
          transform: zoom.visible ? `scale(2)` : "none", // Scale the image when zoom is visible
          transformOrigin: `${zoom.x}% ${zoom.y}%`, // Position the zoom based on cursor/touch
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
};

export default ProuductPageImageZoom;
