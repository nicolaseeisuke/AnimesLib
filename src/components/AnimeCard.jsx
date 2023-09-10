import { Link } from "react-router-dom"


import "./AnimeCard.css"

const AnimeCard = ({anime, showLink = true}) => {
  return (
    <div className="anime-card">
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <h2>{anime.title}</h2>
      {showLink && <Link to={`/detatails/${anime.mal_id}`}>Detalhes</Link>}
    </div>
  )
}

export default AnimeCard