import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Layout from "../../components/layout/Layout";
import AsideCard from "../../components/layout/AsideCard";

const Container = styled.div`
  padding: 2rem;
  display: flex;
`;

const MainWrapper = styled.div`
  flex: 0 1 80%;
`;

const NewWrapper = styled.div`
  background-color: white;
`;

const MainPicture = styled.div`
  background-color: blue;
  height: 400px;
`;

const AsideWrapper = styled.aside`
  margin-left: 2rem;
  & span {
    color: var(--secondary-blue);
  }
`;
const CardWrapper = styled.aside`
  padding: 2rem 0;
  background-color: white;
`;

const New = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return (
    <Layout>
      <Container>
        <MainWrapper>
          <div>
            <MainPicture />
            <h1>Noticia {id}</h1>
          </div>
        </MainWrapper>
        <AsideWrapper>
          <span>Noticias relacionadas</span>
          <CardWrapper>
            <AsideCard />
          </CardWrapper>
        </AsideWrapper>
      </Container>
    </Layout>
  );
};

export default New;
