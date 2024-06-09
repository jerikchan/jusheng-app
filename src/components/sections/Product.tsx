import React from "react";
import Title from "@/components/commons/Title";
import { useScroll } from "@/components/commons/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import "@/styles/sections/Why.scss";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "@/lib/Animations";
import { useTranslation } from "react-i18next";

function Why() {
  const [element, controls] = useScroll();
  const { t } = useTranslation();

  return (
    <div className="why-container" id="services" ref={element}>
      <div className="container">
        <motion.div
          className="top"
          variants={topContainerAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title={t('why-title')} color="pink" lineCenter={true} />
          <div className="subTitle">
            <p>
             {t('why-sub-title')}
            </p>
          </div>
        </motion.div>
        <div className="content">
          <motion.div
            variants={videoAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className="video">
              <GoPlay />
            </div>
          </motion.div>
          <motion.div
            className="reasons"
            variants={reasonsAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <ul>
              <li>{t('why-point-detail-1')}</li>
              <li>{t('why-point-detail-2')}</li>
              <li>{t('why-point-detail-3')}</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Why;
