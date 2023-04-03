
import "./CurrentWeather.css";

const CurrentWeather = ({ weatherData }) => {
    
    console.log(weatherData);
    return (
        <div className="current-weather">
            <h3>{weatherData.location && weatherData.location.name}</h3>
            <h2>{weatherData.current && weatherData.current.temp_c}°C</h2>
            <h5>{weatherData.current && weatherData.current.condition.text}</h5>
            <img src={weatherData.current && weatherData.current.condition.icon} alt="Icon of the current weather condition" />
        </div>
    )
}

export default CurrentWeather;