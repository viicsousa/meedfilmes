import { useState, useEffect } from 'react';

import {
  GetMoviesResponse,
  Genres,
  ProductionCompanies,
  ProductionCountries,
  SpokenLanguages,
} from '../../services/Interface/getMovies';

import { Structure, ContainerNow, Title, Cards, Card} from './styles';
import {api} from '../../services/context'

import NavBar from '../../components/NavBar/index.page';

import MovieCard from '../../components/Moviecard/MovieCard';
import * as Controllers from "../../services/Controllers";
import * as Toast from "../../function/ToastError";

export default function HomePage () {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "74af26e894ff402944b1a7c7bd816119",
          language: "pt-BR",
          page: 1,
        },
      });
      setFilmes(response.data.results);
    }
    loadFilmes();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }
  const [getMovies, setMovies] = useState<Array<GetMoviesResponse>>();
  const [getLoadingMovies, setLoadingMovies] = useState<
    "Loading" | "Success" | "Empty"
  >("Loading");

  async function handlegetMovies () {
    const Response = await Controllers.Moviesapi.GetMoviesServices();
    if(Math.floor(Response.status / 100) === 2 && Response.data.length > 0) {
      setMovies(Response.data);
      setLoadingMovies("Success");
    } else if (Math.floor(Response.status / 100)=== 2) {
      setLoadingMovies("Empty")
    } else {
      Toast.Error(Response.toString(), 2500)
      setLoadingMovies("Empty");
    }
  }

  useEffect(() => {
    handlegetMovies();
  },[])


  return (
    <Structure>
      <ContainerNow>
        <Title>FILMES ROMANCE</Title>
          <Cards>
          <div>KK</div>
          <Card>
          {getMovies?.map(
            (item: GetMoviesResponse, index: number) => (
              <div key={index}><div>{item.homepage}DEU CERTO</div>
              <div>DHUIAHDOIAJOIDJAIOPJDOADIIOIOIO</div></div>
            )
          )}
          </Card>
        </Cards>
        
      </ContainerNow>
    </Structure>
  )
}