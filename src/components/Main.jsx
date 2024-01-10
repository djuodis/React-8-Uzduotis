import React from "react";
import {
  MainContainer,
  MainTitle,
  MainSubtitle,
  MainButton,
} from "../MainStyles";
import { motion } from "framer-motion";

const Main = () => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <MainContainer>
      <motion.div variants={item} initial="hidden" animate="visible">
        <div className="title">
          <MainTitle>React Landing Page</MainTitle>
          <MainTitle>Website template</MainTitle>
        </div>
      </motion.div>

      <motion.div variants={item} initial="hidden" animate="visible">
        <div className="subtitle">
          <MainSubtitle>Made with React and styled components</MainSubtitle>
        </div>
      </motion.div>

      <motion.div variants={item} initial="hidden" animate="visible">
        <MainButton>Get Started</MainButton>
      </motion.div>
    </MainContainer>
  );
};

export default Main;
