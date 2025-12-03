
import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:4000/posts", formData)
    setFormData({title: "", body: "", userId: ""})
    console.log("Post is being submitted", formData);
    
  }

  return (
    <>
      <h1>React fullstack project</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="title" type="text" value={formData.title} onChange={handleChange}/>
        <textarea name="body" placeholder='Whats on your mind?' value={formData.body} onChange={handleChange}></textarea>
        <input name="userId" placeholder="userId" type="text" value={formData.userId} onChange={handleChange}/>
        <button type='submit'>Submit Post</button>
      </form>
    </>
  )
}

export default App
