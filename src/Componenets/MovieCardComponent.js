import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './MovieCardComponent.css'
import whiteheart from '../images/heart white.png'
import redHeart from '../images/heart.png'
import { useDispatch, useSelector } from 'react-redux'
import { changeFavorites } from '../Pages/Store/Actions/CounterAction'
import { useState } from 'react'

function MovieCardComponenet(props)
{
    const favCounter = useSelector((state) => state.counter)
    const getMoviesId = useSelector((state) => state.moviesId)

    const [currentIcon, setcurrentIcon] = useState({
        heart: whiteheart
    })

    const dispatch = useDispatch()
    function addtoFavo(e)  {
        const singleMovieId = e.target.parentElement.parentElement.id
        const addtoMovies = getMoviesId
        if (addtoMovies.includes(singleMovieId))
        {
            const updateMovies = getMoviesId.filter((movieID)=> movieID !== singleMovieId)
            setcurrentIcon({
                ...currentIcon,
                heart:whiteheart
            })
            dispatch((changeFavorites(favCounter-1, updateMovies)))

        }
        else{
            addtoMovies.push(singleMovieId)
            setcurrentIcon({
                ...currentIcon,
                heart:redHeart
            })
            dispatch((changeFavorites(favCounter+1, addtoMovies)))
        }
   
        
    }
    return(
        <div className="card m-1 " style={{width: "18rem"}} id={props.id}>
            <Link to={`/movie/${props.id}`}>
                <img src={`${props.cardSrc}`} className="card-img-top" ></img>
            </Link>
                <div className="card-body text-center">
                    <p className="card-text rounded">{props.cardTilte}</p>
                    <img src={getMoviesId.includes(String(props.id))  ? redHeart : whiteheart } className='heartIcon ' onClick={(e) => addtoFavo(e) }></img>
                  
                </div>
                <div className="card-footer bg-danger">
                    {props.footer}
                </div>
        </div>
    )
}
export default MovieCardComponenet