import { BehaviorSubject } from "rxjs";
import movieApi from "../api/movieApi";
import { SerieInterface } from "../Interfaces/Series.interface";

let searchRes:SerieInterface[] = []
let searchResultUrl:SerieInterface[] = []
//const search = null
//const shown = search ? 'search' : 'discover'

export const searchResult$ = new BehaviorSubject(searchRes)
export const searchResultUrl$ = new BehaviorSubject(searchResultUrl)

export const TvCall = async (shown:string, search:string|null)=>{
      const {results:data} = await movieApi.getTvList(shown,search)
      searchRes = data
      searchResult$.next(searchRes) 
  }


export const searchSeriebyUrl = async (search:string|null,genre:string,language:string,page:string) =>{
    
    const {results:data} = await movieApi.searchTv(null,genre,language,page)
    searchResultUrl = data
    searchResultUrl$.next(searchResultUrl)
}


