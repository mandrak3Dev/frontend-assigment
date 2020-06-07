import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const NavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  color: white;
  margin: 0 1.5rem;
  & span {
    margin: 0 1rem;
  }
  & i:first-child{
    font-size: 2.5rem;
  }
`;

const MainNav = () => {
  return (
    <NavItem>
      <Link href="/">
        <div css={css`
          display: flex;
        `}>
          <i class="fas fa-home"></i>
          <span>Inicio</span>
        </div>
      </Link>
      <i class="fas fa-chevron-down"></i>
    </NavItem>
  );
};

export default MainNav;
