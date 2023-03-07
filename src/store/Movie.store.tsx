import { BehaviorSubject } from "rxjs";
import movieApi from "../api/movieApi";

let searchRes:{}[] = []
//const search = null
//const shown = search ? 'search' : 'discover'

export const searchResult$ = new BehaviorSubject(searchRes)

export const MoviesCall = async (shown:string, search:string|null)=>{
      const data:any = await movieApi.getMoviesList(shown,search)
      searchRes = data.results
      searchResult$.next(searchRes) 
  }




