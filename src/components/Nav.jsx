import React from "react";
import { NavWrapper, NavTitle, NavLink, NavButton } from "../NavStyles";

const Nav = () => {
  return (
    <NavWrapper>
      <NavTitle>LandingPage</NavTitle>
      <div className="links">
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contacts</NavLink>
        <NavLink href="#">Faq</NavLink>
      </div>
      <NavButton>Get Started</NavButton>
    </NavWrapper>
  );
};

export default Nav;
