import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import MovieCardComponenet from "../../Componenets/MovieCardComponent"
import { LangContext } from "../../Context/LangContext"


function FavouritesPage() {

//! Day5 ------------------------------------

    const {contextLang, setContextLang} = useContext(LangContext)

    //? Day4 ----------------------------------------

    const [favMovies, setFavMovies] = useState([])
    const getMoviesId = useSelector((state) => state.moviesId)
    const moviesApi = getMoviesId.map((movie)=>{
        return (
            `https://api.themoviedb.org/3/movie/${movie}?language=${contextLang}&api_key=da4e0d3bd6b4f860b5788aa43ae24d86`
        )})
    useEffect(() => {

        axios.all(moviesApi.map((movie) => axios.get(movie)))
        .then((res)=> {
                 const movieData = res.map((res) => res.data);
                 setFavMovies(movieData)
     } )}
    , [getMoviesId,contextLang])
    console.log(favMovies)
    return (
        <>
            <div className='container'>
                <div className='row m-5 g-5'>
                    {
                        favMovies.map((movie) => {
                            return (<MovieCardComponenet cardTilte={movie.title} cardSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} footer={movie.release_date} id={movie.id}></MovieCardComponenet>)
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default FavouritesPage