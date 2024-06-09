import React from "react";
import Button from "./Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import "@/styles/components/WhyUsCard.scss";

function WhyUsCard({ image, title, subTitle, variants, animate }) {
  return (
    <motion.div
      className="why-us-card-container"
      variants={variants}
      animate={animate}
    >
      <div className="image">
        <img src={image} alt="Why us" />
      </div>
      <div className="content">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="subTitle">
          <p>{subTitle}</p>
        </div>
        {/* <Button
          content="Read more"
          color="inverse"
          icon={<HiOutlineArrowNarrowRight />}
        /> */}
      </div>
    </motion.div>
  );
}

export default WhyUsCard;
