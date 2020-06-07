import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { Global, css } from "@emotion/core";

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --primary-blue: #1a80c7;
            --secondary-blue: #2380c4;
            --green: #65b32e;
            --gray: #edebeb;
            --light-gray: #d4e6f3;
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-family: "Roboto", sans-serif;
            font-size: 1.6rem;
            line-height: 1.5;
          }
          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          p {
            line-height: 1;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
            & :hover {
              cursor: pointer;
            }
          }
          button {
            & :hover {
              cursor: pointer;
            }
          }
        `}
      />
      <Head>
        <title>doc red</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"
          integrity="sha256-46r060N2LrChLLb5zowXQ72/iKKNiw/lAmygmHExk/o="
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main
        css={css`
          background-color: var(--gray);
          padding: 4rem 0 4rem 2rem;
        `}
      >
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
