export interface ImdbInterface {
  poster_path: string;
  backdrop_path: string;
  budget: number;
  genres: genreInterface[];
  id: string ;
  original_title: string;
  overview: number;
  popularity: number;
  release_date: string;
  revenue: number;
  tagline: string;
  title: string;
  vote_average: number;
}


export interface genreInterface {
  id: string;
  name: string;
}

export interface searchUrlInterface{
    genre?:string;
    language?:string;
    page?:number;
}