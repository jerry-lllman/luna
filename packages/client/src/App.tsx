import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '@/pages/Home'
import Editor from '@/pages/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Editor />
  )
}

export default App
