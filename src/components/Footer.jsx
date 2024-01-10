import React from "react";
import {
  FooterWrapper,
  Cards,
  Card,
  Subtitle,
  Title,
  IconWrapper,
} from "../FooterStyles";

import { motion } from "framer-motion";
import { BsStack } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { FaMeta } from "react-icons/fa6";
import { FaFingerprint } from "react-icons/fa";

const options = [
  {
    icon: <BsStack />,
    title: "Option 1",
    subtitle:
      "Maiores reiciendis tenetur sunt eaque asperiores repellat molestiae atque natus accusamus inventore quidem ut possimus.",
  },
  {
    icon: <IoIosColorPalette />,
    title: "Option 2",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, deserunt! Veritatis voluptate ipsam omnis itaque.",
  },
  {
    icon: <FaMeta />,
    title: "Option 3",
    subtitle:
      "Maiores reiciendis tenetur sunt eaque asperiores repellat molestiae atque natus accusamus inventore quidem ut possimus.",
  },
  {
    icon: <FaFingerprint />,
    title: "Option 4",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, deserunt! Veritatis voluptate ipsam omnis itaque.",
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Footer = () => {
  return (
    <FooterWrapper>
      <Cards
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {options.map((option, index) => (
          <Card key={index} variants={item}>
            <IconWrapper as={motion.a} variants={item}>
              {option.icon}
            </IconWrapper>
            <Title>{option.title}</Title>
            <Subtitle>{option.subtitle}</Subtitle>
          </Card>
        ))}
      </Cards>
    </FooterWrapper>
  );
};

export default Footer;
