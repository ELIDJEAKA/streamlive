import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { detailMovieTv, searchResult$ } from '../store/Movie.store'

const Details = () => {

    const [movieDetail, setMovieDetail]= useState<{}>()
    const [searchParams, setSearchParams] = useSearchParams() 
    
    const type = searchParams.get('type') || 'test'
    const id = searchParams.get('id') || 'test'

    console.log(id,' ',type );
    
    useEffect(()=>{
        detailMovieTv(type,id);
        searchResult$.subscribe((data:{})=>{setMovieDetail(data)})
    },[])
    console.log(movieDetail);
    
    
  return (
    <div>
      Details

    </div>
  )
}

export default Details
