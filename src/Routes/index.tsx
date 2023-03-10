import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Movies from '../pages/Movies';
import NavBar from '../components/NavBar/NavBar';
import Series from '../pages/Series';
import Details from '../pages/Details';



const index = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />}  />
             <Route path="/details" element={<Details />}  /> 
            <Route path="*" element={<Navigate to="/movies" replace />} />
        </Routes>
    </Router>
  )
}

export default index
