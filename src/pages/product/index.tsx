import React from 'react'
import Footer from '@/components/sections/Footer'
import Product from '@/components/sections/Product'
import ScrollToTop from '@/components/commons/ScrollToTop'
import { motion } from 'framer-motion'
import Navbar from '@/components/commons/Navbar'

function App() {
  return (
    <motion.div initial="hidden" animate="show" className="app">
      <ScrollToTop />
      <Navbar />
      {/* 产品介绍 */}
      <Product />
      <Footer />
    </motion.div>
  )
}

export default App
