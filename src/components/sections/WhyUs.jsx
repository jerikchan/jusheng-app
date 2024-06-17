import React from 'react'
import WhyUsCard from '@/components/commons/WhyUsCard'
import Title from '@/components/commons/Title'
import { useScroll } from '@/components/commons/useScroll'
import { motion } from 'framer-motion'
import BlogImage1 from '@/assets/blogImage1.jpg'
import BlogImage2 from '@/assets/blogImage2.jpg'
import BlogImage3 from '@/assets/blogImage3.jpg'
import '@/styles/sections/WhyUs.scss'
import { textAnimation, fromUp } from '@/lib/Animations'
import { useTranslation } from 'react-i18next'

function WhyUs() {
  const [element, controls] = useScroll()
  const { t } = useTranslation()

  return (
    <div className="why-us-container" id="why-us" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title={t('why-us-title')} color="pink" lineCenter={true} />
          {/* <p>Insights and advice from our experts.</p> */}
        </motion.div>
        <div className="why-us">
          <WhyUsCard
            image={BlogImage1}
            title={t('why-us-point-title-1')}
            subTitle={t('why-us-point-detail-1')}
            variants={fromUp}
            animate={controls}
          />
          <WhyUsCard
            image={BlogImage2}
            title={t('why-us-point-title-2')}
            subTitle={t('why-us-point-detail-2')}
            variants={fromUp}
            animate={controls}
          />
          <WhyUsCard
            image={BlogImage3}
            title={t('why-us-point-title-3')}
            subTitle={t('why-us-point-detail-3')}
            variants={fromUp}
            animate={controls}
          />
        </div>
        {/* <div
          className="button-container"
          variants={textAnimation}
          animate={controls}
        >
          <Button content="View All" />
        </div> */}
      </div>
    </div>
  )
}

export default WhyUs
