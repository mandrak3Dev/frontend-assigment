import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <img src="/static/img/logo.png" alt="" />
    </Link>
  );
};

export default Logo;