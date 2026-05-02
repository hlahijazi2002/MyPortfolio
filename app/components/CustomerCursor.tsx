"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomerCursor = () => {
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isVisible, cursorX, cursorY]);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;
  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-blue pointer-events-none z-999 flex items-center justify-center mix-blend-difference"
      style={{ translateX: cursorXSpring, translateY: cursorYSpring }}
    >
      <div className="w-1 h-1 bg-neon-blue rounded-full" />
    </motion.div>
  );
};

export default CustomerCursor;
