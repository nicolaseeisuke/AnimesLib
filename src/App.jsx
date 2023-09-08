//Components
import NavBar from './components/navBar'

import { Outlet } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default App
