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
    <div className="" id="testimonial" ref={element}>
      <div className="mx-[10%] py-20">
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={textAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title={t('application-title')} color="blue" lineCenter={true} />
          {/* <p>See what our clients are saying about us.</p> */}
        </motion.div>
        <div className="grid grid-cols-1 gap-16 mt-6 lg:grid-cols-3">
          <Testimonial
            variants={cardAnimation}
            animate={controls}
            picture="/images/塑料.jpg"
            text={t('application-1')}
          />
          <Testimonial
            variants={cardAnimation}
            animate={controls}
            picture="/images/陶瓷2.jpg"
            text={t('application-2')}
          />
          <Testimonial
            variants={cardAnimation}
            animate={controls}
            picture="/images/涂料.jpg"
            text={t('application-3')}
          />
          <Testimonial
            variants={cardAnimation}
            animate={controls}
            picture="/images/橡胶.png"
            text={t('application-4')}
          />
          <Testimonial
            variants={cardAnimation}
            animate={controls}
            picture="/images/医药2.png"
            text={t('application-5')}
          />
          <Testimonial
            variants={cardAnimation}
            animate={controls}
            picture="/images/造纸.png"
            text={t('application-6')}
          />
        </div>
      </div>
    </div>
  )
}
