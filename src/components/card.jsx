import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { currentMovie } from '../features/movieInfo'

export const Card = ({ movie }) => {

  const dispatch = useDispatch()
  const Movie = {
    name: movie.name ? movie.name : "",
    language: movie.language ? movie.language : "",
    ganres: movie.ganres ? movie.ganre : [],
    premiered: movie.premiered ? movie.premiered : "",
    officialSite: movie.officialSite ? movie.officialSite : "",
    rating: movie.rating ? movie.rating : "",
    network: movie.network ? movie.network : {},
    image: movie.image ? movie.image : {},
    summary: movie.summary ? movie.summary : ""
  }
  

  const setdata = ()=> {
    dispatch(currentMovie(Movie))
  }
  
  const setdataToLocalStorage = ()=>{
    setdata()
    localStorage.setItem('movie',JSON.stringify(Movie))
  }
  
  return (
    <div >
      <Link to='/summary'>
        <button onClick={setdataToLocalStorage} className=" cursor-pointer text-white bg-slate-800 w-52 h-1/4 m-2 rounded-md hover:bg-sky-300 hover:text-white active:bg-sky-500/50 active:text-black">
          <img className=" p-4 " src={movie.image?.medium != undefined ? movie.image.medium : "https://via.placeholder.com/360x480"} alt="" />
          <p className=" p-3 text-start">{movie['name']}</p>
          <p className=" p-3 text-start text-sm">{movie['language']}</p>
          <p className="p-3 text-start text-sm">{movie['premiered']}</p>
        </button>
      </Link>
    </div>

  )
}