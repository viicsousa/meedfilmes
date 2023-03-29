import styled from "styled-components";

export const Structure = styled.div`
  background-color: black;
  min-height: 110vh;
`;

export const ContainerNow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

export const Title= styled.h3`
  color: blue;
`;

export const Cards = styled.div`
  display: flex;
  background-color: white;
  height: 100%;
  width: 100%;
  gap: 1rem;
  align-items: center;
  position: relative;
  .arrow {
    cursor: pointer;
  }
`;

export const Card = styled.div`
  background-color: red;
  width:10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    color: blue;
    font-size: 20px;
  }
`;
