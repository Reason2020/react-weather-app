import "./ForecastList.css";

const ForecastList = ({ weatherData }) => {
    const { forecast: { forecastday } } = weatherData.forecast && weatherData;

    return forecastday ? (
        <div className="forecast-list">
            {forecastday.map((day, id) => {
                return (
                    <div className="forecast-item">
                        <h5>{day.date}</h5>
                        <h5>{day.day.condition.text}</h5>
                        <img src={day.day.condition.icon} alt="Icon of the weather condition"/>
                        <h5>Max. Temperature: {day.day.maxtemp_c}deg. C</h5>
                        <h5>Min. Temperature: {day.day.mintemp_c}deg. C</h5>
                    </div>
                )
            }) }
        </div>
    ) : <h1>Receiving Data...</h1>
}
export default ForecastList;