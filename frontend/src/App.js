import React, {useState} from 'react';
import Navbar from './components/navbar';
import Particle from './components/Particle';
import './App.css';
import logo from './img/logo.png';
import youtubeIcon from './img/youtube-icon.png';
import {Select, Input, Row} from 'antd';

function App() {
  const platformOptions = [
    {value: "all", label: "All"},
    {value: "youtube", label: "YouTube"},
    {value: "twitch", label: "Twitch"},
    {value: "instagram", label: "Instagram"},
    {value: "twitter", label: "Twitter"},
    {value: "meta", label: "Meta"},
  ];

  return (
    <div className="App">
      {/* Moving particle-web background; check Particle.jsx in the components folder */}
      <Particle />
      {/* Everything contained within the header section of the frontpage*/}
      <header>
        <div className='header-container'>
          <div className='logo-container'>
            <img className='logo' src={logo}/>
          </div>
          {/* A description of the site's goal */}
          <div className='site-description'>
            <p>
              A social media analytics tool.
            </p>
          </div>
          {/* Filter + Search Bar */}
          <div className='search'>
            {/* Filter for social media platforms. */}
            <Select 
              className='filter'
              options={platformOptions}
              placeholder="Platform Filter"
              defaultValue={"all"}
              mode='multiple'
              maxTagCount={2}
              bordered={true}
            />
            {/* Search Bar */}
            <div className='search-bar-container'>
              <Input
                className='search-bar'
                placeholder="Search Creator Here"
              />
            </div>
          </div>

        </div>
      </header>

      <section id='body'>
        <div className='body-container'>
          <div className='platform-wide-stats'>
            
          </div>
          <div className='platform-wide-stats'>
            
          </div>
          <div className='platform-wide-stats'>
            
          </div>
          <div className='platform-wide-stats'>
            
          </div>
          <div className='platform-wide-stats'>
            
          </div>
          <div className='platform-wide-stats'>
            
          </div>
        </div>
      </section>

      <footer>
        <div className='footer-container'>

        </div>
      </footer>
      
    </div>
  );
}

export default App;
