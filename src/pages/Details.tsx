import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { creditMovieTv, creditsResult$, detailMovieTv, searchResult$ } from '../store/Movie.store'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import apiConfig from '../api/config';
import { MovieInterface } from '../Interfaces/Movies.interface';
import { CreditInterface } from '../Interfaces/Credits.interface';
import '../styles/styles.css'
import { genreInterface } from '../Interfaces/Imdb.interface';
import { SerieInterface } from '../Interfaces/Series.interface';
const Details = () => {

    const [movieDetail, setMovieDetail]= useState<MovieInterface>()
    const [serieDetail, setSerieDetail]= useState<SerieInterface>()
    const [credit, setCredit]= useState<CreditInterface[]>()
    const [searchParams, ] = useSearchParams() 
    
    const type = searchParams.get('type') || ''
    const id = searchParams.get('id') || ''

    console.log(id,' ',type );
    
    useEffect(()=>{
        detailMovieTv(type,id);
        searchResult$.subscribe((data:any)=>{
          type==='movie' ? setMovieDetail(data[0]) : setSerieDetail(data[0])

        })
        creditMovieTv(type,id);
        creditsResult$.subscribe((data:any)=>{setCredit(data)})

    },[])
    console.log(movieDetail);
    
    
    
    
  

  return (
    <div className='container-body'>
      
      {
        movieDetail &&
        (<Container>
          <Row>
              <Col sm>
                  <Card.Img variant="top" src={movieDetail.poster_path ? `${apiConfig.w500Image(movieDetail.poster_path)}` : '' } alt='' className="img_detail"/>
              </Col>
              <Col sm className='detail-movie'>
                  <Card.Title className='title-detail'>{movieDetail.title }</Card.Title><br/>
                  
                  { movieDetail.genres && movieDetail.genres.slice(0,movieDetail.genres.length>5 ? 5 : movieDetail.genres.length ).map((item:genreInterface)=>(
                      <span key={item.id} className="genre_item">{item.name}</span>)
                      )}
                  <br/>

                  <p>{movieDetail.overview}</p>
                  <Card.Title>Casts  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::</Card.Title>
                  <Card.Text>
                        {credit && credit.slice(0,5).map((cast:CreditInterface)=>
                          <Card.Img variant="top" src={cast.profile_path ? `${apiConfig.w500Image(cast.profile_path)}` : '' } alt='' className="img_cast" />
                        )}
                  </Card.Text>  
              </Col>
          </Row>
      </Container>)
      }
      {
        serieDetail && (
            <Container>
          <Row>
              <Col sm>
                  <Card.Img variant="top" src={serieDetail.poster_path ? `${apiConfig.w500Image(serieDetail.poster_path)}` : '' } alt='' className="img_detail"/>
              </Col>
              <Col sm className='detail-movie'>
                  <Card.Title className='title-detail'>{serieDetail.name }</Card.Title><br/>
                  
                  { serieDetail.genres && serieDetail.genres.slice(0,serieDetail.genres.length>5 ? 5 : serieDetail.genres.length ).map((item:genreInterface)=>(
                      <span key={item.id} className="genre_item">{item.name}</span>)
                      )}
                  <br/>

                  <p>{serieDetail.overview}</p>
                  <Card.Title>Casts  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::</Card.Title>
                  <Card.Text>
                        {credit && credit.slice(0,5).map((cast:CreditInterface)=>
                          <Card.Img variant="top" src={cast.profile_path ? `${apiConfig.w500Image(cast.profile_path)}` : '' } alt='' className="img_cast" />
                        )}
                  </Card.Text>  
              </Col>
          </Row>
      </Container>
        )
      }
    </div>
  )
}

export default Details
