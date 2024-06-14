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

function Footer() {
  const [element, controls] = useScroll()

  return (
    <div className="footer-container" ref={element}>
      <div className="container">
        <div className="main-container">
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
          <motion.div className="quick-links" variants={fromDown} animate={controls} transition={{ duration: 0.5 }}>
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
          <motion.div className="industries" variants={fromUp} animate={controls} transition={{ duration: 0.5 }}>
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
          </motion.div>
          <motion.div className="touch" variants={fromDown} animate={controls} transition={{ duration: 0.5 }}>
            <h3>联系我们</h3>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="detail">
                <div className="detail-name">邮箱</div>
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
                <div className="detail-name">电话</div>
                <div className="detail-content">
                  <a href="#">+86 17322711375 庄生</a>
                </div>
                <div className="detail-content">
                  <a href="#">+86 17322700796 王生</a>
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
                <div className="detail-name">地址</div>
                <div className="detail-content">
                  <a href="#"> 佛山市三水区西南街道洲边金祥二路3号09厂房</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="copyright">
          <div className="copy">
            <p>Copyright c 2021. All Rights Reserved.</p>
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
