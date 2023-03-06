import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import { UidContext } from '../../store/AppContext';
const NavBar = () => {
  const [searchValue,setSearchValue] = useState<string|null>('')
  return (
    <UidContext.Provider value={searchValue}>
        <>
            <Navbar bg="dark" expand="lg">
              <Container fluid>
                <NavLink to="/">
                    <Navbar.Brand href="#">StreamLive</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    
                    <NavLink to="/movies"><span>Movies</span></NavLink>
                    <NavLink to="/series"><span>Series</span></NavLink>
                    <NavLink to="/series"><span>Trends</span></NavLink>
                    
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search your movies, series..."
                      className="me-2"
                      aria-label="Search"
                      onChange={(e)=>setSearchValue(e.target.value)}
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            
        </>
    </UidContext.Provider>
  )
}

export default NavBar
