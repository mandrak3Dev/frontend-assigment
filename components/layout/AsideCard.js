import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Badge from "../ui/Badge";

const Card = styled.div`
  padding: 2rem;
  border-bottom: 2px solid var(--gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  & img {
    width: 220px;
    border-radius: 10px;
  }
`;

const IconWrappers = styled.div`
  display: flex;
  align-items: center;
  & span {
    font-size: 1.5rem;
    opacity: 0.5;
  }
  & i {
    font-size: 2.5rem;
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
          width: 300px;
          margin-left: 2rem;
          & p {
            opacity: 0.5;
          }
        `}
      >
        <div>
          <strong>Lorem Ipsum</strong>
          <p>Por: Ipsum Lorem</p>
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
            <i class="far fa-star"></i>
            <span>50</span>
          </IconWrappers>
          <IconWrappers>
            <i class="far fa-comment-alt"></i>
            <span>40</span>
          </IconWrappers>
          <IconWrappers>
            <i class="far fa-eye"></i>
            <span>75</span>
          </IconWrappers>
        </div>
      </div>
    </Card>
  );
};

export default AsideCard;
