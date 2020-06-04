import React from "react";
import Logo from "../ui/Logo";
import styled from "@emotion/styled";

const FooterWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-blue);
  padding: 1rem;
  color: white;
  & li:last-child{
    opacity: 0.7;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
        <li>
          <Logo />
        </li>
        <li>Preguntas frecuentes</li>
        <li>Contáctanos</li>
        <li>Información</li>
        <li>
          <span>DocRed &copy; 2019. Todos los derechos reservados</span>
        </li>
    </FooterWrapper>
  );
};

export default Footer;
