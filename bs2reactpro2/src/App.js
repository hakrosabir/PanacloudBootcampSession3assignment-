import React from 'react';
import Pakistan from './Pakistan.js';
import BigCities from './BigCities.js';
import './App.css';



function App() {
  return (
    <div className="App">
      <h1 class='h1'>Provinces Of Pakistan</h1>
      <Pakistan province ="Sindh" >  </Pakistan>
      <Pakistan province ="Punjab"></Pakistan>
      <Pakistan province ="KPK" >  </Pakistan>
      <Pakistan province ="Balochistan"></Pakistan>
      <Pakistan province ="Gilgit Baltistan" >  </Pakistan>
      <h1 class="h1">Big Cities of Pakistan</h1>
      <BigCities BigCity="Karachi" province= 'Sindh' ></BigCities>
      <BigCities BigCity="Lahore" province= 'Punjab' ></BigCities>
      <BigCities BigCity="Peshawar" province= 'KPK' ></BigCities>
      <BigCities BigCity="Quetta" province= 'Balochistan' ></BigCities>
      <BigCities BigCity="Hunza" province= 'Gilgit Baltistan' ></BigCities>
     

      
    </div>
  );
}

export default App;


