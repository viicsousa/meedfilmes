import { useState, useEffect } from 'react';

import {
  GetImgMoviesResponse,
  Logos,
  Backdrops,
  Posters
} from '../../services/Interface/ImgMovies';

import { Structure, ContainerNow, Title, Cards, Card} from './styles';
import {api} from '../../services/context'

import NavBar from '../../components/NavBar/index.page';

import MovieCard from '../../components/Moviecard/MovieCard';
import * as Controllers from "../../services/Controllers";
import * as Toast from "../../function/ToastError";

export default function HomePage () {
  const movie = 'span';
  const [getMovies, setMovies] = useState<Array<GetImgMoviesResponse>>([]);
  fetch(`https://api.themoviedb.org/3/movie/550?api_key=74af26e894ff402944b1a7c7bd816119`).then(resposta => {
    return resposta.json();
    
  }).then (corpo=>{
    console.log(corpo.poster_path);
  })

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
        
      </ContainerNow>
    </Structure>
  )
}