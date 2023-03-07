import React,  { useState } from 'react';
import Routes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContextProvider } from './store/AppContext';


function App() {
  return (
    <div>
        <Routes/>
    </div>
  );
}

export default App;
