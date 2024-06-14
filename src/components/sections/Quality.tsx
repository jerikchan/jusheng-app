import React from 'react'
import Title from '@/components/commons/Title'
import { useScroll } from '@/components/commons/useScroll'
import { motion } from 'framer-motion'
import '@/styles/sections/About.scss'
import { reveal } from '@/lib/Animations'
import { useTranslation } from 'react-i18next'
import Card from '@/components/commons/Card'
import { HiLightBulb } from 'react-icons/hi'
import { BsFillCalendarFill } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { SiGooglemessages } from 'react-icons/si'

function About() {
  const [element, controls] = useScroll()
  const { t } = useTranslation()

  return (
    <div className="about-container" id="quality" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          initial="hidden"
          animate={controls || 'show'}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title={t('quality-title')} color="blue" />
          {/* <p>{t('quality-description')}</p> */}
          <img src="/quality/quality-1.png" />
        </motion.div>
        <div className="grid grid-cols-2 gap-[1.5rem]" ref={element}>
          <Card title="Innovative Ideas" logo={<HiLightBulb />} animateCustom={controls} />
          <Card title="Planning" logo={<BsFillCalendarFill />} animateCustom={controls} />
          <Card title="Communication" logo={<BiSupport />} animateCustom={controls} />
          <Card title="24 * 7 Support" logo={<SiGooglemessages />} animateCustom={controls} />
        </div>
      </div>
    </div>
  )
}

export default About
