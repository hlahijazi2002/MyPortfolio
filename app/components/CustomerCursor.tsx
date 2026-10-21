"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomerCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 140, damping: 18, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 140, damping: 18, mass: 0.6 });

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement | null;
      setHovering(
        !!target?.closest("a, button, [role='button'], input, textarea, label"),
      );
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Ring (follows with a soft delay) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-9999"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
      >
        <motion.div
          animate={{ scale: pressed ? 0.8 : hovering ? 1.9 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`-ml-4.5 -mt-4.5 h-9 w-9 rounded-full border-2 border-neon-blue transition-colors duration-200 ${
            hovering ? "bg-neon-blue/10" : "bg-transparent"
          }`}
        />
      </motion.div>

      {/* Dot (exact position) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-9999"
        style={{ x, y, opacity: visible ? 1 : 0 }}
      >
        <div className="-ml-0.75 -mt-0.75 h-1.5 w-1.5 rounded-full bg-neon-blue" />
      </motion.div>
    </>
  );
};

export default CustomerCursor;
