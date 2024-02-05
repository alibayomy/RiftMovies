
import { useState } from 'react'
import ButtonComponenet from '../../Componenets/ButtonsComponent'
import './LoginPage.css'

function LoginPage()
{
    const emailReg = new RegExp (/^\w+@(gmail| yahoo| hotmail| outlook).(com|org|net|edu)(.eg)?$/)

    const [erros, setErrors]= useState({
        emailError: "",
        passwordError: ""
    })
    const [data, setData]= useState({
        email:"",
        password:""
    })
    const [mypass, setPassType]= useState({
        passType: "password"
    })

    const [eyeIcon, setEyeIcon]= useState({
        eyeIcon: "fa-regular fa-eye-slash"
    })
    function changInput(e)
    {
        if (e.target.name == "inputEmail")
        {
            setData({
                ...data,
                email: e.target.value
            })
            setErrors({
                ...erros,
                emailError: e.target.value.length == 0 ? "This Field is Required" : !emailReg.test(e.target.value) &&   "Invalid Email Format"
            })
        }
        else
        {
            setData({
                ...data,
                password: e.target.value
            })
            setErrors({
                ...erros,
                passwordError: e.target.value.length < 8 ? "Password must has more than 8 characters" : e.target.value.length == 0 && "This Field is Requird"
            })
        }
    }

    function onSubmitData(e){
        e.preventDefault()
    }


    function showPass(){
        if (mypass.passType == "password")
        {
            setPassType({
                passType: "input"
            })
            setEyeIcon({
                eyeIcon: "fa-regular fa-eye"
            })
        }
        else
        {
            setPassType({
                passType: "password"
            })
            setEyeIcon({
                eyeIcon: "fa-regular fa-eye-slash"
            })
        }
        
        }
    
    return(
        <div className='container formDadContainer'>
            <div className='row h-100  align-items-center'>
                <div className="container-sm formCont p-4 col-lg-8 col-md-12 col-sm-12 rounded">
                    <form onSubmit={(e) => onSubmitData(e)}>
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label fw-bold">Email address</label>
                            <input type="email" className="form-control" name="inputEmail" aria-describedby="emailHelp" 
                            value={data.email}
                            onChange={(e)=>changInput(e)}></input>
                            <p id='emptyEmail' className='error'>{erros.emailError}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassowrd" className="form-label fw-bold">Password</label>
                            <input type={`${mypass.passType}`} className="form-control" name="inputPassowrd"
                            value={data.password}
                            onChange={(e)=>changInput(e)}></input>
                            <i onClick={()=>showPass()} className={`${eyeIcon.eyeIcon}`}></i>
                            <p className='error'>{erros.passwordError}</p>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" htmlFor="exampleCheck1">Agree on terms and servcies</label>
                        </div>
                        <ButtonComponenet display="d-grid" title="Login" btnClass="btn-primary"/>
                    </form>
        </div>
            </div>
        </div>
        
    )
}
export default LoginPage