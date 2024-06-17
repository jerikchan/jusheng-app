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
            <div className="flex items-center justify-center w-full h-72">
              <img src={picture} className="w-full h-full rounded-lg" />
            </div>
          </motion.div>
          <motion.div
            className="reasons"
            variants={reasonsAnimation}
            animate={controls}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            <ul className="pt-10 lg:pl-10">
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
        title={t('product-1-title')}
        subtitle={t('product-1-description')}
        reasons={[t('product-1-point-1'), t('product-1-point-2'), t('product-1-point-3'), t('product-1-point-4')]}
        picture="/images/黑滑石矿粒 拷贝.png"
        className="bg-[rgba(68,_114,_196,_0.4)]"
      />
      <ProductCard
        title={t('product-2-title')}
        subtitle={t('product-2-description')}
        reasons={[t('product-2-point-1'), t('product-2-point-2'), t('product-2-point-3'), t('product-2-point-4')]}
        picture="/images/黑滑石粉1.png"
      />
      <ProductCard
        title={t('product-3-title')}
        subtitle={t('product-3-description')}
        reasons={[t('product-3-point-1'), t('product-3-point-2'), t('product-3-point-3'), t('product-3-point-4')]}
        picture="/images/黑滑石母粒2.png"
        className="bg-[rgba(68,_114,_196,_0.4)]"
      />
      <ProductCard
        title={t('product-4-title')}
        subtitle={t('product-4-description')}
        reasons={[t('product-4-point-1'), t('product-4-point-2'), t('product-4-point-3'), t('product-4-point-4')]}
        picture="/products/product-4.png"
      />
    </>
  )
}

export default Product
