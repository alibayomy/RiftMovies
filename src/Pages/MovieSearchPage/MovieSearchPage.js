import { useLocation, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min"
import MovieCardComponenet from "../../Componenets/MovieCardComponent"

import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { LangContext } from "../../Context/LangContext"


function MovieSearchPage(props)
{
   //! Day5 ------------------------------------

   const {contextLang, setContextLang} = useContext(LangContext)
   //! ------------------------------------
    const searchParam = useLocation().search
    const[movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?language=${contextLang}&api_key=da4e0d3bd6b4f860b5788aa43ae24d86&query=${searchParam}`)
        .then((res)=>setMovies(res.data.results))
        .catch((err) => console.log(err))
    }, [searchParam, contextLang])
    return(
        <>
            
                <div className='container'>
                    <div className='row m-5 g-5'>
                        {
                        movies.map((movie) => {
                        return (<MovieCardComponenet cardTilte={movie.title}  cardSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} footer={movie.release_date} id={movie.id}></MovieCardComponenet>)
                            })
                        }
                        </div>
                    </div>
            </>
     )
}
export default MovieSearchPage