
import React, { Fragment, useEffect, useState } from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import { searchResult$, MoviesCall } from '../store/Movie.store';
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
  const [, setSearchParams] = useSearchParams()
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

  useEffect(()=>{
    MoviesCall(shown,search)
    searchResult$.subscribe((data:{}[])=>{if (data){setMoviesData([...data])}})
  },[search,shown])
  
  return (
    <div>
      <Container>
          <Row>
              {moviesData.map((movie:any)=>{
                return(
                  <>
                  <Col sm key={movie.id} onClick={()=>handleDetail(movie.id)}>
                      <Card style={{ width: '18rem' }}>
                        <AiFillPlayCircle color='green' fontSize={40} id="playIcon"/> 
                        <Card.Img variant="top" src={movie.poster_path ? `${apiConfig.w500Image(movie.poster_path)}` : '' } alt="" />
                        <Card.Body>
                          <Card.Title>{movie.title}</Card.Title>                         
                        </Card.Body>
                      </Card>
                  </Col>
                  </>
                )})}
          </Row>
      </Container>
    </div>
  )
}

export default Movies
