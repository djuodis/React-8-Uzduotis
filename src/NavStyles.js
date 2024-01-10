import styled from "styled-components";

export const NavWrapper = styled.nav`
  background: white;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

export const NavTitle = styled.h2`
  color: #81bae3;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: black;
  margin-right: 15px;
  font-size: 18px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: #3392d3;
  }
`;

export const NavButton = styled.button`
  margin-right: 25px;
  background: #2388ce;
  border: none;
  outline: none;
  padding: 5px 15px;
  border-radius: 4px;
  color: white;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #1a6398;
  }
`;
