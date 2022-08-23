import './App.css';
import React, { useState, useEffect } from 'react';
import Begin from "./components/Begin"
import Page from "./components/Page"
import {isMobile } from 'react-device-detect';

function App() {

const [pageOn, setPageOn ] = useState(false)

useEffect(() => {
  
    if (isMobile){
      setPageOn(true)
    }
    
}, []);

const ShowPage = () => {
  setPageOn(true)
}
  return (

    <div className="App">
      
      {pageOn ? null: <Begin funktio={ShowPage}/> }
      {pageOn ?<Page mobile={pageOn}/> : null }
      
    </div>
  );
}

export default App;
