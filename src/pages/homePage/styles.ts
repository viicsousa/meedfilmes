import styled from "styled-components";

export const Structure = styled.div``;

export const ContainerNow = styled.div`
  background-color: black;
  padding: 1rem;
`;

export const Title= styled.h3``;

export const Cards = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
  .arrow {
    cursor: pointer;
  }
`;

export const Card = styled.div`
  background-color: red;
  width: 40rem;
  height: 10rem;
`;
