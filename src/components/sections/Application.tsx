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
    <div className="bg-[rgba(68,_114,_196,_0.4)]" id="testimonial" ref={element}>
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
        <div className="grid grid-cols-1 gap-12 mt-6 lg:grid-cols-3">
          <Testimonial
            content="The best on the net! Software development saved my business. I use
        Software development often. I am really satisfied with my Software
        Development."
            name="Trushit Vyas"
            designation="Co-Founder"
            variants={cardAnimation}
            animate={controls}
            picture="/images/塑料.jpg"
            text="塑料"
          />
          <Testimonial
            content="Mobile application developer is exactly what out business has been lacing. I have gotten at least 50 times the value from mobile apllication."
            name="Kishan H. Sheth"
            designation="Founder & CEO"
            variants={cardAnimation}
            animate={controls}
            picture="/images/陶瓷2.jpg"
            text="陶瓷"
          />
          <Testimonial
            content="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment"
            name="Romit Gandhi"
            designation="Founder"
            variants={cardAnimation}
            animate={controls}
            picture="/images/涂料.jpg"
            text="涂料"
          />
          <Testimonial
            content="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment"
            name="Romit Gandhi"
            designation="Founder"
            variants={cardAnimation}
            animate={controls}
            picture="/images/橡胶.png"
            text="橡胶"
          />
          <Testimonial
            content="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment"
            name="Romit Gandhi"
            designation="Founder"
            variants={cardAnimation}
            animate={controls}
            picture="/images/医药2.png"
            text="医药"
          />
          <Testimonial
            content="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment"
            name="Romit Gandhi"
            designation="Founder"
            variants={cardAnimation}
            animate={controls}
            picture="/images/造纸.png"
            text="造纸"
          />
        </div>
      </div>
    </div>
  )
}
