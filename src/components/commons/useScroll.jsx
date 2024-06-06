import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export const useScroll = (thresh = 0.4) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: thresh });
  const [isHygrade, setIsHygrade] = useState(false)
  useEffect(() => {
    setIsHygrade(true)
  }, [])

  if (isHygrade) {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }

  return [element, controls];
};
