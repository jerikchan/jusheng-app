import React from 'react'
import '@/styles/components/BrandName.scss'
import { useTranslation } from 'react-i18next'

function BrandName({ isFooter = false }) {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-[rgba(68,_114,_196,_0.8)] [letter-spacing:0.3rem] text-[2rem] text-base">{t('brand')}</div>
      <img src="/logo-h.png" className="w-[120px] md:w-[200px]" />
    </div>
  )
}

export default BrandName
