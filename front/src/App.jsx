import { useState } from 'react'
import Login from './pages/Login/Login'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  )
}

export default App
