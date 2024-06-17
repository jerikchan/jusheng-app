import React from 'react'
import { AnimationControls, motion } from 'framer-motion'
import '@/styles/components/Card.scss'
import { cardAnimation } from '@/lib/Animations'
import { cn } from '@/lib/utils'
import { ClassValue } from 'clsx'

function Card({
  logo,
  title,
  animateCustom,
  className,
}: {
  logo: React.ReactNode
  title: string
  animateCustom: AnimationControls
  className?: ClassValue
}) {
  return (
    <motion.div
      className={cn(
        'w-[15rem] h-[8rem] box-content bg-white px-4 py-6 rounded-[0.4rem] shadow-[rgba(0,_0,_0,_0.15)_0px_5px_15px_0px] flex flex-col justify-between [transition:0.4s_ease-in-out] hover:shadow-[rgba(243, 42, 143, 0.1843137255) 5px 5px, rgba(243, 42, 143, 0.1176470588) 10px 10px, rgba(243, 42, 143, 0.0078431373) 15px 15px]',
        className,
      )}
      variants={cardAnimation}
      initial="hidden"
      animate={animateCustom || 'show'}
      transition={{ stiffness: 5000 }}
    >
      <div className="bg-[#f32a8f33] h-16 w-16 flex items-center justify-center rounded-md text-[#f32a8f] text-[2rem]">
        {logo}
      </div>
      <div className="mb-4 text-2xl text-[#121258] card-title">
        <h4>{title}</h4>
      </div>
    </motion.div>
  )
}

export default Card
