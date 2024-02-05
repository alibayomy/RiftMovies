import firstImg from '../images/medal.png'
import secondImg from '../images/winner.png'
import thirdImg from '../images/third.png'


import './ImageFromCardComponent.css'
function ImageFromCardComponent(props)
{
    return (
        <div className="m-1 " style={{width: "18rem"}}>
            <div className="card-body">
                <img src={(props.rankImg) ? props.rankImg : thirdImg} className='topRated'></img>
            </div>
            <img src={props.imgSrc} className="card-img-top" alt="..."></img>
        </div>
    )
}
export default ImageFromCardComponent