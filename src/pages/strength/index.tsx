import React from 'react'
import Footer from '@/components/sections/Footer'
import WhyUs from '@/components/sections/WhyUs'
import ScrollToTop from '@/components/commons/ScrollToTop'
import { motion } from 'framer-motion'
import Navbar from '@/components/commons/Navbar'

function App() {
  return (
    <motion.div initial="hidden" animate="show" className="app">
      <ScrollToTop />
      <Navbar />
      {/* 公司实力 */}
      <WhyUs />

      <Footer />
    </motion.div>
  )
}

export default App
