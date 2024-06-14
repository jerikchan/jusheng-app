import React from 'react'
import { motion } from 'framer-motion'
import '@/styles/components/Testimonial.scss'

function Testimonial({ content, name, designation, variants, animate, picture }) {
  return (
    <motion.div
      className="h-64 rounded-sm bg-white hover:shadow-[rgba(99,_15,_179,_0.5)_5px_5px,_rgba(99,_15,_179,_0.3)_10px_10px,_rgba(99,_15,_179,_0.1)_15px_15px] shadow-[rgba(0,_0,_0,_0.15)_0px_5px_15px_0px] px-1 py-2 bg-opacity-60 flex flex-col justify-between [transition:0.4s_ease-in-out]"
      variants={variants}
      animate={animate}
    >
      <img src={picture} className="object-contain w-full h-full" />
    </motion.div>
  )
}

export default Testimonial
