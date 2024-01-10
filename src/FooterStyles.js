import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterWrapper = styled.div``;

export const Cards = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  padding: 30px 20px;
  width: 20%;
  background: white;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Subtitle = styled.p`
  color: #103e62;
`;

export const Title = styled.h1`
  text-align: start;
  margin: 10px 0;
`;

export const IconWrapper = styled(motion.a)`
  svg {
    font-size: 30px;
    color: #2388ce;
  }
`;
