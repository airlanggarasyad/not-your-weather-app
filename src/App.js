import { WiNightAltSnowThunderstorm, WiRainWind, WiSnowflakeCold, WiDust, WiMoonAltNew } from 'react-icons/wi';
import React from 'react';
import './App.css';

import SearchBar from './Components/SearchBar';
import Weather from './Components/Weather';
import Particles from './Components/Particles';
import TitleComponent from './Components/Title';
import Footer from './Components/Footer';

const API = {
  key: "8ba6fc77fe419748f16ab32738f7e4c9",
  base: "http://api.openweathermap.org/data/2.5/"
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      city: "Wakanda",
      icon: <WiMoonAltNew />,
      weather: "Clouds",
      currTemp: 24,
      tempFeel: 25,
      tempMax: 25,
      tempMin: 22,
      humidity: 64,
      visibility: 20.3
    };

    this.weatherIcon = {
      Thunderstorm: <WiNightAltSnowThunderstorm />,
      Drizzle: <WiRainWind />,
      Rain: <WiRainWind />,
      Snow: <WiSnowflakeCold />,
      Atmosphere: <WiDust />,
      Clear: <WiMoonAltNew />,
      Clouds: <WiMoonAltNew />
    };
  }

  getIcon(icons, rangeID) {
    switch(true) {
      case rangeID > 800:
        this.setState({icon: icons.Clouds});
        break;
      case rangeID === 800:
        this.setState({icon: icons.Clear});
        break;
      case rangeID > 700:
        this.setState({icon: icons.Atmosphere});
        break;
      case rangeID > 600:
        this.setState({icon: icons.Snow});
        break;
      case rangeID > 500:
        this.setState({icon: icons.Rain});
        break;
      case rangeID > 300:
        this.setState({icon: icons.Drizzle});
        break;
      default:
        this.setState({icon: icons.Thunderstorm});
        break;
    }
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
        tempMin: Math.floor(response.main.temp_min -273.15),
        visibility: (response.visibility.toFixed(1)/1000),
        humidity: response.main.humidity
      });

      this.getIcon(this.weatherIcon, response.weather[0].id);
    }
    catch {
      console.log('error')
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
          icon = {this.state.icon}
          city = {this.state.city}
          weather = {this.state.weather}
          currTemp = {this.state.currTemp}
          tempFeel = {this.state.tempFeel}
          tempMax = {this.state.tempMax}
          tempMin = {this.state.tempMin}
          hum = {this.state.humidity}
          vis = {this.state.visibility}
        />
        <Footer />
        <Particles />
      </div>
    );
  }
}

export default App;
