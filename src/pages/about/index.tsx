import React from 'react'
import Footer from '@/components/sections/Footer'
import Report from '@/components/sections/Report'
import Quality from '@/components/sections/Quality'
import Original from '@/components/sections/Original'
import ScrollToTop from '@/components/commons/ScrollToTop'
import { motion } from 'framer-motion'
import Navbar from '@/components/commons/Navbar'

function App() {
  return (
    <motion.div initial="hidden" animate="show" className="app">
      <ScrollToTop />
      <Navbar />

      {/* 矿产来源 */}
      <Original />
      {/* 品质保障 */}
      <Quality />
      {/* 检测报告 */}
      <Report />

      <Footer />
    </motion.div>
  )
}

export default App
