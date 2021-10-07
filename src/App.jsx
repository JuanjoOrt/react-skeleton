import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'
import Loader from './Loader'

function App() {
  const [isCharged, setIsCharged] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setIsCharged(true)
    }, 3000)
  }, [])

  return (
    <div className="App">
      <div className='container'>
      <div className='item'>{isCharged ? <Card /> : <Loader/>}</div>
      <div className='item'>{isCharged ? <Card /> : <Loader/>}</div>
      <div className='item'>{isCharged ? <Card /> : <Loader/>}</div>
      </div>
      
    </div>
  )
}

export default App
