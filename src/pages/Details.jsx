import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./Details.css";

import Spinner from "../components/Spinner";

const Details = () => {
  const [readMore, SetreadMore] = useState(false);
  const [anime, setAnime] = useState();
  const [loading, setLoading] = useState(false);

  const [characters, setCharacters] = useState([])


  const { id } = useParams();

  const getAnime = async(anime) => {
    setLoading(true)
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
    const json = await response.json()
    setLoading(false)
    setAnime(json.data)
  }

  const getCharacters = async(anime) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
    const json = await res.json()

    setCharacters(json.data)

  }

  useEffect(() => {
    getAnime(id)
    getCharacters(id)
     console.log(characters)
  },[]);

  return (
    <div>
      {loading && <Spinner />}
      {anime && (
          <main key={anime.mal_id}>
          <h1>{anime.title}</h1>
          <div className="details">
            <div className="detail">
              <div className="image">
                <img src={anime.images.jpg.image_url} alt={anime.title} />
              </div>
              <div className="animeDetails">
                <p>
                  Aired: <span>{anime.aired.string}</span>
                </p>
                <p>
                  Rank: <span>{anime.rank}</span>
                </p>
                <p>
                  Score: <FaStar style={{ color: "#f7d354" }} />{" "}
                  <span>{anime.score}</span>
                </p>
                <p>
                  Popularity: <span>{anime.popularity}</span>
                </p>
                <p>
                  Status: <span>{anime.status}</span>
                </p>
                <p>
                  Source: <span>{anime.source}</span>
                </p>
                <p>
                  Season: <span>{anime.season}</span>
                </p>
                <p>
                  Duration: <span>{anime.duration}</span>
                </p>
              </div>
            </div>
            <p className="description">
              synopsis:{" "}
              <span>
              { readMore ? anime.synopsis : anime.synopsis.substring(0, 450) + '...'}
                <button
                  onClick={() => {
                    SetreadMore(!readMore);
                  }}
                >
                  {readMore ? "Read Less" : "Read More"}
                </button>
              </span>
            </p>
          </div>
          <h1>trailer</h1>
          <div className="trailer">
              <iframe 
                  src={anime.trailer.embed_url} 
                  title="Inline Frame Example"
                  width="560"
                  height="315"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
              </iframe>
          </div>
        <h1 className="title">Characters</h1>
        <div className="characters">
          {characters && characters.map((character) => 
            <div className="character" key={character.character.mal_id}>
              <img src={character.character.images.jpg.image_url} alt={character.character.name} />
              <h4>{character.character.name}</h4>
              <p>{character.role}</p>
            </div>
            
          )}
        </div>
        </main>
      )}
    </div>
  );
};

export default Details;
