import {useState, useEffect} from 'react';

export const UseFetch = (url) => {

  const [animes, setAnimes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
       setLoading(true)
      let res = await fetch(url)
      let  data = await res.json()

      setAnimes(data.data)
      
      console.log(data.data)
      setLoading(false)
    }
    fetchData()
  },[url])

  return {animes, loading}
}
