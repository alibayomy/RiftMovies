import { Link } from "react-router-dom"


function PaginationComponent(props)
{
    return(
        <nav aria-label="Page navigation example ">
            <ul className="pagination pagination-lg  justify-content-center">
                <li className="page-item " onClick={props.prevFunction}><Link className="page-link" to="#">Previous</Link></li>
                <li className="page-item" onClick={props.nextFunction}><Link className="page-link" to="#">Next</Link></li>
            </ul>
        </nav>
    )
}
export default PaginationComponent