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
        <div className="cards" ref={element}>
          <Card
            title={t('about-point-1')}
            logo={<HiLightBulb />}
            animateCustom={controls}
          />
          <Card
            title={t('about-point-2')}
            logo={<BsFillCalendarFill />}
            animateCustom={controls}
          />
          <Card
            title={t('about-point-3')}
            logo={<BiSupport />}
            animateCustom={controls}
          />
          <Card
            title={t('about-point-4')}
            logo={<SiGooglemessages />}
            animateCustom={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
