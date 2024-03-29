export interface Genres {
  id: number;
  name: string;
};

export interface ProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface GetMoviesResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Array<Genres>
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompanies>;
  production_countries: Array<ProductionCountries>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<SpokenLanguages>;
  statys: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}