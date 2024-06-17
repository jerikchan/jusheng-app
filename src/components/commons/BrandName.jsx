import React from 'react'
import '@/styles/components/BrandName.scss'
import { useTranslation } from 'react-i18next'

function BrandName({ isFooter = false }) {
  const { t } = useTranslation()
  return (
    <div className={`brand ${isFooter === true ? 'footer' : ''}`}>
      {/* <span>{t('brand')}</span> */}
      <img src="/logo-h.png" className="w-[200px]" />
    </div>
  )
}

export default BrandName
