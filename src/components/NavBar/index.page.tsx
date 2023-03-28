import { useRouter } from "next/router";
import Lottie from "react-lottie";

import { Container, Logo, Title, NavHome, Subtitle } from "./styles";

import Films from "../../assets/animations/filmes.json";

export default function NavBar () {
  const defaultOptionsFilmsAnimation = {
    loop: false,
    autoplay: true, 
    animationData: Films,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };

  const router = useRouter();
  return (
    <Container>
      <Logo>
        <Lottie options={defaultOptionsFilmsAnimation} height={70} width={180}/>
        <Title>MEED FILMES</Title>
        </Logo>
        <NavHome>
          <Subtitle onClick={() => (router.push("/homePage"))}>HOME</Subtitle>
          <Subtitle>SEARCH</Subtitle>
        </NavHome>
    </Container>
  )
}