import { AxiosResponse } from "axios";
import {api} from '../../context';

import { GetMoviesResponse } from "@/services/Interface/getMovies";

class GetMovies {
   //?==========GET==========?\\

  public async GetMoviesServices(): Promise<AxiosResponse<Array<GetMoviesResponse>>> {
    return api.get('/movie/popular?api_key=74af26e894ff402944b1a7c7bd816119')
    .then((Response) => {
      return Response;
    })
}
  //*==========POST=========*\\

  //;==========PUT==========;\\

  //!=========DELETE========!\\

}

export default new GetMovies();