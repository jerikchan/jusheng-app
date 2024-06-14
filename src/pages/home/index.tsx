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

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Starter />
      <About />

      <Product />

      <Original />
      <Report />
      <Quality />

      <WhyUs />
      {/* <Why /> */}
      {/* <Testimonials /> */}
      {/* <Blogs /> */}
      <Footer />
    </motion.div>
  )
}

export default App
