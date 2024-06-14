import React from 'react'
import Button from '@/components/commons/Button'
import Title from '@/components/commons/Title'
import { useScroll } from '@/components/commons/useScroll'
import { motion } from 'framer-motion'
import '@/styles/sections/About.scss'
import { reveal } from '@/lib/Animations'
import { useTranslation } from 'react-i18next'
import ImageCard from '@/components/commons/ImageCard'

function About() {
  const [element, controls] = useScroll()
  const { t } = useTranslation()

  return (
    <div className="about-container" id="about" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          initial="hidden"
          animate={controls || 'show'}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title={t('about-title')} color="blue" />
          <p>{t('about-description')}</p>
          <Button content={t('why-title')} />
        </motion.div>
        <div className="grid grid-cols-12 gap-[1.5rem]" ref={element}>
          <ImageCard className="w-auto h-auto col-span-6" url={'/abouts/about-1.png'} animateCustom={controls} />
          <ImageCard className="w-auto h-auto col-span-6" url={'/abouts/about-2.png'} animateCustom={controls} />
          <ImageCard className="w-auto h-auto col-span-4" url={'/abouts/about-3.png'} animateCustom={controls} />
          <ImageCard className="w-auto h-auto col-span-4" url={'/abouts/about-4.png'} animateCustom={controls} />
          <ImageCard className="w-auto h-auto col-span-4" url={'/abouts/about-5.png'} animateCustom={controls} />
        </div>
      </div>
    </div>
  )
}

export default About
