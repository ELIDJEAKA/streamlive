import React, { useEffect, useState } from 'react'
import { SearchUpdate } from '../store/Search.store'
import { searchResult$, searchResultUrl$, searchSeriebyUrl, TvCall } from '../store/Serie.store'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/styles.css';
import apiConfig from '../api/config';
import { useNavigate, useSearchParams } from 'react-router-dom';


const Series = () => {
  const [seriesData, setSeriesData]= useState<any>([])
  const [serieUrlData, setSerieUrlData]= useState<any>([])
  const [searchByUrl,setSearchByUrl]= useState<Boolean>(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const search = SearchUpdate()
  const shown = search ? 'search' : 'discover'
  const navigate = useNavigate();

  const handleDetail = (idSerie:string)=>{
      setSearchParams({id:idSerie,type:'tv'})
      navigate({
        pathname: '/details',
        search: `?id=${idSerie}&type=tv`,
      });
      
  }

  const genre = searchParams.get('genre') || '';
  const page = searchParams.get('page') || '';
  const language = searchParams.get('language') || '';

  useEffect(()=>{
    if(genre || page || language){
        searchSeriebyUrl(search,genre,language,page)
        setSearchByUrl(true)
        searchResultUrl$.subscribe((data:{}[])=>{if (data){setSerieUrlData([...data])}})
    }else{
      TvCall(shown,search)
      setSearchByUrl(false)
      searchResult$.subscribe((data:{}[])=>{setSeriesData([...data])})
    }
  },[search,shown])
  
  

  return (
    <div>
        {searchByUrl && 
          
          <Container>
          <Row>
              {serieUrlData.map((serie:any)=>{
                return(
                  <>
                  <Col sm key={serie.id} onClick={()=>handleDetail(serie.id)} style={{ margin: '2px' }}>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={serie.poster_path ? `${apiConfig.w500Image(serie.poster_path)}` : '' } alt="" />
                        <Card.Body>
                          <Card.Title className='title-grid'>{serie.name}</Card.Title>                         
                        </Card.Body>
                      </Card>
                  </Col>
                  </>
                )})}
          </Row>
      </Container>}:{
        <Container>
          <Row>
              {seriesData.map((serie:any)=>{
                return(
                  <>
                  <Col sm key={serie.id} onClick={()=>handleDetail(serie.id)} style={{ margin: '2px' }}>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={serie.poster_path ? `${apiConfig.w500Image(serie.poster_path)}` : '' } alt="" />
                        <Card.Body>
                          <Card.Title className='title-grid'>{serie.name}</Card.Title>                         
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

export default Series
