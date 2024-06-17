import React, { useState } from 'react'
import BrandName from './BrandName'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import '@/styles/components/Navbar.scss'
import { LanguageSelector } from '@/components/language-selector'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { t } = useTranslation()
  const [toggleNavbar, setToggleNavbar] = useState(false)
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar)
  }
  // const goContact = () => {
  //   document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  // }
  return (
    <div className={`navbar ${toggleNavbar === true ? 'active' : ''}`}>
      <div className="col">
        <BrandName />
        <div className="collapseble-button">
          {!toggleNavbar ? <GiHamburgerMenu onClick={navbarToggler} /> : <MdClose onClick={navbarToggler} />}
        </div>
      </div>
      <nav>
        <div className="links">
          <ul>
            <li>
              <Link to="/">{t('Home')}</Link>
            </li>
            <li>
              <Link to="/about">{t('About')}</Link>
            </li>
            <li>
              <Link to="/product">{t('Product')}</Link>
            </li>

            <li>
              <Link to="/application">{t('Application')}</Link>
            </li>

            <li>
              <Link to="/strength">{t('Strength')}</Link>
            </li>
            <li>
              <LanguageSelector />
            </li>
            <li>{/* <Button content={t('contact')} onClick={goContact} /> */}</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
