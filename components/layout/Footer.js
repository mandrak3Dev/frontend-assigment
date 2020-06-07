import React from "react";
import Logo from "../ui/Logo";
import styled from "@emotion/styled";
import Link from "next/link";

const FooterWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-blue);
  padding: 1rem 2rem;
  color: white;
  & li :hover:not(:last-child) {
    cursor: pointer;
  }
  & li:last-child {
    opacity: 0.7;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <li>
        <Logo />
      </li>
      <Link href="/">
        <li>Preguntas frecuentes</li>
      </Link>
      <Link href="/">
        <li>Contáctanos</li>
      </Link>
      <Link href="/">
        <li>Información</li>
      </Link>
      <li>
        <span>DocRed &copy; 2019. Todos los derechos reservados</span>
      </li>
    </FooterWrapper>
  );
};

export default Footer;
