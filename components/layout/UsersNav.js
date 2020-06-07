import React from "react";
import styled from "@emotion/styled";

const NavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  flex-wrap: nowrap;
  position: relative;
  padding-left: 2rem;
  & > * {
    margin: 0 2rem;
    font-size: 2.5rem;
  }
  & :after {
    content: "";
    height: 130%;
    width: 2px;
    position: absolute;
    left: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
  & i:last-child:hover {
    cursor: pointer;
  }
`;

const Notifications = styled.div`
  position: relative;
  & span {
    position: absolute;
    left: 12px;
    border-radius: 100%;
    background-color: var(--green);
    color: white;
    font-size: 1rem;
    padding: 0.1rem 0.6rem;
    font-weight: bold;
  }
  & :hover {
    cursor: pointer;
  }
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  & img {
    border-radius: 50%;
    border: 2px solid white;
    width: 40px;
    margin-right: 0.5rem;
  }
  & i {
    font-size: 1.6rem;
  }
  & :hover {
    cursor: pointer;
  }
`;

const UsersNav = () => {
  return (
    <NavItem>
      <Notifications>
        <i className="far fa-bell"></i>
        <span>1</span>
      </Notifications>
      <Avatar>
        <img src="/static/img/avatar.JPG" alt="Imágen de perfil" />
        <i className="fas fa-chevron-down"></i>
      </Avatar>
      <i className="fas fa-cog"></i>
    </NavItem>
  );
};

export default UsersNav;
