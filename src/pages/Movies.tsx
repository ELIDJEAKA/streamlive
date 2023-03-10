
import React, { Fragment, useEffect, useState } from 'react'
import { searchResult$, MoviesCall, searchMoviebyUrl, searchResultUrl$ } from '../store/Movie.store';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/styles.css'
import { SearchUpdate } from '../store/Search.store';
import apiConfig from '../api/config';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Movies =  () => {
  const [moviesData, setMoviesData]= useState<any>([])
  const [moviesUrlData, setMoviesUrlData]= useState<any>([])
  const [searchByUrl,setSearchByUrl]= useState<Boolean>(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate();
  
  const search = SearchUpdate()
  
  const shown = search ? 'search' : 'discover'
  
  const handleDetail = (idMovie:string)=>{
      setSearchParams({id:idMovie,type:'movie'})
      navigate({
        pathname: '/details',
        search: `?id=${idMovie}&type=movie`,
      });
      
  }
  const genre = searchParams.get('genre') || '';
  const page = searchParams.get('page') || '';
  const language = searchParams.get('language') || '';
  
  useEffect(()=>{
    if(genre || page || language){
      searchMoviebyUrl(search,genre,language,page)
      setSearchByUrl(true)
      searchResultUrl$.subscribe((data:{}[])=>{if (data){setMoviesUrlData([...data])}})
    }else{
      MoviesCall(shown,search)
      setSearchByUrl(false)
      searchResult$.subscribe((data:{}[])=>{if (data){setMoviesData([...data])}})
    }
  },[search,shown])
  
  
  return (
    <div>
      {searchByUrl && 
      <Container>
          <Row>
              {moviesUrlData.map((movie:any)=>{
                return(
                  <>
                  <Col sm key={movie.id} onClick={()=>handleDetail(movie.id)} style={{ margin: '2px' }}>
                      <Card style={{ width: '18rem' }}>
                         
                        <Card.Img variant="top" src={movie.poster_path ? `${apiConfig.w500Image(movie.poster_path)}` : '' } alt="" />
                        <Card.Body>
                          <Card.Title className='title-grid'>{movie.title}</Card.Title>                         
                        </Card.Body>
                      </Card>
                  </Col>
                  </>
                )})}
          </Row>
      </Container>}:
      {<Container>
          <Row>
              {moviesData.map((movie:any)=>{
                return(
                  <>
                  <Col sm key={movie.id} onClick={()=>handleDetail(movie.id)} style={{ margin: '2px' }}>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={movie.poster_path ? `${apiConfig.w500Image(movie.poster_path)}` : '' } alt="" />
                        <Card.Body>
                          <Card.Title className='title-grid'>{movie.title}</Card.Title>                         
                        </Card.Body>
                      </Card>
                  </Col>
                  </>
                )})}
          </Row>
      </Container>
      }
    </div>
  )
}

export default Movies
