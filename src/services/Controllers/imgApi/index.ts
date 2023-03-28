import { AxiosResponse } from "axios";
import {api} from '../../context';

import { GetImgMoviesResponse} from '../../Interface/ImgMovies';

class GetMovies {
   //?==========GET==========?\\

  public async GetMoviesServices(): Promise<AxiosResponse<Array<GetImgMoviesResponse>>> {
    return api.get('/movie/550/images?api_key=74af26e894ff402944b1a7c7bd816119&language=en-US&include_image_language=en,null')
    .then((Response) => {
      return Response;
    })
}
  //*==========POST=========*\\

  //;==========PUT==========;\\

  //!=========DELETE========!\\

}

export default new GetMovies();