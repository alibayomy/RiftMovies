
import { useState } from 'react'
import ButtonComponenet from '../../Componenets/ButtonsComponent'
import './RegisterPage.css'
function RegisterPage()
{

    const emailReg = new RegExp (/^\w+@(gmail| yahoo| hotmail| outlook).(com|org|net|edu)(.eg)?$/)
    const userNameReg = new RegExp(/^[a-zA-Z0-9_]+$/)
    const passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#]).+/)

    const [erros, setErrors]= useState({
        inputNameError: "",
        inputEmailError: "",
        inputUserNameError: "",
        inputPassowrdError: "",
        inputConfPassowrdError: ""
    })

    const [validClass, setVaidClass]= useState({
        inputNameClass:"",
        inputEmailClass:"",
        inputUserNameClass:"",
        inputPassowrdClass:"",
        inputConfPassowrdClass:""
    })
    const [data, setData]= useState({
        inputName:"",
        inputEmail:"",
        inputUserName:"",
        inputPassowrd:"",
        inputConfPassowrd:""
    })

    const [mypass, setPassType]= useState({
        passType: "password",
        confPassType: "password"
    })

    const [eyeIcon, setEyeIcon]= useState({
        eyeIcon: "fa-regular fa-eye-slash",
        confEyeIcon: "fa-regular fa-eye-slash"
    })

    function changInput(e)
    {
        const inputsArr = ["inputName", "inputEmail", "inputUserName", "inputPassowrd", "inputConfPassowrd"]
        //! ALSO INDEX OF , GET INDEX !!!!
        function checkErrors(input){
            if (input.value.length == 0)
            {
                setVaidClass({
                    ...validClass,
                    [input.name + "Class"]:"is-invalid" 
                })
                return "This Filed is Required"
            }

            if (input.name == "inputEmail")
            {
                if (!emailReg.test(input.value))
                {
                    setVaidClass({
                        ...validClass,
                        [input.name + "Class"]:"is-invalid" 
                    })
                    return "Invalid Email Format"
                }
            }
            if (input.name == "inputUserName")
            {   
                if (!userNameReg.test(input.value))
                {
                    setVaidClass({
                        ...validClass,
                        [input.name + "Class"]:"is-invalid" 
                    })
                    return "Invalid User Name Format"
                }
            }
            if (input.name == "inputPassowrd")
            {
               if( !passRegex.test(input.value) && input.value.length < 8)
               {
                setVaidClass({
                    ...validClass,
                    [input.name + "Class"]:"is-invalid" 
                })
                return(
                    <>
                        <p>Invalid Password Format</p>
                    </>
                )
               }
            }
            if (input.name == "inputConfPassowrd")
            {
                if (input.value != data.inputPassowrd)
                {
                    setVaidClass({
                        ...validClass,
                        [input.name + "Class"]:"is-invalid" 
                    })
                    return "Passwords don't Match"
                }
            }
            setVaidClass({
                ...validClass,
                [input.name + "Class"]:"is-valid" 
            })
           
        }

        // e.target.value.length == 0 ? "This Field is Required" : !emailReg.test(e.target.value) &&   "Invalid Email Format"
        //! if (e.target.name in inputsArr) WHYYYYYYYYYYYYY------------------------------------------- 
        if (inputsArr.includes(e.target.name))  
        {
            let myInput = e.target.name
            setData({
                ...data,
                [myInput]: e.target.value      //? WOw worked !!!
            })
            setErrors({
                ...erros,
                [myInput + "Error"]: checkErrors(e.target)
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

    function showPass(e){
        if (e.target.id == "justPass")
        {
            if (mypass.passType == "password")
            {
                setPassType({
                    ...mypass,
                    passType: "input"
                })
                setEyeIcon({
                    ...eyeIcon,
                    eyeIcon: "fa-regular fa-eye"
                })
            }
            else
            {
                setPassType({
                    ...mypass,
                    passType: "password"
                })
                setEyeIcon({
                    ...eyeIcon,
                    eyeIcon: "fa-regular fa-eye-slash"
                })
            }
        }
        else 
        {
            if (mypass.confPassType == "password")
            {
                setPassType({
                    ...mypass,
                    confPassType: "input"
                })
                setEyeIcon({
                    ...eyeIcon,
                    confEyeIcon: "fa-regular fa-eye"
                })
            }
            else
            {
                setPassType({
                    ...mypass,
                    confPassType: "password"
                })
                setEyeIcon({
                    ...eyeIcon,
                    confEyeIcon: "fa-regular fa-eye-slash"
                })
            }
        }
            
        }

        function onSubmitData(e){
            e.preventDefault()

        }
    

    return(
        <div className='container formDadContainer'>
            <div className='row h-100  align-items-center'>
            <div className="container-sm formCont p-4 col-lg-8 col-md-12 col-sm-12 rounded">
                <form onSubmit={(e) => onSubmitData(e)}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="input" className={`form-control ${validClass.inputNameClass}`} name="inputName"
                        value={data.inputName}
                        onChange={(e)=>changInput(e)}></input>
                        <p className='error'>{erros.inputNameError}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label ">Email address</label>
                        <input type="email" className={`form-control ${validClass.inputEmailClass}`} name="inputEmail" aria-describedby="emailHelp"
                        value={data.inputEmail}
                        onChange={(e)=>changInput(e)}></input>
                        <p id='emptyEmail' className='error'>{erros.inputEmailError}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputUserName" className="form-label ">User Name</label>
                        <input type="input" className={`form-control ${validClass.inputUserNameClass}`} name="inputUserName"
                        value={data.inputUserName}
                        onChange={(e) => changInput(e)}></input>
                        <p className='error'>{erros.inputUserNameError}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassowrd" className="form-label ">Password</label>
                        <input type={`${mypass.passType}`} className={`form-control ${validClass.inputPassowrdClass}`} name="inputPassowrd"
                        value={data.inputPassowrd}
                        onChange={(e)=>changInput(e)}></input>
                        <i id='justPass' onClick={(e)=>showPass(e)} className={`${eyeIcon.eyeIcon}`}></i>
                        <p className='error'>{erros.inputPassowrdError}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputConfPassowrd" className="form-label">Confirm Password</label>
                        <input type={`${mypass.confPassType}`} className={`form-control ${validClass.inputConfPassowrdClass}`} name="inputConfPassowrd"
                        value={data.inputConfPassowrd}
                        onChange={(e)=> changInput(e)}></input>
                        <i id='confPass' onClick={(e)=>showPass(e)} className={`${eyeIcon.confEyeIcon}`}></i>
                        <p className='error'>{erros.inputConfPassowrdError}</p>
                    </div>
                
                    <ButtonComponenet display="d-inline" title="Register" btnClass="btn-success"/>
                </form>
            </div>
        </div>
    </div>
    )
}
export default RegisterPage