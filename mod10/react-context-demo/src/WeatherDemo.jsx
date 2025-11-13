import { useEffect } from "react"

function WeatherDemo(){
    {/* use useEffect */}
    useEffect(()=> {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true")
        .then(res => res.json())
        .then(data => {
            console.log(data.current_weather);
        })
    })

    {/* fetch from api */}
    return(
        <>
            <h2>WeatherDemo</h2>
            
        </>
    )
}

export default WeatherDemo