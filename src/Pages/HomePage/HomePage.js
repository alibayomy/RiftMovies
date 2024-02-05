import slideOne from '../../images/avatar-streaming.webp'
import slideTwo from '../../images/139906_movie-wallpapers-and-poster-of-latest-movies-hd-wallpapers_2560x1600_h.jpg'
import slideThree from '../../images/the-avengers-superhero-movie-eeotwqkmypkvalg9.jpg'

import SliderComponent from '../../Componenets/SliderComponent'

import './HomePage.css'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import MovieCardComponenet from '../../Componenets/MovieCardComponent'
import { Link, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import PaginationComponent from '../../Componenets/PaginationComponent'
import { useSelector } from 'react-redux'
import ImageFromCardComponent from '../../Componenets/ImageFromCardComponent'
import firstImg from '../../images/medal.png'
import secondImg from '../../images/winner.png'
import thirdImg from '../../images/third.png'
import { LangContext } from '../../Context/LangContext'



function HomePage(props) {

//! Day5 ------------------------------------

    const {contextLang, setContextLang} = useContext(LangContext)

//? Day4 ----------------------------------------
    const getMoviesId = useSelector((state) => state.moviesId)
    const favCounter = useSelector((state) => state.counter)

  

    function nextPage() {
        (currentPage + 1) <= pages.totalPageNum && setCurrentPage(currentPage + 1)


    }
    function prevPage() {
        (currentPage - 1) > 0 && setCurrentPage(currentPage - 1)
    }

    const [pages, setPages] = useState({
        pageNum: 0,
        results: [],
        totalPageNum: 0
    })
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?language=${contextLang}&api_key=da4e0d3bd6b4f860b5788aa43ae24d86&page=${currentPage}`)
            .then((res) => (setPages({
                pageNum: res.data.page,
                results: res.data.results,
                totalPageNum: res.data.total_pages
            })))
            .catch((err) => console.log(err))
    }, [currentPage, getMoviesId, favCounter, contextLang])
    const getMoviesToSort = [...pages.results]
    const topFourMovies = (getMoviesToSort.sort((a,b) => b.vote_average - a.vote_average)).slice(0,3)
    return (
        <>
            <div className="carousel-inner position-absolute">
                <img src={slideOne}className="d-block w-100" alt="..."></img>
            </div>
            <div className='presentation position-relative'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                             <p className='topRated '>Top Rated Movies</p>
                        </div>
                </div>
                
                    <div className='row m-3 g-5 justify-content-center  '>
                       {
                            topFourMovies.map((movie,index) => {
                                return ( <ImageFromCardComponent imgSrc = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  rankImg={ (index === 0) ? firstImg :  (index ==1) ? secondImg : thirdImg} ></ImageFromCardComponent>)
                            })
                        
                       }
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row m-5 g-5'>
                    {
                        pages.results.map((movie) => {
                            return (<MovieCardComponenet cardTilte={movie.title} cardSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} footer={movie.release_date} id={movie.id}></MovieCardComponenet>)

                        })
                    }
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-center w-100'>
                    <div className='col-6'>
                        <PaginationComponent nextFunction={() => nextPage()} prevFunction={() => prevPage()} />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-center w-100'>
                    <div className=' ms-5 col-1'>
                        <p className=' btn btn-outline-primary'>{`Page ${currentPage}`}</p>
                    </div>
                </div>
            </div>


        </>
    )

}
export default HomePage



