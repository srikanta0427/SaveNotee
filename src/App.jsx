import { useState } from 'react'
import './App.css'
import NoteCard from './Components/NoteCard'
import NoteInput from './Components/NoteInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <NoteCard/> */}
    <NoteInput/>
    </>
  )
}

export default App
