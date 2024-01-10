import styled from "styled-components";

export const MainContainer = styled.main`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    margin: 20px 0;
    padding: 15px;
  }
`;

export const MainTitle = styled.h1`
  text-align: center;
  color: #103e62;
  font-size: 50px;
`;

export const MainSubtitle = styled.p`
  text-align: center;
  color: #103e62;
`;

export const MainButton = styled.button`
  background: #2388ce;
  border: none;
  outline: none;
  padding: 10px 30px;
  border-radius: 4px;
  color: white;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #1a6398;
  }
`;
