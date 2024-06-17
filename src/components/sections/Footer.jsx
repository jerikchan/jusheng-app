import React from 'react'
import BrandName from '@/components/commons/BrandName'
import { useScroll } from '@/components/commons/useScroll'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { motion } from 'framer-motion'
import '@/styles/sections/Footer.scss'
import { fromUp, fromDown } from '@/lib/Animations'
import { useTranslation } from 'react-i18next'

function Footer() {
  const [element, controls] = useScroll()
  const { t } = useTranslation()

  return (
    <div className="footer-container" ref={element} id="footer">
      <div className="container">
        <div className="justify-between !flex md:flex-row flex-col main-container">
          <motion.div className="news-letter" variants={fromUp} animate={controls} transition={{ duration: 0.5 }}>
            <BrandName isFooter={true} />
            {/* <p>Join our newsletter to get updated with our Offers & Discounts.</p>
            <div className="mail">
              <input type="email" placeholder="Please Enter Your Email" />
              <button>
                <AiOutlineSend />
              </button>
            </div> */}
          </motion.div>
          {/* <motion.div
            className="quick-links [visibility:hidden]"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="[visibility:hidden] industries"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Industires</h3>
            <ul>
              <li>
                <a href="#">Website Development</a>
              </li>
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">Website Design</a>
              </li>
              <li>
                <a href="#">Mobile App Design</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">IOS App Development</a>
              </li>
            </ul>
          </motion.div> */}
          <motion.div
            className="touch"
            id="contact"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>{t('contact')}</h3>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="detail">
                <div className="detail-name">{t('email')}</div>
                <div className="detail-content">
                  <a href="#">sanfengyuan2020@163.com</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="detail">
                <div className="detail-name">{t('phone')}</div>
                <div className="detail-content">
                  <a href="#">+86 17322711375 {t('phone-mr-zhuang')}</a>
                </div>
                <div className="detail-content">
                  <a href="#">+86 17322700796 {t('phone-mr-wang')}</a>
                </div>
                <div className="detail-content">
                  <a href="#">0757-83138614</a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="detail">
                <div className="detail-name">{t('address')}</div>
                <div className="detail-content">
                  <a href="#"> {t('address-detail')}</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="copyright">
          <div className="copy">
            <p>Copyright c 2024. All Rights Reserved.</p>
          </div>
          <div className="icons">
            <div className="icon">
              <a href="#">
                <FaFacebookF />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <AiFillInstagram />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                {' '}
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
