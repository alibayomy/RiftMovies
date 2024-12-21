import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import './SingleMoviePage.css'
import PagesTitleComponent from "../../Componenets/PagesTitleComponent"
import MovieOverview from "../../Componenets/MovieOverview"
import starImage from '../../images/Filled_star.png'
import { LangContext } from "../../Context/LangContext"

function SingleMoviePage(props){


 //! Day5 ------------------------------------

    const {contextLang, setContextLang} = useContext(LangContext)

    const movieId = useParams()
    const [movieData, setMovieData]= useState({
    })
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}?language=${contextLang}&api_key=da4e0d3bd6b4f860b5788aa43ae24d86`)
        .then((res)=>setMovieData(res.data))
        .catch((err) => console.log(err))
    }, [contextLang])
    return(
        <>
            <div className="container m-5 align-items-center singleMovieCard" >
                {/* <img className="bgImg img-fluid" src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}></img> */}
                <div className="row  justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div class="card" style={{width: "18rem"}}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} className="card-img-top" alt="..."></img>
                            </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 border-bottom">
                        <PagesTitleComponent title={movieData.title} color="text-info"></PagesTitleComponent>
                        <MovieOverview content = {movieData.overview} />
                    </div>
                    <div className=" col-lg-6 col-md-6 col-sm-6 offset-md-6 mt-5">
                        <img src={starImage} className="me-5"></img>
                        <span className="text-white fw-bold">{Math.round(movieData.vote_average * 10)  / 10}</span>
                    </div>
                     <div className=" col-lg-6 col-md-6 col-sm-6 offset-md-6 mt-5">
                        {
                            movieData.genres?.map((genre)=>
                            {
                                return(<span className="fw-bold fs-3" style={{color: "#EC9E14"}}>{`${genre.name}   `}</span>)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleMoviePage