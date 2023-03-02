import styled from "styled-components";

export const Container = styled.div`
  background-color: #86BFC2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 22px;
  margin: 0;
  
`;

export const NavHome = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
`;

export const Subtitle = styled.div`
  cursor: pointer;
  font-weight: 600;

  :hover {
    opacity: 0.7;
  }
`;