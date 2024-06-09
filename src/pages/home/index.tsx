import React from "react";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Starter from "@/components/sections/Starter";
import Why from "@/components/sections/Why";
import Blogs from "@/components/sections/Blogs";
import WhyUs from "@/components/sections/WhyUs";
import ScrollToTop from "@/components/commons/ScrollToTop";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Starter />
      <About />
      <WhyUs />

      <Why />
      <Testimonials />
      {/* <Blogs /> */}
      <Footer />
    </motion.div>
  );
}

export default App;
