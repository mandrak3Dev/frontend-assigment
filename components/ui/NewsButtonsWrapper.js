import React from "react";
import styled from "@emotion/styled";

const ButtonsWrapper = styled.div`
  border: 2px solid var(--primary-blue);
  border-radius: 1.6rem 0 1.6rem 0;
  padding: 1.2rem;
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & i {
    margin-right: 1rem;
    color: var(--primary-blue);
    opacity: 0.5;
  }
  & span {
    opacity: 0.8;
  }
  & button {
    border: unset;
    background-color: transparent;
  }
`;

const NewsButtonWrapper = () => {
  return (
    <ButtonsWrapper>
      <button>
        <i className="far fa-star"></i>
        <span>Destacar</span>
      </button>
      <button>
        <i className="far fa-comment-alt"></i>
        <span>Comentar</span>
      </button>
      <button>
        <i className="fas fa-share"></i>
        <span>Compartir</span>
      </button>
    </ButtonsWrapper>
  );
};

export default NewsButtonWrapper;
