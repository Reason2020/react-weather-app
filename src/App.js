import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import WeatherInfo from "./components/WeatherInfo";

const demoData = {
    location: {
        name: "",
    },
    current: {
        temp_c: "",
        condition: {
            text: "",
            icon: "",
        }
    },
    forecast: {
        forecastday:[
            {
                date: "",
                day: {
                    maxtemp_c: "",
                    mintemp_c: "",
                    condition: {
                        text: "",
                        icon: ""
                    }
                }
            },
            {
                date: "",
                day: {
                    maxtemp_c: "",
                    mintemp_c: "",
                    condition: {
                        text: "",
                        icon: ""
                    }
                }
            },
            {
                date: "",
                day: {
                    maxtemp_c: "",
                    mintemp_c: "",
                    condition: {
                        text: "",
                        icon: ""
                    }
                }
            }
        ]
    }
}

const App = () => {
    const [ city, setCity ] = useState('Kathmandu');
    const [fetchedData, setFetchedData] = useState({...demoData});

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5b3b82a8e3msh385dc227d12c88fp16658fjsnb6010f8df6ae',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    //useeffect hook to fetch data using the city
    useEffect(() => {
        fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options)
            .then(response => response.json())
            .then(data => setFetchedData(data))
            .catch(err => console.error(err));
    }, [city])

    return (
        <>
            <Navbar setCity={setCity} />
            <WeatherInfo city={city} weatherData={{...fetchedData}} />     {/*pass the fetched data to weatherinfo as props*/}
        </>
    )
}

export default App;