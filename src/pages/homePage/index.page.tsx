import { useState } from 'react';

import Image from 'next/image';

import { Structure, ContainerNow, Title, Cards, Card} from './styles';

import Arrowright from "../../assets/svg/arrow-right.svg";
import Arrowleft from "../../assets/svg/arrow-left.svg";

import NavBar from '../../components/NavBar/index.page';

export default function HomePage () {
  const [scrollX, setScrollX] = useState(0);
    const cliqueSetaEsquerda = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
            if(x > 0){
                x = 0;
            }
        setScrollX(x);
    }
    const cliqueSetaDireita = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let tamanhoCompletoLista = Card.results;
            if((window.innerWidth - tamanhoCompletoLista) > x) {
                x = (window.innerWidth - tamanhoCompletoLista) - 60;
            }
        setScrollX(x);
    }

  return (
    <Structure>
      <NavBar/>
      <ContainerNow>
        <Title></Title>
        <Cards>
          <Image src={Arrowleft} alt="" className='arrow' height={50} onClick={cliqueSetaEsquerda}/>
          <Card >
            
          </Card>
          
          <Image src={Arrowright} alt="" className='arrow' height={50} onClick={cliqueSetaDireita}/>
        </Cards>
      </ContainerNow>
    </Structure>
  )
}