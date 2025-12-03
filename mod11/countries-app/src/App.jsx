import Home from './pages/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import CountryCard from './components/CountryCard'

function App() {
  

  return (
    <>
      <h1>Countries App</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/country/:code" element={<CountryCard/>}/>

      </Routes>
    </>
  )
}

export default App
