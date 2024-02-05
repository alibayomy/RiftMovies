import { Button } from "bootstrap";

function ButtonComponenet(props)
{
    return(
        <div className={`${props.display}`}>
            <button className={`btn  ${props.btnClass}`}>{props.title}</button>
        </div>
    )
}
export default ButtonComponenet