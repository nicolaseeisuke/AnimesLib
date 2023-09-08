import { Link } from 'react-router-dom'
import { BiSearchAlt2 } from "react-icons/bi";

//hooks 
import { useState } from 'react'

import './Navbar.css'

const NavBar = () => {

  const [anime, setAnime] = useState("")

  const handleAnime = (e) => {
    e.preventDefault()
    
    console.log(anime)
    setAnime("")
  }
  
  return (
      <nav id='navBar' >
        <h2>
           <Link to="/">
              AnimesLib
           </Link>
        </h2>
        <form onSubmit={handleAnime}>
            <input 
            type="text" 
            placeholder='Busque um anime' 
            onChange={(e) => setAnime(e.target.value)}
            value={anime}
            />

            <button type='submit'>
             <BiSearchAlt2/>
            </button>
        </form>
      </nav>
  )
}

export default NavBar