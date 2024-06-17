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
  picture?: string
  className?: ClassValue
}) {
  const [element, controls] = useScroll()

  return (
    <div className={cn('why-container bg-[rgba(68,_114,_196,_0.4)]', className)} id="services" ref={element}>
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
          {picture && (
            <motion.div variants={videoAnimation} animate={controls} transition={{ type: 'tween', duration: 0.5 }}>
              <div className="flex items-center justify-center w-full overflow-hidden h-72 rounded-2xl">
                <img src={picture} className="object-cover w-full h-full" />
              </div>
            </motion.div>
          )}
          <motion.div
            className="reasons"
            variants={reasonsAnimation}
            animate={controls}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            <ul className="pt-10 ps-10">
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
        title={t('quality-title')}
        subtitle={t('quality-description')}
        reasons={[t('quality-point-1'), t('quality-point-2'), t('quality-point-3'), t('quality-point-4')]}
        picture="/images/亮度_对比度 1.png"
      />
    </>
  )
}

export default Product
