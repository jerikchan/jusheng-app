import React from "react";
import { motion } from "framer-motion";
import "@/styles/components/Card.scss";
import { cardAnimation } from "@/lib/Animations";
function Card({ logo, title, animateCustom }: { logo: React.ReactNode; title: string; animateCustom: string }) {
  return (
    <motion.div
      className="card"
      variants={cardAnimation}
      initial="hidden"
      animate={animateCustom || "show"}
      transition={{ stiffness: 5000 }}
    >
      <div className="logo">{logo}</div>
      <div className="card-title">
        <h4>{title}</h4>
      </div>
    </motion.div>
  );
}

export default Card;
