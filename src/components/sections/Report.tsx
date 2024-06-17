import React from 'react'
import Title from '@/components/commons/Title'
import Testimonial from '@/components/commons/Testimonial'
import { useScroll } from '@/components/commons/useScroll'
import { motion } from 'framer-motion'
import '@/styles/sections/Testimonials.scss'
import { textAnimation, cardAnimation } from '@/lib/Animations'
import { useTranslation } from 'react-i18next'

export default function Testimonials() {
  const [element, controls] = useScroll()
  const { t } = useTranslation()

  return (
    <div className="bg-white" id="testimonial" ref={element}>
      <div className="mx-[10%] py-20">
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={textAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title={t('report-title')} color="blue" lineCenter={true} />
          {/* <p>See what our clients are saying about us.</p> */}
        </motion.div>
        <div className="grid grid-cols-1 gap-12 mt-6 lg:grid-cols-4">
          <Testimonial variants={cardAnimation} animate={controls} picture="/reports/report-1.png" />
          <Testimonial variants={cardAnimation} animate={controls} picture="/reports/report-2.png" />
          <Testimonial variants={cardAnimation} animate={controls} picture="/reports/report-3.png" />
          <Testimonial variants={cardAnimation} animate={controls} picture="/reports/report-4.png" />
        </div>
      </div>
    </div>
  )
}
