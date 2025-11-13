
import { useState, useEffect, createContext } from "react"

export const WeatherContext = createContext()

function WeatherProvider({children}){
    const [weather, setWeather] = useState(null)

     useEffect(()=> {
            fetch("https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true")
            .then(res => res.json())
            .then(data => setWeather(data.current_weather))
        },[])
    return(
        <WeatherContext.Provider value={weather}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider