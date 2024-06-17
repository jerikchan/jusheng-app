import React from 'react'
import About from '@/components/sections/About'
import Footer from '@/components/sections/Footer'
import Starter from '@/components/sections/Starter'
import ScrollToTop from '@/components/commons/ScrollToTop'
import { motion } from 'framer-motion'
import Navbar from '@/components/commons/Navbar'

function App() {
  return (
    <motion.div initial="hidden" animate="show" className="app">
      <ScrollToTop />
      <Navbar />
      {/* 首页 */}
      <Starter />
      {/* 公司简介 */}
      <About />

      <Footer />
    </motion.div>
  )
}

export default App
