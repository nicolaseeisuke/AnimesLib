import { Link, useNavigate} from 'react-router-dom'
import { BiSearchAlt2 } from "react-icons/bi";

//hooks 
import { useState } from 'react'

import './Navbar.css'

const NavBar = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleAnime = (e) => {
    e.preventDefault()
    if(!search) return ;
    
    navigate(`/search?q=${search}`)

    console.log(search)
    setSearch("")
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
            placeholder='Search anime' 
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />

            <button type='submit'>
             <BiSearchAlt2/>
            </button>
        </form>
      </nav>
  )
}

export default NavBar