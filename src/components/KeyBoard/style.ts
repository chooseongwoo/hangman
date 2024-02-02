// style.js

import styled from "styled-components";

export const Layout = styled.div`
  width: 35vw;
  height: 35vh;
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(auto-fill, minmax(5vw, 1fr));
`;

export const Key = styled.button`
  width: 100%;
  background-color: ${(props) => (props.disabled ? "#d9d9d9" : "white")};
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.disabled ? "" : "skyblue")};
  }
`;
