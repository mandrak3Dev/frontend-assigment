import React from "react";
import { css } from "@emotion/core";

const SearchBar = ({ value, setValue, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Buscando: ${value}`);
    setValue('');
  };
  return (
    <div
      css={css`
        margin: 0 1.5rem;
      `}
    >
      <form id="search" onSubmit={handleSubmit}>
        <div
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              background-color: white;
              padding: 0.5rem 1rem;
              margin-right: 0.3rem;
              border-radius: 1.6rem 0 0 0;
              color: var(--green);
              font-size: 2.5rem;
            `}
          >
            <i class="fas fa-search"></i>
          </div>
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            onChange={handleChange}
            value={value}
            css={css`
              border-radius: 0 0 1.6rem 0;
              border: none;
              padding-left: 1rem;
              width: 350px;
            `}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
