import React, { Fragment, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import { searchInput$ } from '../../store/Search.store';
import { MoviesCall, searchResult$ } from '../../store/Movie.store';
import { TvCall } from '../../store/Serie.store';

const NavBar = () => {
  const [searchValue,setSearchValue] = useState<string|null>(null)
  const [, setMoviesData]= useState<any>([])
  const [, setSeriesData]= useState<any>([])
  useEffect(()=>{
      searchInput$.subscribe(data=>setSearchValue(data))
  },[])

  const shown = searchValue ? 'search' : 'discover'
  useEffect(()=>{
    TvCall(shown,searchValue)
    searchResult$.subscribe((data:{}[])=>{setSeriesData([...data])})
  },[searchValue,shown])
  //console.log(searchValue)
  
  useEffect(()=>{
    MoviesCall(shown,searchValue)
    searchResult$.subscribe((data:{}[])=>{setMoviesData([...data])})
  },[searchValue,shown])

  return (
    
        <Fragment>
            <Navbar bg="dark" expand="lg">
              <Container fluid>
                {/* <NavLink to="/">
                    <Navbar.Brand href="#">StreamLive</Navbar.Brand>
                </NavLink> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    
                    <NavLink to="/movies"><span>Movies</span></NavLink>
                    <NavLink to="/series"><span>Series</span></NavLink>
                    {/* <NavLink to="/trends"><span>Trends</span></NavLink> */}
                    
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search your movies, series..."
                      className="me-2"
                      aria-label="Search"
                      onChange={(e)=>{setSearchValue(e.target.value)}}
                    />
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </Fragment>
    
  )
}

export default NavBar
