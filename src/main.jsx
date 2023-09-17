import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//
import {register} from "swiper/element/bundle"
register()
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


//Pages
import Home from './pages/Home'
import Details from './pages/Details.jsx'

//Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './pages/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/anime/:title/:id" element={<Details/>}/>
          <Route path="/search" element={<Search/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
