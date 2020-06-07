import React from "react";
import styled from "@emotion/styled";

const Badges = styled.div`
  padding: .4rem 2rem;
  text-transform: uppercase;
  color: white;
  background-color: var(--secondary-blue);
  border-radius: 0 10px 10px 0;
  font-size: 1.2rem;
  font-weight: bold;
  display: inline-block;
  position: absolute;
  top: 3rem;
`;

const Badge = ({props}) => {
  return (
    <div>
      <Badges>{props}</Badges>
    </div>
  );
};

export default Badge;
