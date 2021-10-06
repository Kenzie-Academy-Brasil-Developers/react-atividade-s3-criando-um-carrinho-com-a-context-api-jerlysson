import styled from "styled-components";

export const Title = styled.h1`
  min-width: 200px;
  text-align: center;
  background-color: rgb(243, 116, 116);
  padding: 10px;
  box-sizing: border-box;
`;
export const ContainerMain = styled.main`
  min-width: 200px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 450px) {
    width: 60%;
  }
`;
