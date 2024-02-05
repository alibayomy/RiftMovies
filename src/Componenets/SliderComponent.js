import slideOne from '../images/avatar-streaming.webp'
import slideTwo from '../images/139906_movie-wallpapers-and-poster-of-latest-movies-hd-wallpapers_2560x1600_h.jpg'
import slideThree from '../images/the-avengers-superhero-movie-eeotwqkmypkvalg9.jpg'

import './SliderComponent.css'
function SliderComponent()
{
    return(
        <div id="carouselExampleControls h-50" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slideOne} className="d-block w-100 " alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={slideTwo} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={slideThree} className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>
    )
}
export default SliderComponent