import React from "react";
import Navbar from "@/components/commons/Navbar";
import Button from "@/components/commons/Button";
import { useScroll } from "@/components/commons/useScroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import WorkImage from "@/assets/work.svg";
import "@/styles/sections/Starter.scss";
import { headerAnimation, imageAnimation } from "@/lib/Animations";
import { useTranslation } from "react-i18next";

export default function Starter() {
  const [element, controls] = useScroll();
  const { t } = useTranslation();
  return (
    <div className="main-container" ref={element}>
      <Navbar />
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <h1>
            {t('starter-title')}
          </h1>
          <p>
            {t('starter-description')}
          </p>
          <div className="button-container">
            <Button content="Watch Video" icon={<GoPlay />} />
            <Button
              color="pink"
              content="Request Quote"
              icon={<HiOutlineArrowNarrowRight />}
            />
          </div>
        </motion.div>
        <motion.div
          className="image"
          variants={imageAnimation}
          animate={controls}
          transition={{ type: "tween" }}
        >
          {/* <img src={WorkImage} alt="Work Image" /> */}
          <WorkImage />
        </motion.div>
      </div>
    </div>
  );
}
