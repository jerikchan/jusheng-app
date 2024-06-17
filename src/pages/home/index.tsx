import React from 'react'
import About from '@/components/sections/About'
import Footer from '@/components/sections/Footer'
import Starter from '@/components/sections/Starter'
import WhyUs from '@/components/sections/WhyUs'
import Product from '@/components/sections/Product'
import Report from '@/components/sections/Report'
import Quality from '@/components/sections/Quality'
import Original from '@/components/sections/Original'
import ScrollToTop from '@/components/commons/ScrollToTop'
import { motion } from 'framer-motion'
import Application from '@/components/sections/Application'

function App() {
  return (
    <motion.div initial="hidden" animate="show" className="app">
      <ScrollToTop />
      {/* 首页 */}
      <Starter />
      {/* 公司简介 */}
      <About />

      {/* 矿产来源 */}
      <Original />
      {/* 品质保障 */}
      <Quality />
      {/* 检测报告 */}
      <Report />

      {/* 产品介绍 */}
      <Product />

      {/* 应用范围 */}
      <Application />

      {/* 公司实力 */}
      <WhyUs />
      {/* <Why /> */}
      {/* <Testimonials /> */}
      {/* <Blogs /> */}
      <Footer />
    </motion.div>
  )
}

export default App
