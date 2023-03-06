import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/styles.css'
import { UidContext } from '../store/AppContext';
//import movieApi from '../api/movieApi'
const Movies =  () => {
  const [moviesData, setMoviesData]= useState<any>([])
  const searchValue = useContext(UidContext)
  
  const Api = 'https://api.themoviedb.org/3/discover/movie'
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const noimage =  require("../assets/noimage.jpg")
  const MoviesCall = async ()=>{
      const data = await axios.get(Api,{
        params:{
          api_key:'92b418e837b833be308bbfb1fb2aca1e',
          query:searchValue
        }
      })
      const res = data.data.results
      setMoviesData(res);  
      //const data = await movieApi.getMoviesList('movie')
  }

  useEffect(()=>{
      MoviesCall()
  },[])
  console.log(moviesData);
  return (
    <div>
      <Container>
          <Row>
              {moviesData.map((movie:any)=>{
                return(
                  <Fragment>
                  <Col sm>
                      <Card style={{ width: '18rem' }}>
                        <AiFillPlayCircle color='green' fontSize={40} id="playIcon"/> 
                        <Card.Img variant="top" src={movie.poster_path ? `${Images}${movie.poster_path}` : noimage } alt="" />
                        <Card.Body>
                          <Card.Title>{movie.title}</Card.Title>
                          {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text> */}
                          
                        </Card.Body>
                      </Card>
                  </Col>
                  </Fragment>
                )})}
          </Row>
      </Container>
    </div>
  )
}

export default Movies
