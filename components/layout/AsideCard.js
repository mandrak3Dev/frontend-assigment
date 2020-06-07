import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Badge from "../ui/Badge";

const Card = styled.div`
  padding: 1.4rem;
  border-bottom: 2px solid var(--gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  & img {
    width: 150px;
    height: 130px;
    border-radius: 10px;
  }
  & :hover {
    cursor: pointer;
  }
`;

const IconWrappers = styled.div`
  display: flex;
  align-items: center;
  & span {
    font-size: 1.2rem;
    opacity: 0.5;
  }
  & i {
    font-size: 2rem;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  & :not(:last-child) i {
    color: var(--primary-blue);
  }
`;

const AsideCard = () => {
  return (
    <Card>
      <div
        css={css`
          position: relative;
        `}
      >
        <img src="/static/img/covid.jpg" alt="Imágen del covid" />
        <Badge props={"noticia"} />
      </div>
      <div
        css={css`
          width: 150px;
          margin-left: 2rem;
          & p {
            line-height: 0;
            opacity: 0.5;
            font-size: 1.4rem;
          }
        `}
      >
        <div>
          <strong>Lorem Ipsum dolor: Volutpat consequat</strong>
          <p>Por: Lorem Ipsum Dolor</p>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
            border-top: 2px solid var(--gray);
            padding-top: 1rem;
          `}
        >
          <IconWrappers>
            <i className="far fa-star"></i>
            <span>50</span>
          </IconWrappers>
          <IconWrappers>
            <i className="far fa-comment-alt"></i>
            <span>40</span>
          </IconWrappers>
          <IconWrappers>
            <i className="far fa-eye"></i>
            <span>75</span>
          </IconWrappers>
        </div>
      </div>
    </Card>
  );
};

export default AsideCard;
