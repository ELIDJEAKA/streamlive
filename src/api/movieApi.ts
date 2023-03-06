import httpClient from "./httpClient";
import config from './config'

export const key = {
    params:{
        api_key:config.apiKey
    }
}
export const category: any = {
  movie: "movie",
  tv: "tv",
};

export const movieType: any = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType: any = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const movieApi = {
  getMoviesList: (type: string,params:any) => {
    params = key
    const url = "movie/" + movieType[type];
    return httpClient.get(url, params);
  },
  getTvList: (type: string, params: any) => {
    const url = "tv/" + tvType[type];
    return httpClient.get(url, params);
  },
  getVideos: (cate: string, id: string) => {
    const url = category[cate] + "/" + id + "/videos";
    return httpClient.get(url, { params: {} });
  },
  search: (cate: string, params: any) => {
    const url = "search/" + category[cate];
    return httpClient.get(url, params);
  },
  detail: (cate: string, id: string, params: any) => {
    const url = category[cate] + "/" + id;
    return httpClient.get(url, params);
  },
  credits: (cate: string, id: string) => {
    const url = category[cate] + "/" + id + "/credits";
    return httpClient.get(url, { params: {} });
  },
  similar: (cate: string, id: string) => {
    const url = category[cate] + "/" + id + "/similar";
    return httpClient.get(url, { params: {} });
  },
};

export default movieApi;
