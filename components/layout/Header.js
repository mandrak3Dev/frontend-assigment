import React from "react";
import styled from "@emotion/styled";
import SearchBar from "../ui/SearchBar";
import MainNav from "./MainNav";
import UsersNav from "./UsersNav";
import Logo from "../ui/Logo";
import useHandleChange from '../../hooks/useHandleChange';

const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-blue);
  padding: 1rem 1rem 1rem 4rem;
`;

const PublicNav = styled.div`
  display: flex;
  flex: 0 1 60%;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const {value, setValue, handleChange} = useHandleChange('');

  return (
    <Navbar>
      <PublicNav>
        <Logo />
        <SearchBar value={value} setValue={setValue} handleChange={handleChange}/>
        <MainNav />
      </PublicNav>
      <UsersNav />
    </Navbar>
  );
};

export default Header;
