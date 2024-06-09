import React from "react";
import { motion } from "framer-motion";
import { cardAnimation } from "@/lib/Animations";
import { cn } from "@/lib/utils"
import { type ClassValue } from 'clsx'

function ImageCard({ url, animateCustom, className }: { url: string; animateCustom: string; className: ClassValue }) {
  return (
    <motion.div
      className={cn("w-[15rem] h-[8rem] box-content bg-white bg-opacity-30 rounded-[0.4rem] shadow-[rgba(0,_0,_0,_0.15)_0px_5px_15px_0px] flex flex-col justify-between [transition:0.4s_ease-in-out] hover:shadow-[rgba(243,_42,_143,_0.1843137255)_5px_5px,_rgba(243,_42,_143,_0.1176470588)_10px_10px,_rgba(243,_42,_143,_0.0078431373)_15px_15px]", className)}
      variants={cardAnimation}
      initial="hidden"
      animate={animateCustom || "show"}
      transition={{ stiffness: 5000 }}
    >
      <img src={url} className="object-contain w-full h-full" />
    </motion.div>
  );
}

export default ImageCard;
