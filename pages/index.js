import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/core";

export default function Home() {
  return (
    <Layout>
      <div>
        <Link href="/news/[id]" as={`/news/1`}>
          <h1
            css={css`
              &:hover {
                cursor: pointer;
              }
            `}
          >
            Ir a Noticia 1
          </h1>
        </Link>
      </div>
    </Layout>
  );
}
