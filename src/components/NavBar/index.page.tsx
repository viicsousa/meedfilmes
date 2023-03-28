import { useRouter } from "next/router";


import { Container, Logo, Title, NavHome, Subtitle } from "./styles";

export default function NavBar () {


  const router = useRouter();
  return (
    <Container>
      <Logo>
        
        <Title>MEED FILMES</Title>
        </Logo>
        <NavHome>
          <Subtitle onClick={() => (router.push("/homePage"))}>HOME</Subtitle>
          <Subtitle>SEARCH</Subtitle>
        </NavHome>
    </Container>
  )
}