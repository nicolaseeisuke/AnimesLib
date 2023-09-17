//Components
import AnimeCard from "../components/AnimeCard"
import Spinner from "../components/Spinner"

//hooks
import {UseFetch} from "../hooks/Usefetch"
import { useEffect,useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

//css
import "./Home.css"

const Home = () => {
  const URL = "https://api.jikan.moe/v4/top/anime?filter=bypopularity"
  const {animes, loading} = UseFetch(URL)

  const [slidesPerView, setslidePerView] = useState(4)


  useEffect(() =>{
    function handleSize() {
      if(window.innerWidth < 750){
          setslidePerView(2)
      }else{
        setslidePerView(4)
      }                                                                                           
    }
    handleSize()
    window.addEventListener("resize", handleSize)

    return () => {
      window.removeEventListener("resize", handleSize)
    }
  },[])


  return (
    <div className="container">
       <Swiper
          className="slide"
          slidesPerView={slidesPerView}
          navigation
        >
          {animes && animes.map((item) => (
            <SwiperSlide key={item.mal_id}>
              <img className="slider-item" src={item.images.jpg.large_image_url} alt={item.title}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <h2 className="title">Popular animes:</h2>
        <div className="animes-container">
            {loading && <Spinner/>}
            {animes && animes.map((anime) => <AnimeCard key={anime.mal_id} anime={anime}/>)}  
        </div>
    </div>
  )
}

export default Home