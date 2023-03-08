import React, { useEffect, useState } from 'react'
import { SearchUpdate } from '../store/Search.store'
import { searchResult$, TvCall } from '../store/Serie.store'
import {AiFillPlayCircle} from 'react-icons/ai'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/styles.css';
import apiConfig from '../api/config';

const Series = () => {
  const [seriesData, setSeriesData]= useState<any>([])
  
  const search = SearchUpdate()
  const shown = search ? 'search' : 'discover'

  useEffect(()=>{
    TvCall(shown,search)
    searchResult$.subscribe((data:{}[])=>{setSeriesData([...data])})
  },[search,shown])
  
  

  return (
    <div>
        <Container>
          <Row>
              {seriesData.map((serie:any)=>{
                return(
                  <>
                  <Col sm key={serie.id}>
                      <Card style={{ width: '18rem' }}>
                        <AiFillPlayCircle color='green' fontSize={40} id="playIcon"/> 
                        <Card.Img variant="top" src={serie.poster_path ? `${apiConfig.w500Image(serie.poster_path)}` : '' } alt="" />
                        <Card.Body>
                          <Card.Title>{serie.name}</Card.Title>                         
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

export default Series
