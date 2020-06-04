import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const NavItem = styled.div`
  color: white;
`;

const MainNav = () => {
  return (
    <NavItem>
      <Link href="/">
        <span>
          <i class="fas fa-home"></i>
          <span>Inicio</span>
        </span>
      </Link>
      <i class="fas fa-chevron-down"></i>
    </NavItem>
  );
};

export default MainNav;
