import { useEffect, useState } from "react"
import PeoplesDetails from "./PeoplesDetails"
import axios from 'axios'

function PeoplesList(){

    const [people, setPeople] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then(response =>{
            setPeople(response.data.results)
            console.log(response.data.results);
        })
    },[])

    return(
        <>
            <h2>PeoplesList</h2>
            {people.map((person, index)=> (
                <li key={index}>{person.name}</li>       
            ))}
            
        </>
    )
}

export default PeoplesList

