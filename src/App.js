import React from 'react';

import './App.css';
import SearchBar from './Components/SearchBar';
import Weather from './Components/Weather';

const API = {
  key: "8ba6fc77fe419748f16ab32738f7e4c9",
  base: "http://api.openweathermap.org/data/2.5/"
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      usrInput: undefined,
      city: undefined,
      weather: undefined,
      currTemp: undefined,
      tempFeel: undefined,
      tempMax: undefined,
      tempMin: undefined
    };

    this.getWeather();
  }

  // Get input from search bar

  getWeather = async() => {

    const apiCall = await fetch(
      `${API.base}weather?q=new+york&APPID=${API.key}` 
      );

    const response = await apiCall.json();
    
    try{
      this.setState({
      city: `${response.name}, ${response.sys.country}`,
      weather: response.weather[0].main,
      currTemp: Math.floor(response.main.temp -273.15),
      tempFeel: Math.floor(response.main.feels_like -273.15),
      tempMax: Math.floor(response.main.temp_max -273.15),
      tempMin: Math.floor(response.main.temp_min -273.15)
      })
    }
    catch {
      alert("Check your input")
    }
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Weather 
          city = {this.state.city}
          weather = {this.state.weather}
          currTemp = {this.state.currTemp}
          tempFeel = {this.state.tempFeel}
          tempMax = {this.state.tempMax}
          tempMin = {this.state.tempMin}
        />
      </div>
    );
  }
}

export default App;
