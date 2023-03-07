import { BehaviorSubject } from "rxjs";
import axios from 'axios'

let searchRes:{}[] = []
//const search = null
//const shown = search ? 'search' : 'discover'

export const searchResult$ = new BehaviorSubject(searchRes)

export const MoviesCall = async (shown:string, search:string|null)=>{
  const Api = `https://api.themoviedb.org/3/${shown}/movie`
      const data = await axios.get(Api,{
        params:{
          api_key:'92b418e837b833be308bbfb1fb2aca1e',
          query:search
        }
      })
      searchRes = data.data.results
      searchResult$.next(searchRes) 
      
      //const data = await movieApi.getMoviesList('movie')
  }





