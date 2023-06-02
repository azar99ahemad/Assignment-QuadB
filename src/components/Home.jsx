import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { Card } from "./card"
import axios from "axios";
function Home() {
  const searchMovies = (title) => {
    axios.get(`https://api.tvmaze.com/search/shows?q=${title}`)
      .then(response => {
        console.log(response.data);
        setMovies(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  const [movies, setMovies] = useState([])
  const [searchName, setSearchName] = useState("")
  useEffect(() => {
    searchMovies("all")
  }, [])

  return (
    <div className=" flex-col justify-center bg-[#0b1020] m-0">
      <div className=" flex flex-wrap my-2.5 rounded-md justify-evenly mx-5 my-4 p-3 ">
      <Link to='/'  >
          <h1 className=" text-white bold text-3xl text-centerbg-slate-950 ">
            Just Watch
          </h1>
        </Link>
        <input onChange={(e) => { e.target.value != "" && setSearchName(e.target.value) }} placeholder="Search for movies..." className=" border-hidden rounded-3xl w-3/6 h-9 mx-3 p-5" type="text" />
        <button onClick={() => { searchMovies(searchName) }} className=" bg-sky-300 mx-3 hover:bg-sky-500/50 hover:text-white active:text-black  border-hidden rounded-3xl w-20">Search</button>
      </div>
      <div className=" flex flex-wrap m-12">
        {
          movies?.map((item) => {
            return (
              <Card key={item.show.id} movie={item.show} />
            )
          })
        }
        {
          movies.length == 0 && <h1 className="text-white p-10">No Movies Found</h1>
        }
      </div>
    </div>
  )
}

export default Home
