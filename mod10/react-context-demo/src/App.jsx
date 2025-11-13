//import WeatherDemo from './WeatherDemo'
import './App.css'
import { WeatherContext } from './context/WeatherContext'
import { useContext } from 'react'

function App() {
 
  const weather = useContext(WeatherContext)

  if (!weather) return <p>Loading Weather...</p>


  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {weather.temperature}</p>
      <p>Wind Speed: {weather.windspeed} </p>
    </div>
  )
}

export default App
