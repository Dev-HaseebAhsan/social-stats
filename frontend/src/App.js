import React, {useState} from 'react';
import Navbar from './components/navbar';
import './App.css';
import logo from './img/logo.png';
import youtubeIcon from './img/youtube-icon.png';
import Select from 'react-select';  

const optionList = [
  {value: "all", label: "All"},
  {value: "youtube", label: "YouTube"},
  {value: "twitch", label: "Twitch"},
  {value: "instagram", label: "Instagram"},
  {value: "twitter", label: "Twitter"},
  {value: "meta", label: "Meta"},
];

function App() {
  const [selectedOptions, setSelectedOptions] = useState();
  return (
    <div className="App">
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
              options={optionList}
              placeholder="All"
              value={selectedOptions}
              isSearchable={true}
              isMulti={true}
            />
            {/* Search Bar */}
            <div className='search-bar'>
              <searchbar placeholder='Type Here'/>
            </div>
          </div>

        </div>
      </header>

      <section id='body'>
        <div className='body-container'>

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
