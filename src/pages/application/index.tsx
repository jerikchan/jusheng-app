import React from 'react'
import Footer from '@/components/sections/Footer'
import ScrollToTop from '@/components/commons/ScrollToTop'
import { motion } from 'framer-motion'
import Application from '@/components/sections/Application'
import Navbar from '@/components/commons/Navbar'

function App() {
  return (
    <motion.div initial="hidden" animate="show" className="app">
      <ScrollToTop />
      <Navbar />
      {/* 应用范围 */}
      <Application />
      <Footer />
    </motion.div>
  )
}

export default App
