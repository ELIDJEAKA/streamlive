import { BehaviorSubject } from "rxjs";
import movieApi from "../api/movieApi";
import { CreditInterface } from "../Interfaces/Credits.interface";
import { MovieInterface } from "../Interfaces/Movies.interface";

let searchRes:MovieInterface[] = []
let creditsResult:CreditInterface[] = []

export const searchResult$ = new BehaviorSubject(searchRes)
export const creditsResult$ = new BehaviorSubject(creditsResult)

export const MoviesCall = async (shown:string, search:string|null)=>{
      const {results:data} = await movieApi.getMoviesList(shown,search)
      searchRes = data
      searchResult$.next(searchRes) 
    }
    
export const detailMovieTv = async(type:string,id:string)=>{
    const idMovie= parseInt(id)
    const data:MovieInterface = await movieApi.detail(type,idMovie)
    searchResult$.next([data]) 
}

export const creditMovieTv = async(type:string,id:string)=>{
    const idMovie= parseInt(id)
    const {cast:data} = await movieApi.credits(type,idMovie)
    creditsResult$.next(data) 
}






