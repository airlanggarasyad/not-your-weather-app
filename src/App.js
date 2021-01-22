import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Weather from './Components/Weather';
import Particles from './Components/Particles';
import TitleComponent from './Components/Title';

const API = {
  key: "8ba6fc77fe419748f16ab32738f7e4c9",
  base: "http://api.openweathermap.org/data/2.5/"
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "Wakanda",
      weather: "Clouds",
      currTemp: 24,
      tempFeel: 25,
      tempMax: 25,
      tempMin: 22 
    };
  }

  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    const apiCall = await fetch(
      `${API.base}weather?q=${city}&APPID=${API.key}` 
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
      });
      
    }
    catch {
     
    }
  }

  render() {
    return (
      <div>
        <TitleComponent title = {this.state.city}/>
        <SearchBar
          loc = {this.getWeather}
          city = {this.state.city}
        />
        <Weather 
          city = {this.state.city}
          weather = {this.state.weather}
          currTemp = {this.state.currTemp}
          tempFeel = {this.state.tempFeel}
          tempMax = {this.state.tempMax}
          tempMin = {this.state.tempMin}
        />
        <Particles />
      </div>
    );
  }
}

export default App;
