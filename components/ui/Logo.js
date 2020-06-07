import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";

const Logo = () => {
  return (
    <Link
      href="/">
      <img src="/static/img/logo.png" alt="Logo DocRed" css={css`
        & :hover {
          cursor: pointer;
        }
      `}/>
    </Link>
  );
};

export default Logo;
