"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none -z-1 w-[500px] h-[500px] rounded-full transition-transform duration-100 ease-out"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        background:
          "radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)",
      }}
    />
  );
}
