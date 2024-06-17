import React from 'react'
import Button from '@/components/commons/Button'
import { useScroll } from '@/components/commons/useScroll'
import { GoPlay } from 'react-icons/go'
import { motion } from 'framer-motion'
import WorkImage from '@/assets/work.svg'
import '@/styles/sections/Starter.scss'
import { headerAnimation, imageAnimation } from '@/lib/Animations'
import { useTranslation } from 'react-i18next'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'

export default function Starter() {
  const [element, controls] = useScroll()
  const { t } = useTranslation()
  const goContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="main-container" ref={element}>
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: 'tween' }}
        >
          <h1>{t('starter-title')}</h1>
          <p>{t('starter-description')}</p>
          <div className="button-container">
            <Dialog>
              <DialogTrigger asChild>
                <Button content={t('watch-video')} icon={<GoPlay />} />
              </DialogTrigger>
              <DialogContent className="justify-center p-0 bg-transparent border-0 rounded-none">
                <video controls>
                  <source src="https://static-jusheng.zeabur.app/media/6.14.m4v" />
                  {/* <source src="/static/media/6.14.m4v" /> */}
                  {/* <source src="https://www.bilibili.com/video/BV1E64y1W7sC/" /> */}
                </video>
              </DialogContent>
            </Dialog>
            <Button content={t('contact')} onClick={goContact} />
            {/* <Button color="pink" content="Request Quote" icon={<HiOutlineArrowNarrowRight />} /> */}
          </div>
        </motion.div>
        <motion.div className="image" variants={imageAnimation} animate={controls} transition={{ type: 'tween' }}>
          {/* <img src={WorkImage} alt="Work Image" /> */}
          <WorkImage />
        </motion.div>
      </div>
    </div>
  )
}
