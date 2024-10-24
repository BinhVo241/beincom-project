"use client";
import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    // x: -50,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
  },
  exit: {
    x: 50,
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  duration: 0.3,
};

export const MountTransition: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => (
  <motion.div
    style={props.style}
    initial="initial"
    animate="visible"
    exit="exit"
    variants={pageVariants}
    transition={pageTransition}
    className={props.className}
    id={props.id}
  >
    {props.children}
  </motion.div>
);

export default MountTransition;
