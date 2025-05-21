import './App.css';
import SiteHeader from './siteHeader';
import CollpasibleMenu from './collapsible';
//import { useState, useEffect } from 'react';
function App() {


  return (
    <>
    <div className="App">
      <header className="App-header">
        <SiteHeader name="Robert Kloss"/>
      </header>
    </div>
    <body className="fullSite">
    <CollpasibleMenu/>
    <br></br>
    <br></br>
    </body>
    </>
  );
}

export default App;
