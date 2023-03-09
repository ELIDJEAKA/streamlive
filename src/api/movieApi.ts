import httpClient from "./httpClient";
import config from './config'
import { MovieInterface } from "../Interfaces/Movies.interface";
import { CreditInterface } from "../Interfaces/Credits.interface";
import { searchUrlInterface } from "../Interfaces/Imdb.interface";
import { SerieInterface } from "../Interfaces/Series.interface";

export const params = (search:string|null, genre?:string,language?:string,page?:string) => {
    return {
      params: {
        api_key: config.apiKey,
        query: search||null,
        genre: genre,
        language: language,
        page: page,
      },
    };
}

export const category: {} = {
  movie: "movie",
  tv: "tv",
};

export const movieType: {} = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType: {} = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const movieApi = {
  getMoviesList: (type: string, search: string | null):Promise<{results:MovieInterface[]}> => {
    const url = "/" + type + "/movie";
    return httpClient.get(url, params(search));
  },
  getTvList: (type: string, search: string | null) :Promise<{results:SerieInterface[]}>=> {
    const url = "/" + type + "/tv";
    return httpClient.get(url, params(search));
  },
  searchMovies: (search=null,genre:string,language:string,page:string):Promise<{results:MovieInterface[]}> => {
    const url = "/discover/movie";
    return httpClient.get(url, params(search,genre,language,page));
  },
  searchTv: (search=null,genre:string,language:string,page:string):Promise<{results:SerieInterface[]}> => {
    const url = "/discover/tv";
    return httpClient.get(url, params(search,genre,language,page));
  },
  detail: (type: string|null, id: number|null, search=null):Promise<MovieInterface> => {
    const url = type + "/" + id;
    return httpClient.get(url, params(search));
  },
  credits: (type: string|null, id: number|null,search=null):Promise<{cast:CreditInterface[]}> => {
    const url = type + "/" + id + "/credits";
    return httpClient.get(url, { params: {} });
  },
  similar: (type: string|null, id: number|null,search=null):Promise<MovieInterface> => {
    /* Concatenating the strings. */
    const url = type + "/" + id + "/similar";
    return httpClient.get(url, { params: {} });
  },
};

export default movieApi;
