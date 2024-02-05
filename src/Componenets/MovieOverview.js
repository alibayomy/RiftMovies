

function MovieOverview(props)
{
    return(
        <p className={`fw-bold text-white mt-5 fs-3  ${props.class}`}> {props.content}</p>
    )
}
export default MovieOverview