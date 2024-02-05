import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './NavBarComponent.css'
import { useSelector } from "react-redux"
import { useContext, useEffect, useState } from 'react'
import { LangContext } from "../Context/LangContext"


function NavBarComponent(props) {


    const {contextLang, setContextLang} = useContext(LangContext)
    console.log(contextLang )
    const history = useHistory()
    function searchPage(e) {
        e.preventDefault()
        history.push(`/search/?${search}`)
    }
    const [search, setSearch] = useState("")
    const favCounter = useSelector((state) => state.counter)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
            <div className="container-fluid d-flex justify-content-end">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid ">
                        <div className="row col-4 m-0">
                            <li className="nav-item navHome col-2 text-start">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item navHome col-2 ">
                                <Link className="nav-link active position-relative" aria-current="page" to="/favorites">
                                    Favorites
                                    <span className="position-absolute top-0 start-20 translate-middle badge rounded-pill bg-danger">
                                        {favCounter}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </Link>
                            </li>
                        </div>
                        <div className="row col-3 me-5">
                            <div className="container-fluid justify-content-end ">
                                <form className="d-flex justify-content-end">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)}></input>
                                    <button className="btn btn-outline-success" type="submit" onClick={(e) => searchPage(e)}>Search</button>
                                </form>
                            </div>
                        </div>
                        <select className="form-select mySelectMenu  ms-5 me-5 text-white text-center" aria-label=".form-select-sm example"
                        onChange={(e)=> setContextLang(e.target.value)}>
                            <option value="en" className="text-white">English</option>
                            <option value="ar" className="text-white" >Arabic</option>
                            
                        </select>
                        <div className="row  col-3 ">
                            <li className="nav-item  navLogIn col-3 container-fluid text-end me-0 ">
                                <Link className="nav-link active ms-4" to="/loginpage">Sign In</Link>
                            </li>
                            <li className="nav-item  navSignUp col-3 container text-end m-0">
                                <Link className="nav-link active ms-0" aria-current="page" to="/registerpage">Sign up</Link>
                            </li>
                        </div>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBarComponent
