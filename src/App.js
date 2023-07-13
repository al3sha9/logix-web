
import './App.css';
import Routers from "./components/router";
import React, { useState, useEffect } from 'react';



// import NAVBAR from './components/navbar/nav';
// import HEADER from './components/header/header';
// import ACC from './components/accomplishments/acc';
// import SERVICES from './components/services/services';
// import CONTACT from './components/contact/contact';
// import PORTFOLIO from './components/portfolio/portfolio';
// import ABOUT from './components/about/about';
// import FOOTER from './components/footer/footer';
// import TEAM from './components/team/team';
// import NEWS from './components/news/news';

function App() {
  const [wall, setwall] = useState('light');
  const togglewall = () => {
    if (wall === 'light') {
      setwall('dark');
    } else {
      setwall('light');
    }
  };
  
  return (
    <div className={`App ${wall}`}>
      {/* <NAVBAR  fixed="top" />
   <HEADER />
      <ACC />
      <SERVICES />
      <PORTFOLIO />
      <TEAM />
      <ABOUT />
      <CONTACT />
      <FOOTER />
      <NEWS /> */}
      <Routers />
    </div>
  );
}

export default App;
