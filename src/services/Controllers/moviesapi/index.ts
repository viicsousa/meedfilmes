import { AxiosResponse } from "axios";
import {api} from '../../context';

import { GetMoviesResponse } from "@/services/Interface/getMovies";

class GetMovies {
  public async GetMoviesServices(): Promise<AxiosResponse<Array<GetMoviesResponse>>> {
    return api.get('')
    .then((Response) => {
      return Response;
    })
    .catch((error) => {
      if (error.response?.status===(400 ||  404)) {
        return "Houve um erro na solicitação, por favor contate o suporte";
      }
      else if (error.response?.status === 401){
        return "Você não possui autorização necessária para realizar essa ação";
      }
      else if (error.response?.status >= 500) {
        return "Erro interno, por favor contate o suporte";
      }
      else if (error.message ==="Network Error") {
        return "Sem conexão de internet";
      }
      else if (error.message ==="Error: timeout of 10000ms exceeded") {
        return "Tempo de resposta do servidor excedido";
      }
      return error;
    })
    
}
  //*==========POST=========*\\

  //;==========PUT==========;\\

  //!=========DELETE========!\\

}

export default new GetMovies();