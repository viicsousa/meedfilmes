import { useState, useEffect } from 'react';

import {
  GetImgMoviesResponse,
  Logos,
  Backdrops,
  Posters
} from '../../services/Interface/ImgMovies';

import { Structure, ContainerNow, Title, Cards, Card} from './styles';


export default function HomePage () {
  const [getMovies, setMovies] = useState<Array<GetImgMoviesResponse>>([]);

  return (
    <Structure>
      <ContainerNow>
        <Title>FILMES ROMANCE</Title>
          <Cards>
          <div>KKdasda</div>
          <Card>
          <div id='span'></div>
          </Card>
        </Cards>
        {getMovies?.map((item: GetImgMoviesResponse, index: number) => (
          <Card>{item.id}</Card>
        ))}
        
      </ContainerNow>
    </Structure>
  )
}