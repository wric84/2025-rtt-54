import { useEffect, useState } from "react";
import "./App.css";
import MapView from "./components/MapView";

const API_KEY = ""


function App() {

  const [ipData, setIpData] = useState(null)

  async function fetchInitialData(){
    try {

      const ipFetch = await fetch(`https://api.ipify.org?format=json`)
      const ipJson = await ipFetch.json()
      console.log(ipJson);
      
      const currentIpFetch = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipJson.ip}`)
      const currentIpFetchJson = await currentIpFetch.json()
      
      console.log(currentIpFetch)
      setIpData(currentIpFetchJson)


    } catch (error) {
      console.error(error);
      
    }
  }
  useEffect(()=> {
    fetchInitialData()
  }, [])
  
  return (
    <>
    <MapView ipData={ipData}/>

    
     
    </>
  );
}

export default App;
