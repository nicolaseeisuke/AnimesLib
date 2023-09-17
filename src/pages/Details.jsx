import {useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import { FaStar } from "react-icons/fa";
import "./Details.css"

import Spinner from "../components/Spinner"


const Details = () => {

  const [readMore, SetreadMore] = useState(false)

  const {id} = useParams();
  const url = `https://api.jikan.moe/v4/anime/${id}`;

  const [anime, setAnime] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async() => {
      const res = await fetch(url)
      const json = await res.json();

    setLoading(false)
      setAnime(json.data)
      console.log(json.data)
    }

    fetchData()
  },[id,url])
  
  return (
    <div>
      {loading && <Spinner/>}
        {anime &&  (
          <>
            <h1>{anime.title}</h1>
            <div className="details">
              <div className="detail">
                <div className="image">
                  <img src={anime.images.jpg.large_image_url} alt="" />
                </div>
                <div className="animeDetails">
                    <p>Aired: <span>{anime.aired.string}</span></p>
                    <p>Rank: <span>{anime.rank}</span></p>
                    <p>Score: <FaStar style={{color:"#f7d354"}}/> <span>{anime.score}</span></p>
                    <p>Popularity: <span>{anime.popularity}</span></p>
                    <p>Status: <span>{anime.status}</span></p>
                    <p>Source: <span>{anime.source}</span></p>
                    <p>Season: <span>{anime.season}</span></p>
                    <p>Duration: <span>{anime.duration}</span></p>
                </div>
              </div>
                <p className="description">synopsis: <span>
                      {readMore ? anime.synopsis : anime.synopsis.substring(0, 450) + '...'}
                      <button onClick={() => {
                          SetreadMore(!readMore)
                      }}>{readMore ? 'Read Less': 'Read More'}</button>
                    </span>
                </p>
            </div>
            <h1>trailer</h1>
            <div className="trailer">
              <iframe src={anime.trailer.embed_url} width="560px" height="315px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </>
        )} 
    </div>
  )
}

export default Details