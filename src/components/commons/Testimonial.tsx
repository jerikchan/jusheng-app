import React from 'react'
import { motion } from 'framer-motion'
import '@/styles/components/Testimonial.scss'

function Testimonial({
  variants,
  animate,
  picture,
  text,
}: {
  variants: any,
  animate: any,
  picture: string,
  text?: string,
}) {
  return (
    <motion.div
      className="h-64 rounded-sm relative bg-white hover:shadow-[rgba(243,_42,_143,_0.1843137255)_5px_5px,_rgba(243,_42,_143,_0.1176470588)_10px_10px,_rgba(243,_42,_143,_0.0078431373)_15px_15px] shadow-[rgba(0,_0,_0,_0.15)_0px_5px_15px_0px] px-1 py-2 bg-opacity-60 flex flex-col justify-between [transition:0.4s_ease-in-out]"
      variants={variants}
      animate={animate}
    >
      <img src={picture} className="object-contain w-full h-full" />
      {text && <div className="absolute left-0 w-full text-center -bottom-8 text-[#5b595f]">{text}</div>}
    </motion.div>
  )
}

export default Testimonial
