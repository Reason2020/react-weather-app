import CurrentWeather from "../CurrentWeather";
import ForecastList from "../ForecastList";
import "./WeatherInfo.css";

const WeatherInfo = ({ weatherData }) => (
    <div className="weather-info">
        <CurrentWeather weatherData={{...weatherData}} />
        <ForecastList weatherData={{...weatherData}} />
    </div>
)

export default WeatherInfo;