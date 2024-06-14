import React from 'react'
import Title from '@/components/commons/Title'
import { useScroll } from '@/components/commons/useScroll'
import { motion } from 'framer-motion'
import '@/styles/sections/Why.scss'
import { topContainerAnimation, videoAnimation, reasonsAnimation } from '@/lib/Animations'
import { useTranslation } from 'react-i18next'
import { ClassValue } from 'clsx'
import { cn } from '@/lib/utils'

function ProductCard({
  title,
  subtitle,
  reasons,
  picture,
  className,
}: {
  title: string
  subtitle: string
  reasons: string[]
  picture: string
  className?: ClassValue
}) {
  const [element, controls] = useScroll()

  return (
    <div className={cn('why-container', className)} id="services" ref={element}>
      <div className="container">
        <motion.div
          className="top"
          variants={topContainerAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title={title} color="pink" lineCenter={true} />
          <div className="subTitle">
            <p>{subtitle}</p>
          </div>
        </motion.div>
        <div className="content">
          <motion.div variants={videoAnimation} animate={controls} transition={{ type: 'tween', duration: 0.5 }}>
            <div className="flex items-center justify-center w-full overflow-hidden h-72 rounded-2xl">
              <img src={picture} className="w-full h-full" />
            </div>
          </motion.div>
          <motion.div
            className="reasons"
            variants={reasonsAnimation}
            animate={controls}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            <ul className="ps-10">
              {reasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function Product() {
  const { t } = useTranslation()
  return (
    <>
      <ProductCard
        title={t('original-1-title')}
        subtitle={t('original-1-description')}
        reasons={[t('original-1-point-1'), t('original-1-point-2'), t('original-1-point-3'), t('original-1-point-4')]}
        picture="/originals/original-1.png"
      />
    </>
  )
}

export default Product
