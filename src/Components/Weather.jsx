import '../Styles/weather.css'
import 'font-awesome/css/font-awesome.min.css';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();
var dd = String(d.getDate()).padStart(2, '0');
var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
var dayName = days[d.getDay()];

d = dayName + ', ' + dd + ' ' + monthNames[mm - 1] ;

const Weather = (props) => {

    return (
        <div className="app">
            <div className="weather-main">
                <div className="info">
                    <div className="location-box"></div>
                    <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> {props.city}</div>
                    <div className="date">{d}</div>
                </div>
                <div className="temp-info">
                    <div className="temp">{props.currTemp}&deg;</div>
                    <div className="vertical-line"></div>
                    <div className="icn" >{props.icon}</div>
                </div>
                <div>
                    <div className="feels-like">Feels like {props.tempFeel}&deg;</div>
                    <div className="weather">{props.weather}</div>
                    <div className="hi-lo">High: {props.tempMax}&deg; | Low: {props.tempMin}&deg; | Humidity: {props.hum}% | Visibility: {props.vis} km</div>
                    <div className="hi-lo-m">
                        <div>Hi: {props.tempMax}&deg; | Lo: {props.tempMin}&deg;</div>
                        <div>Hu: {props.hum}% | Vis: {props.vis} km</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather