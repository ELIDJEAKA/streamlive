import httpClient from "./httpClient";
import config from './config'
import { MovieInterface } from "../Interfaces/Movies.interface";
import { CreditInterface } from "../Interfaces/Credits.interface";

export const params = (search:string|null) => {
    return {
      params:{
        api_key:config.apiKey,
        query: search
      }
    }
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
  getTvList: (type: string, search: string | null) => {
    const url = "/" + type + "/tv";
    return httpClient.get(url, params(search));
  },
  // getVideos: (cate: string, id: string) => {
  //   const url = category[cate] + "/" + id + "/videos";
  //   return httpClient.get(url, { params: {} });
  // },
  // search: (cate: string, params: any) => {
  //   const url = "search/" + category[cate];
  //   return httpClient.get(url, params);
  // },
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
