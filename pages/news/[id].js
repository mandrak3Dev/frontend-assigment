import React from "react";
import { useRouter } from "next/router";
import NewsProvider from "../../context/NewsContext";
import styled from "@emotion/styled";
import Layout from "../../components/layout/Layout";
import AsideCard from "../../components/layout/AsideCard";
import NewsButtonsWrapper from "../../components/ui/NewsButtonsWrapper";
import Badge from "../../components/ui/Badge";
import News from '../../components/layout/New';

const Container = styled.div`
  padding: 2rem;
  display: flex;
`;

const MainWrapper = styled.div`
  flex: 0 1 80%;
`;

const NewWrapper = styled.div`
  background-color: white;
  padding: 2.5rem;
  border-radius: 10px;
`;

const MainPicture = styled.div`
  background-color: blue;
  height: 400px;
  position: relative;
`;

const AsideWrapper = styled.aside`
  margin-left: 2rem;
  & b {
    color: var(--secondary-blue);
  }
`;
const CardWrapper = styled.aside`
  margin-top: 1.5rem;
  background-color: white;
  border-radius: 10px;
`;

const RelatedNews = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  & > div::after {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    right: 0;
    background-color: var(--secondary-blue);
  }
`;

const New = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  
  return (
    <Layout>
      <Container>
        <NewsProvider>
          <MainWrapper>
            <NewWrapper>
              <MainPicture>
                <Badge props={"Noticia"} />
              </MainPicture>
              <h1>Noticia {id}</h1>
              <News />
              <NewsButtonsWrapper />
            </NewWrapper>
          </MainWrapper>
          <AsideWrapper>
            <RelatedNews>
              <b>Noticias relacionadas</b>
              <div></div>
            </RelatedNews>
            <CardWrapper>
              <AsideCard />
              <AsideCard />
              <AsideCard />
              <AsideCard />
            </CardWrapper>
          </AsideWrapper>
        </NewsProvider>
      </Container>
    </Layout>
  );
};

export default New;
