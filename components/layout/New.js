import React, { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";
import styled from "@emotion/styled";
import NewsButtonsWrapper from "../ui/NewsButtonsWrapper";
import Badge from "../ui/Badge";

const ContentWrapper = styled.div`
  padding: 2rem;
`;

const MainPicture = styled.div`
  background: linear-gradient(to top right, var(--primary-blue), #0ec9b1);
  height: 400px;
  position: relative;
`;

const NewsInfo = styled.div`
  margin: 1rem 0 3rem 0;
  & > div {
    display: flex;
    align-items: center;
    & h3 {
      margin-right: 6rem;
    }
    & button {
      border-radius: 2rem 0;
      border: unset;
      background-color: var(--green);
      color: white;
      padding: 0 2.3rem;
      height: 30px;
      font-size: 1.2rem;
      font-weight: bold;
    }
    & img {
      width: 60px;
      height: 60px;
    }
    & div {
      & h4 {
        line-height: 0;
      }
      & p {
        font-size: 1.5rem;
        line-height: 0.2;
        opacity: 0.5;
        & span {
          margin-right: 2rem;
          white-space: nowrap;
          & :nth-child(2) {
            padding: 0 2rem;
            border-right: 1px solid black;
            border-left: 1px solid black;
          }
        }
      }
    }
    & > span {
      background-color: #f4f8fc;
      padding: 1rem 1.5rem;
      border-radius: 4px;
      color: var(--primary-blue);
      & :nth-child(2) {
        margin: 0 2rem;
      }
    }
    & :last-child {
      margin-top: 2rem;
    }
  }
`;

const Content = styled.div`
  text-align: justify;
  & p {
    line-height: 1.8;
  }
`;

const News = () => {
  const { news } = useContext(NewsContext);
  return (
    <>
      <MainPicture>
        <Badge props={"Noticia"} />
      </MainPicture>
      <ContentWrapper>
        <NewsInfo>
          <div>
            <h3>Lorem ipsum dolor: Volutpat consequat</h3>
            <button>Guardar</button>
          </div>
          <div>
            <img src="/static/img/logo news.png" alt="" />
            <div>
              <h4>Noticias DocRed</h4>
              <p>
                <span>Hace 12 h</span>
                <span>Publicado: 17/01/18</span>
                <span>Lectura: 3 min.</span>
              </p>
            </div>
          </div>
          <div>
            <span>Medicina interna</span>
            <span>Pediatría</span>
            <span>Obstetricia</span>
          </div>
        </NewsInfo>
        <Content dangerouslySetInnerHTML={{ __html: news.content }}></Content>;
        <NewsButtonsWrapper />
      </ContentWrapper>
    </>
  );
};

export default News;
