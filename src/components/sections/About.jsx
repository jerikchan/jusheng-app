import React from "react";
import Button from "@/components/commons/Button";
import Card from "@/components/commons/Card";
import Title from "@/components/commons/Title";
import { useScroll } from "@/components/commons/useScroll";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { motion } from "framer-motion";
import "@/styles/sections/About.scss";
import { reveal } from "@/lib/Animations";
import { useTranslation } from "react-i18next";
import ImageCard from "@/components/commons/ImageCard";

function About() {
  const [element, controls] = useScroll();
  const { t } = useTranslation();

  return (
    <div className="about-container" id="about" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          initial="hidden"
          animate={controls || "show"}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title={t('about-title')} color="blue" />
          <p>
            {t('about-description')}
          </p>
          <Button content={t('why-title')} />
        </motion.div>
        <div className="grid grid-cols-12 gap-[1.5rem]" ref={element}>
          <ImageCard
            className="col-span-6 w-auto h-auto"
            url={'/abouts/about-1.png'}
            animateCustom={controls}
          />
          <ImageCard
            className="col-span-6 w-auto h-auto"
            url={'/abouts/about-2.png'}
            animateCustom={controls}
          />
          <ImageCard
            className="col-span-4 w-auto h-auto"
            url={'/abouts/about-3.png'}
            animateCustom={controls}
          />
          <ImageCard
            className="col-span-4 w-auto h-auto"
            url={'/abouts/about-4.png'}
            animateCustom={controls}
          />
          <ImageCard
            className="col-span-4 w-auto h-auto"
            url={'/abouts/about-5.png'}
            animateCustom={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
