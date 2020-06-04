import React from "react";
import styled from "@emotion/styled";
import SearchBar from "../ui/SearchBar";
import MainNav from "./MainNav";
import UsersNav from "./UsersNav";
import Logo from "../ui/Logo";

const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-blue);
  padding: 1rem;
`;

const PublicNav = styled.components`
  display: flex;
  flex: 0 1 50%;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <Navbar>
      <PublicNav>
        <Logo />
        <SearchBar />
        <MainNav />
      </PublicNav>
      <UsersNav />
    </Navbar>
  );
};

export default Header;
