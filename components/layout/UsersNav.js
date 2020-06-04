import React from "react";
import styled from "@emotion/styled";

const NavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const UsersNav = () => {
  return (
    <NavItem>
      <i class="far fa-bell"></i>
      <div>
        <i class="fas fa-chevron-down"></i>
      </div>
      <i class="fas fa-cog"></i>
    </NavItem>
  );
};

export default UsersNav;
