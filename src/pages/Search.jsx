import { useSearchParams } from "react-router-dom"

import { UseFetch } from "../hooks/Usefetch"

import "./Home.css"
import AnimeCard from "../components/AnimeCard"
import Spinner from "../components/Spinner"

const Search = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")

  const url = `https://api.jikan.moe/v4/anime?q=${query}&order_by=popularity&sort=asc&sfw`

  const {animes, loading} = UseFetch(url)

  return (
    <div>
      <h2 className="title">Results for: {query}</h2>
      <div className="animes-container">
        {loading && <Spinner/>}
        {animes && animes.map((anime) => <AnimeCard key={anime.mal_id} anime={anime}/>)}
      </div>
    </div>
  )
}

export default Search