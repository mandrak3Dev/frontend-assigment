import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Card = styled.div`
  padding: 0 2rem;
  border-bottom: 2px solid var(--gray);
`;

const AsideCard = () => {
  return (
    <Card>
      <div>
        <h3>Lorem Ipsum</h3>
        <p>Por: Ipsum Lorem</p>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        `}
      >
        <div>
          <i class="far fa-star"></i> 50
        </div>
        <div>
          <i class="far fa-comment-alt"> 40</i>
        </div>
        <div>
          <i class="far fa-eye"></i> 75
        </div>
      </div>
    </Card>
  );
};

export default AsideCard;
